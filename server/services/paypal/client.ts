import type { H3Event } from 'h3'

// A small PayPal REST client on plain fetch, so it runs the same on the Cloudflare Worker
// and on the Node server in the Docker image. The client secret never leaves the server.

export type PayPalEnvironment = 'sandbox' | 'production'

export interface PayPalCredentials {
  clientId: string
  clientSecret: string
  environment: PayPalEnvironment
}

const API_BASE_URLS: Record<PayPalEnvironment, string> = {
  sandbox: 'https://api-m.sandbox.paypal.com',
  production: 'https://api-m.paypal.com'
}

const REQUEST_TIMEOUT_MS = 15_000
// Access tokens last about nine hours. Renewing a minute early keeps a cached token
// from expiring between the check and the request that uses it.
const TOKEN_RENEWAL_MARGIN_MS = 60_000

export class PayPalApiError extends Error {
  constructor(
    message: string,
    /** HTTP status from PayPal, or 0 when PayPal could not be reached. */
    readonly status: number,
    /** PayPal's issue code or error name, such as 'INSTRUMENT_DECLINED'. */
    readonly issue?: string,
    /** Quote it to PayPal support to trace the request. */
    readonly debugId?: string
  ) {
    super(message)
    this.name = 'PayPalApiError'
  }
}

interface PayPalErrorBody {
  name?: unknown
  message?: unknown
  debug_id?: unknown
  details?: Array<{ issue?: unknown }>
  // The OAuth endpoint reports errors in its own shape.
  error?: unknown
  error_description?: unknown
}

let cachedToken: { key: string; value: string; expiresAt: number } | undefined

const pickString = (...values: unknown[]) =>
  values.find((value): value is string => typeof value === 'string' && value.trim().length > 0)?.trim()

/** Returns the PayPal credentials, or null while the client ID or secret is not configured. */
export const getPayPalCredentials = (event: H3Event): PayPalCredentials | null => {
  const config = useRuntimeConfig(event)
  const clientId = pickString(config.public.paypal.clientId)
  const clientSecret = pickString(config.paypalClientSecret)

  if (!clientId || !clientSecret) {
    return null
  }

  return {
    clientId,
    clientSecret,
    environment: config.public.paypal.environment === 'production' ? 'production' : 'sandbox'
  }
}

const readJson = async (response: Response): Promise<unknown> => {
  try {
    return await response.json()
  } catch {
    return null
  }
}

const toPayPalApiError = (response: Response, payload: unknown) => {
  const body = (payload ?? {}) as PayPalErrorBody

  return new PayPalApiError(
    pickString(body.message, body.error_description) ?? `PayPal responded with HTTP ${response.status}.`,
    response.status,
    pickString(body.details?.[0]?.issue, body.name, body.error),
    pickString(response.headers.get('paypal-debug-id'), body.debug_id)
  )
}

const callPayPal = async (credentials: PayPalCredentials, path: string, init: RequestInit) => {
  let response: Response

  try {
    response = await fetch(`${API_BASE_URLS[credentials.environment]}${path}`, {
      ...init,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    })
  } catch (error) {
    throw new PayPalApiError(error instanceof Error ? error.message : 'PayPal could not be reached.', 0)
  }

  const payload = await readJson(response)

  if (!response.ok) {
    throw toPayPalApiError(response, payload)
  }

  return payload
}

const getAccessToken = async (credentials: PayPalCredentials) => {
  const key = `${credentials.environment}:${credentials.clientId}`

  if (cachedToken?.key === key && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value
  }

  const payload = await callPayPal(credentials, '/v1/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${credentials.clientId}:${credentials.clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  }) as { access_token?: unknown; expires_in?: unknown } | null

  const value = payload?.access_token
  const expiresInSeconds = payload?.expires_in

  if (typeof value !== 'string' || typeof expiresInSeconds !== 'number') {
    throw new PayPalApiError('PayPal returned no access token.', 502)
  }

  cachedToken = { key, value, expiresAt: Date.now() + expiresInSeconds * 1000 - TOKEN_RENEWAL_MARGIN_MS }

  return value
}

/** Sends an authenticated request to the PayPal REST API and returns the parsed JSON body. */
export const requestPayPal = async (
  credentials: PayPalCredentials,
  path: string,
  { method = 'POST', body, headers }: { method?: 'GET' | 'POST'; body?: unknown; headers?: Record<string, string> } = {}
) => {
  const accessToken = await getAccessToken(credentials)

  try {
    return await callPayPal(credentials, path, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        ...headers
      },
      body: body === undefined ? undefined : JSON.stringify(body)
    })
  } catch (error) {
    // PayPal no longer accepts this token (for example after a credential change), so fetch a new one next time.
    if (error instanceof PayPalApiError && error.status === 401) {
      cachedToken = undefined
    }

    throw error
  }
}
