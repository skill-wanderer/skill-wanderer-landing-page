# Contact Step 1.2 Plan

# Objective

Perform controlled contact stabilization from the trusted detached worktree only, limited to the real baseline bugs already proven in Step 1.1.

The named blueprint file `docs/contact-form-engineering-blueprint.md` is not present in this detached worktree. This Step 1.2 plan therefore follows the user-directed Step 1.2 specification together with the validated Step 1.1 artifacts created from the same trusted baseline commit.

# Allowed Scope

- explicit Web3Forms runtime contract clarification
- deterministic missing-key behavior for contact submit flows
- missing `/guild-manifesto` route stabilization with minimal blast radius
- documentation-only reconciliation planning for Firebase/Web3Forms policy drift
- isolated-worktree-only validation and observability

# Forbidden Scope

- architecture rewrite
- newsletter migration
- Firebase runtime or plugin refactor
- vendor migration
- backend API introduction
- broad UI redesign
- package churn
- unrelated composable or layout refactors

# Real Bugs

1. Missing Web3Forms runtime access key
2. Missing `/guild-manifesto` route
3. Firebase/Web3Forms policy drift, documentation only

# Blast Radius

- route file: `pages/contact.vue`
- route target surface: existing manifesto page or its link target
- runtime config contract in `nuxt.config.ts`
- documented environment contract in `.env.example`
- Step 1.2 documentation in `docs/`

Explicitly outside blast radius:

- `components/TheSubscribe.vue`
- `plugins/firebase.client.ts`
- newsletter flow
- Firebase runtime behavior outside wording/planning docs

# Runtime Boundary

- trusted execution surface: `C:/Projects/skill-wanderer/skill-wanderer-contact-baseline-scan`
- runtime contract under stabilization: `runtimeConfig.public.web3forms.accessKey`
- missing key must be handled deterministically without hidden fallback paths or secret hardcoding
- join-flow route stabilization must remove the current missing-route warning without widening ownership

# Validation Strategy

After each implementation step:

1. inspect `git diff`
2. run `npm run typecheck` in the trusted worktree
3. run `npx nuxt dev` in the trusted worktree
4. validate `/contact` render
5. validate hire flow behavior
6. validate join flow behavior
7. confirm no new runtime warnings and no blast-radius expansion

# Rollback Strategy

- use focused git diff inspection after each step
- keep changes limited to the smallest route/config/docs slice
- if a change widens scope or adds a new warning, revert that slice before continuing
- do not touch unrelated systems, so rollback remains file-local and deterministic

# Safe Execution Order

1. Document the Step 1.2 plan and execution boundary.
2. Document the explicit Web3Forms runtime contract.
3. Document the `/guild-manifesto` stabilization decision.
4. Implement the minimal contact runtime-contract fix.
5. Implement the minimal manifesto-link stabilization.
6. Update only the policy wording/planning docs that clarify drift.
7. Re-run compile and runtime validation.
8. Publish the Step 1.2 validation report and final verdict.