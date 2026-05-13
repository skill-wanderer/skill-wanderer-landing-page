# Contact Step 1.4 Observability Governance

## Current state

Observability for `/contact` is intentionally minimal and local.

The implemented observability surface is:

- branch-specific user banners for success and failure
- dev-only structured browser audit events
- deterministic lifecycle names
- deterministic `submission_reference` values carried through UI and payload

The route still avoids:

- analytics SDKs
- production console telemetry
- backend observability infrastructure
- Firebase expansion

## Operational risk

The main observability gap is that production does not retain a centralized event history for submissions.

That creates three governance risks:

- failures can be under-observed until a user reports them
- operators can confuse manual inbox delay with transport failure
- future changes can silently break lifecycle semantics unless QA checks them intentionally

## Mitigation

The mitigation is to treat the local audit contract as a governed QA surface.

Required observability contract:

- lifecycle names remain stable unless docs are updated in the same change
- `submission_reference` remains present in both the payload and success UX
- no production console spam is introduced
- success copy remains within the real proof boundary

## Monitoring strategy

Before release or after contact-route changes:

1. Run `npm run typecheck`.
2. Boot a cold local dev server.
3. Validate `/contact` render.
4. Probe one accepted request and one rejected request with either mocked or real vendor behavior.
5. Inspect the audit log for ordered lifecycle events.
6. Confirm the success message shows the exact `submission_reference`.
7. Confirm rejected requests preserve user input.

When diagnosing regressions locally, use:

- `window.__SKILL_WANDERER_CONTACT_AUDIT_LOG__`
- `window.addEventListener('skill-wanderer:contact-form-event', handler)`

## Deterministic response workflow

### If success UX appears wrong

1. Trigger a mocked successful submission.
2. Confirm the success banner says accepted for delivery.
3. Confirm the displayed `submission_reference` matches the outbound payload.
4. If the reference is missing, treat it as a release blocker.

### If failures are unclear

1. Trigger a mocked rejection or network failure.
2. Confirm the user sees explicit not-sent messaging.
3. Confirm the audit log records `vendor_rejected`, `network_failed`, or `config_missing`.
4. If lifecycle naming no longer matches the contract, update code and docs together before release.

### If duplicate submission behavior is questioned

1. Reproduce against a pending request in local QA.
2. Confirm only one outbound request is sent.
3. Confirm the UI remains in the pending state during the first request.
4. Confirm duplicate attempts are blocked.

## Validation evidence

Step 1.4 local validation confirmed:

- successful hire-flow lifecycle reached `vendor_accepted` then `operator_pending`
- rejected join-flow lifecycle reached `vendor_rejected` and then `contact_form_submission_failed`
- both flows carried deterministic references in the audit log
- no production-only telemetry dependency was introduced
