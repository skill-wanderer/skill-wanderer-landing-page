# Contact Step 1.3 QA Remediation

## QA Bug #5: Email verification concern

### Current state before Step 1.3

- The form accepted an email address but did not explain what validation actually happened.
- Success messaging did not tell users whether the message reached an inbox or whether they should expect an automatic confirmation email.

### Expected state

- Users should know that the form validates email syntax only.
- Users should understand that follow-up is manual and tied to the submitted address.
- The UI must not imply fake verification or guaranteed email delivery semantics that the client-side flow cannot prove.

### Root cause

- Trust-flow copy was underspecified.
- The route relied on a generic success banner without clarifying the operational follow-up model.

### Safe fix strategy

- Add explicit field hints near both email fields.
- State that syntax is validated, there is no automatic verification email, and manual reply uses the submitted address.
- Include the submitted reply address inside the success message for explicit reassurance.

### Blast radius

- `pages/contact.vue` only
- no backend, vendor, or Firebase changes

### Remediation verdict

- Resolved

## QA Bug #6: Checkbox has no effect

### Current state before Step 1.3

- The checkbox label implied significance but did not say whether it was required, optional, or purely informational.
- Users could reasonably interpret it as a hidden gate or as a broken control.

### Expected state

- The checkbox must have one unambiguous role.
- If it is optional, the UI must say that explicitly.

### Root cause

- Product intent was not expressed in the copy.
- The field value was included in the payload, but there was no visible explanation of its purpose.

### Safe fix strategy

- Choose the optional-preference path.
- Update the label and add helper text explaining that it only helps tailor the response and does not block submission.

### Blast radius

- `pages/contact.vue` only
- no schema or architecture changes

### Remediation verdict

- Resolved

## QA Bug #7: No visible confirmation assurance

### Current state before Step 1.3

- Success banners were short-lived and generic.
- Error messages did not clearly distinguish configuration failure, vendor rejection, and network failure in user terms.

### Expected state

- Successful submission should produce clear, persistent reassurance that the message or application was received and where the reply will go.
- Failed submission should explicitly state that the request was not sent or not confirmed.
- Duplicate submit attempts must not produce duplicate outbound requests.

### Root cause

- The route had operational error classification internally but the user-facing messaging was still too generic.
- Success banners auto-dismissed quickly, reducing trust.

### Safe fix strategy

- Replace generic success strings with explicit confirmation banners.
- Replace generic failure strings with branch-specific user copy.
- Keep the banner visible until the user changes state or resubmits.
- Guard duplicate submits with the existing `isSubmitting` and `isGuildSubmitting` state.

### Blast radius

- `pages/contact.vue` only
- no vendor migration or architectural change

### Remediation verdict

- Resolved