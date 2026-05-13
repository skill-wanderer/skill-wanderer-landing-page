# Current Runtime Reality

- `pages/contact.vue` links to `/guild-manifesto` from the join-flow information card
- the trusted baseline runtime emits a Vue Router warning because `/guild-manifesto` does not exist
- the trusted worktree already contains `pages/manifesto.vue`
- `pages/manifesto.vue` is titled `The Guild Manifesto`

# Existing Link Ownership

- link owner: `pages/contact.vue`
- content owner already exists: `pages/manifesto.vue`
- missing route is therefore a link-target mismatch, not a missing content domain

# Route Risk

- leaving `/guild-manifesto` unchanged preserves a known runtime warning
- adding a second placeholder route would duplicate manifesto ownership and widen maintenance surface
- changing the link target to the existing manifesto page has the smallest route blast radius

# UX Risk

- users on the join flow currently click a broken target
- changing the target to an existing manifesto page preserves the intended narrative and avoids a dead route
- no broad copy or information-architecture rewrite is required

# Safeest Stabilization Option

Retarget the join-flow link from `/guild-manifesto` to the existing `/manifesto` route.

# Blast Radius

- one link target inside `pages/contact.vue`
- runtime validation of the join flow
- no new page ownership
- no redirect rules or placeholder routes required

# Final Decision

Step 1.2 will stabilize the missing route by updating the contact-page link target to `/manifesto`.

This is safer than creating a new placeholder route because:

- the content already exists
- the user intent is preserved
- the route warning is removed with one localized change
- no duplicate ownership or new route surface is introduced