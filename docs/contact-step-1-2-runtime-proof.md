# Contact Step 1.2 Runtime Proof

## Validation baseline

- Worktree: `C:/Projects/skill-wanderer/skill-wanderer-contact-baseline-scan`
- Cold runtime command: `npm run dev`
- Typecheck command: `npm run typecheck`
- Runtime URL validated: `http://localhost:3000/contact`

## Source contract confirmed

- `nuxt.config.ts` exposes `runtimeConfig.public.web3forms.accessKey`
- `.env.example` documents `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY=` as required for both contact flows
- `pages/contact.vue` uses only `runtimeConfig.public.web3forms.accessKey`
- Join-flow manifesto link targets `/manifesto`

## Executable proof

### Typecheck

- `npm run typecheck` completed with exit code `0`

### Cold runtime boot

- `npm run dev` started Nuxt 3.21.4 successfully from the detached worktree
- Initial cold runtime exposed a real SFC parse failure caused by a truncated style block in `pages/contact.vue`
- After repairing that exact file corruption, fresh `/contact` requests completed without Vite parse errors

### Contact route

- Page title rendered as `Contact Skill-Wanderer | Start Your Project Today`
- Hero, authority cards, Orion section, form tabs, FAQ section, subscribe section, and footer all rendered on `/contact`

### Hire form

- With `runtimeConfig.public.web3forms.accessKey === ''`, the hire flow rendered the proactive config warning
- After filling required fields and submitting, the form rendered the deterministic config error message
- Browser-side fetch instrumentation recorded `0` outbound fetch calls during the missing-key submit path

### Join form

- The join tab rendered correctly and exposed the proactive config warning
- The join-flow information card linked to `/manifesto`
- After filling required fields and submitting, the form rendered the deterministic config error message
- Browser-side fetch instrumentation recorded `0` outbound fetch calls during the missing-key submit path

### FAQ

- The first FAQ item toggled from inactive to active
- Computed state changed to one active item and the first answer expanded to `max-height: 300px`

### Copy email

- Clicking the copy-email control changed the UI into the success-check state (`✅`)

### Observability

- Runtime public config on the page reported `web3forms.accessKey: ""`
- Server logs showed normal `/contact` GET requests after the repair
- No fresh Vite parse errors were emitted after the truncation fix

## Proof conclusion

Step 1.2 now has current-source executable proof for the intended missing-key behavior on `/contact`.

What is intentionally not proven in Step 1.2:

- successful vendor submission to Web3Forms with a real access key
- any Firebase runtime change
- any Step 1.3 scope expansion