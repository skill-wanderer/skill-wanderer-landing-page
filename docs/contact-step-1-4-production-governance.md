# Contact Step 1.4 Production Governance

## Current state

Step 1.4 keeps the approved blast radius intact.

Code changes remain limited to `pages/contact.vue`.
Documentation changes remain limited to `docs/`.

The production runtime contract remains:

- `runtimeConfig.public.web3forms.accessKey`
- environment source: `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

No backend, Firebase, vendor migration, or analytics architecture changes were introduced.

## Governance risks

The production governance risks are:

- changing copy in ways that overclaim delivery certainty
- removing or renaming `submission_reference` without updating operations
- broadening the contact route into a new architecture under the guise of maintenance
- drifting away from the documented runtime config contract

## Mitigation

Production-safe governance rules for future contact work:

- do not claim inbox delivery unless there is verifiable server-side evidence
- keep `submission_reference` in the outbound payload and success UX
- keep failure messaging explicit about whether the request was sent
- keep the public runtime config contract unchanged unless a deliberate migration is approved
- keep observability local and explicit unless a broader product decision approves telemetry expansion
- keep changes inside the approved blast radius unless governance expands scope first

## Monitoring strategy

Release checks for any future `/contact` change:

1. `npm run typecheck` passes.
2. `/contact` renders on a cold dev boot.
3. A successful probe shows `accepted for delivery` wording and a visible reference.
4. A rejected probe shows explicit not-sent wording.
5. The success reference matches the payload reference.
6. Docs are updated when lifecycle names or operator workflows change.

## Deterministic response workflow

### Pre-deploy gate

1. Confirm `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is configured in the target environment.
2. Confirm the page does not show the configuration warning under the intended deployment setup.
3. Confirm success and failure wording still match the documented proof boundary.
4. Confirm the payload still includes `submission_reference` and `submitted_at`.
5. Confirm no unrelated architectural changes were mixed into the contact patch.

### Post-deploy incident triage

1. Gather the reported `submission_reference` when available.
2. Search the inbox for the exact reference.
3. If found, process the pending manual reply.
4. If not found, treat the submission as unverified and reproduce locally.
5. If local reproduction confirms a regression, fix the route without expanding architecture unless governance explicitly approves it.

## Step 1.4 verdict

Step 1.4 is production-safe within the approved scope.

It improves operational honesty, manual reconciliation, and QA observability without introducing unsupported delivery claims or widening the system architecture.
