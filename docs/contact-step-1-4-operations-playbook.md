# Contact Step 1.4 Operations Playbook

## Current state

The `/contact` route remains a browser-only Web3Forms integration.
There is no backend queue, no internal CRM write, and no automatic operator acknowledgement.

Operational follow-up remains manual.

The route now gives operators and users a common reconciliation handle through `submission_reference`.

## Operational risk

The main production risks are operational rather than architectural:

- a user sees a successful submission but the team replies late
- a user follows up without enough context to locate their message quickly
- a rejection or outage is mistaken for a successful send
- future copy changes drift back into claiming more certainty than the frontend can prove

## Mitigation

Current mitigations are:

- success copy says accepted for delivery, not inbox delivery
- failure copy says when the application or message was not sent
- successful payloads include `submission_reference` and `submitted_at`
- users are told to keep and reuse the reference if they need manual follow-up
- duplicate submits remain blocked while a request is pending

## Monitoring strategy

Operators should monitor the contact flow through the manual inbox and deterministic references.

Daily or per business cycle:

- review new hire-form submissions
- review new join-form submissions
- search for unanswered messages older than the published response window
- check spam and filtered folders if a user reports no reply
- use exact `submission_reference` search before concluding that a message is missing

If QA or engineering is involved:

- reproduce locally with a temporary key or mocked vendor responses
- inspect the Step 1.4 audit log and lifecycle ordering

## Deterministic response workflow

### Successful user follow-up with a reference

1. Ask for the exact `submission_reference`.
2. Search the vendor inbox for the exact string.
3. If found, review the payload contents and send the pending human response.
4. If found in spam or a filtered folder, move it into the normal response queue.
5. Reply to the user and retain the reference in the thread.

### User follow-up without a reference

1. Ask for the submission email address and approximate submission time.
2. Search recent inbox messages by address and time window.
3. If still not found, ask the user to resend through `/contact` or email directly.
4. When they resend, instruct them to keep the new reference.

### Confirmed vendor rejection or outage

1. Treat the submission as not sent.
2. Tell the user to retry later or use direct email.
3. Reproduce locally if repeated reports arrive.
4. Do not mark the original attempt as received unless a reference is present in the inbox.

## Response-time governance

Current public expectations on the page are:

- hire flow: reply within 24-48 hours
- join flow: reply after review, typically within a few days

If the team cannot meet those windows, the operational fix is to update staffing or process.
It is not acceptable to change the UI back to stronger delivery claims.

## Validation evidence

Step 1.4 runtime validation confirmed:

- success path displayed a reference-bearing confirmation message
- rejection path preserved join-form data for recovery
- audited events exposed the exact state transitions needed for manual investigation during QA
