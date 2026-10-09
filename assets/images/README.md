# AI image slots

Images saved here fill the image slots on the site. No code changes needed.

1. Run `npm run dev` and browse the site. Each empty slot shows a dashed box with its file name, size and prompt.
2. Click **Copy full prompt** and paste it into your image generator. The prompt already includes the house style, so the set stays consistent.
3. Save the result here under the slot name. For example, slot `home/hero` becomes `assets/images/home/hero.webp`. PNG, JPG and AVIF also work.

Every slot and prompt is listed in `data/image-slots.ts`, if you'd rather work through the list.

## Good to know

- **Keep files small.** Convert to WebP and aim for under 250 KB each. Generators often export 2 to 4 MB PNGs, which would slow the site down.
- **Production never shows an empty slot.** The live site looks exactly as before until an image exists.
- **Rows go live together.** The 3 plan steps, the 4 learner plan steps on the homepage, the 4 journey stages, the 12 path covers and the 12 principle covers only appear in production once their whole set is here, so a row never looks half-finished. Single images, such as heroes, go live as soon as they exist.
- **Deliberately not slots:** photos of real people (clients, learners, the team) and case study images. Those stay as real photos and the clients' own assets.
