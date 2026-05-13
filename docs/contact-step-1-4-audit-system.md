# Contact Step 1.4 Audit System

## Current state

The `/contact` route now generates a deterministic `submission_reference` for both submission flows before outbound transport.

The hire flow uses an `HIRE-YYYYMMDDHHMMSS-XXXXXXXX` format.
The join flow uses a `JOIN-YYYYMMDDHHMMSS-XXXXXXXX` format.

Each outbound Web3Forms payload now includes:

- `submission_reference`
- `submitted_at`
- `form_type`
- `source`

The user-facing success banner no longer claims proven inbox delivery.
It now states that the submission was accepted for delivery and tells the user to retain the reference for follow-up.

A dev-only structured audit sink now records browser-local lifecycle events in:

- `window.__SKILL_WANDERER_CONTACT_AUDIT_LOG__`

A dev-only event stream is also emitted as:

- `skill-wanderer:contact-form-event`

## Lifecycle contract

Implemented lifecycle states:

- `started`
- `duplicate_blocked`
- `vendor_request_started`
- `vendor_accepted`
- `vendor_rejected`
- `network_failed`
- `config_missing`
- `operator_pending`
- `unknown_failed`

Implemented event names:

- `contact_form_submission_started`
- `contact_form_duplicate_blocked`
- `contact_form_vendor_request_started`
- `contact_form_vendor_accepted`
- `contact_form_vendor_rejected`
- `contact_form_operator_pending`
- `contact_form_submission_failed`

## Operational risk

This audit surface is intentionally browser-local and dev-only.
It is not a production system of record.

That means:

- it supports deterministic QA and debugging
- it does not replace vendor delivery evidence
- it does not create production telemetry or long-term retention

If a production user reports that they submitted a form but no reply arrived, the reliable reconciliation surface is the manually searched vendor inbox using the `submission_reference` carried in the payload.

## Mitigation

The mitigation is to make manual reconciliation explicit instead of implied.

- Every successful outbound request now produces a user-visible reference.
- The same reference is sent to the vendor in the payload.
- Operators can ask for the reference and search the inbox for an exact match.
- The UI language now reflects the actual proof boundary: accepted for delivery, not confirmed inbox placement.

## Monitoring strategy

During development or QA:

- inspect `window.__SKILL_WANDERER_CONTACT_AUDIT_LOG__`
- listen for `skill-wanderer:contact-form-event`
- confirm lifecycle ordering for success, rejection, and network failure probes

Expected successful sequence:

1. `started`
2. `vendor_request_started`
3. `vendor_accepted`
4. `operator_pending`

Expected vendor rejection sequence:

1. `started`
2. `vendor_request_started`
3. `vendor_rejected`
4. `vendor_rejected` again on `contact_form_submission_failed`

Expected config failure sequence:

1. `started`
2. `config_missing`

## Deterministic response workflow

1. Capture the user-reported `submission_reference`.
2. Search the vendor inbox for the exact reference string.
3. If the reference exists, treat the message as delivered to the manual review queue and continue human follow-up.
4. If the reference does not exist, treat the prior submission as unverified and ask the user to resend or use direct email.
5. If local reproduction is required, run the route in dev mode and inspect the audit log for lifecycle ordering.

## Validation evidence

Step 1.4 validation confirmed:

- mock hire-flow success payload contained `submission_reference` and `submitted_at`
- mock hire-flow success banner displayed the same `submission_reference`
- mock hire-flow success reset the form
- mock join-flow rejection preserved entered fields
- mock join-flow rejection logged `vendor_rejected` and `contact_form_submission_failed`
- no production telemetry surface was introduced
