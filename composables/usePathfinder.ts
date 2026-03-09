interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface Source {
  title: string
  url: string
  chunk_index: number
  total_chunks: number
  score: number
}

interface ChatResponse {
  answer: string
  sources: Source[]
}

interface StoredSession {
  history: ChatMessage[]
  personality: string
  expiresAt: number
}

const STORAGE_KEY = 'pathfinder_chat_session'
const DEFAULT_PERSONALITY = 'admiral'

function getStorage(mode: string): Storage | null {
  if (import.meta.server) return null
  return mode === 'tab' ? sessionStorage : localStorage
}

function loadSession(storage: Storage | null): ChatMessage[] {
  if (!storage) return []
  try {
    const raw = storage.getItem(STORAGE_KEY)
    if (!raw) return []
    const session: StoredSession = JSON.parse(raw)
    if (Date.now() > session.expiresAt) {
      storage.removeItem(STORAGE_KEY)
      return []
    }
    return session.history
  } catch {
    return []
  }
}

function saveSession(storage: Storage | null, history: ChatMessage[], expiryMinutes: number) {
  if (!storage) return
  // Reset expiry countdown from now — every new message extends the session
  const session: StoredSession = {
    history,
    personality: DEFAULT_PERSONALITY,
    expiresAt: Date.now() + expiryMinutes * 60 * 1000,
  }
  storage.setItem(STORAGE_KEY, JSON.stringify(session))
}

function clearSession(storage: Storage | null) {
  if (!storage) return
  storage.removeItem(STORAGE_KEY)
}

export function usePathfinder() {
  const config = useRuntimeConfig()
  const { apiUrl, domains: domainsRaw, sessionExpiryMinutes, sessionStorage: storageMode } = config.public.pathfinder as {
    apiUrl: string
    domains: string
    sessionExpiryMinutes: number
    sessionStorage: string
  }

  const domains = domainsRaw.split(',').map(d => d.trim()).filter(Boolean)
  const storage = getStorage(storageMode)

  const history = ref<ChatMessage[]>(loadSession(storage))
  const loading = ref(false)
  const error = ref<string | null>(null)
  const isConfigured = Boolean(apiUrl)

  async function sendMessage(question: string): Promise<ChatResponse | null> {
    if (!apiUrl) {
      error.value = 'Pathfinder is not configured'
      return null
    }

    loading.value = true
    error.value = null

    try {
      const res = await $fetch<ChatResponse>(`${apiUrl}/api/chat`, {
        method: 'POST',
        body: {
          question,
          domains,
          personality: DEFAULT_PERSONALITY,
          history: history.value.slice(-50), // API max 50 turns
        },
      })

      history.value.push(
        { role: 'user', content: question },
        { role: 'assistant', content: res.answer },
      )

      saveSession(storage, history.value, sessionExpiryMinutes)

      return res
    } catch (err: any) {
      error.value = err?.data?.message || err?.message || 'Something went wrong'
      return null
    } finally {
      loading.value = false
    }
  }

  function resetChat() {
    history.value = []
    clearSession(storage)
  }

  return {
    history,
    loading,
    error,
    isConfigured,
    sendMessage,
    resetChat,
  }
}
