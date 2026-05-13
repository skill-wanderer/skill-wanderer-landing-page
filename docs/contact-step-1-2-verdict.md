# What Was Stabilized

- `pages/contact.vue` now uses the explicit `runtimeConfig.public.web3forms.accessKey` contract only.
- Hidden Web3Forms fallback paths were removed from the contact route.
- Both contact submit flows now expose deterministic missing-key guidance before and during submit handling.
- The join-flow manifesto link now targets the existing `/manifesto` route instead of the missing `/guild-manifesto` route.
- Step 1.2 planning, runtime-contract, manifesto-decision, and validation artifacts were added under `docs/` in the trusted detached worktree.

# What Was NOT Changed

- No backend API was introduced.
- No newsletter flow was changed.
- No Firebase plugin or runtime refactor was performed.
- No policy page wording was changed during this step.
- No broad UI redesign or package churn was introduced.

# Remaining Risks

- `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is still empty in the validated runtime, so both forms remain intentionally blocked in deterministic config-error mode.
- Public privacy/cookie wording still drifts from the current contact runtime contract and must be reconciled in a later docs-scoped step.
- Shared layout Firebase surfaces still appear on `/contact`, which remains adjacent runtime noise during QA.

# Blast Radius Result

- Actual code/config blast radius stayed inside `pages/contact.vue` and `.env.example`.
- Documentation blast radius stayed inside new Step 1.2 docs under `docs/`.
- No unrelated runtime systems were modified.

# Runtime Result

- Final cold boot on port `3010` rendered `/contact` correctly.
- Hire flow showed the deterministic missing-key warning and preserved inline error behavior on submit.
- Join flow rendered correctly and linked to `/manifesto` with no remaining `/guild-manifesto` target on the page.
- FAQ and copy-email interactions remained functional.

# Compile Result

- Final one-shot validation returned `TYPECHECK_OK` after the contact-route stabilization was applied.
- Final cold server output settled at `vue-tsc` `0 errors`.

# Safe Next Scope

- Provision `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and validate real outbound submissions without changing architecture.
- Reconcile privacy/cookie wording with the now-explicit Web3Forms runtime contract.
- Continue any contact-only work from the trusted detached worktree or another equally clean surface.

# Forbidden Next Scope

- Newsletter migration
- Firebase runtime refactor
- Backend submission rewrite
- broad route or layout redesign
- package/dependency churn unrelated to contact stabilization
