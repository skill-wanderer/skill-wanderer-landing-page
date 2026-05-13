# Contact Web3Forms Runtime Contract

# Current Runtime Reality

- `nuxt.config.ts` exposes `runtimeConfig.public.web3forms.accessKey = process.env.NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- `.env.example` documents `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY=`
- `pages/contact.vue` currently resolves the key through `getWeb3FormsAccessKey()`
- the helper currently supports multiple fallback paths beyond the declared runtime contract
- both submit handlers already fail locally with deterministic error messages when configuration is missing

# Stable Contract

The only supported public runtime contract for the contact route is:

- `runtimeConfig.public.web3forms.accessKey`
- sourced from `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

No alternate key paths should be treated as valid contract.

# Deterministic Missing-Key Behavior

When `runtimeConfig.public.web3forms.accessKey` is empty or missing:

- the route must not attempt a successful outbound Web3Forms submission path
- hire and join flows must remain compile-safe and runtime-safe
- user-facing behavior must remain explicit and deterministic
- no hidden fallback or inferred alternate config path should activate

# Safe Stabilization Decision

Step 1.2 will:

- remove hidden fallback paths from `getWeb3FormsAccessKey()`
- rely only on the declared `public.web3forms.accessKey` path
- preserve explicit missing-configuration handling in the submit lifecycle
- clarify the environment contract in `.env.example`

Step 1.2 will not:

- provision a secret
- hardcode a key
- move submission behind a backend endpoint
- redesign the contact architecture

# Validation Target

After stabilization:

- typecheck remains clean
- `/contact` renders cleanly
- missing-key behavior remains explicit and deterministic
- no route or hydration regressions are introduced