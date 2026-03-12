# Skill-Wanderer Marketing Design Guidelines

This guide translates the website's visual language into practical rules for marketing materials so every deck, social post, flyer, one-pager, banner, and email header feels like part of the same brand.

Use this alongside `DESIGN_SYSTEM.md`. That file defines the product UI system. This file defines how to apply the same feel to outward-facing marketing.

## 1. Brand Feel

Skill-Wanderer should feel:

- Practical, not hype-driven
- Human, not corporate
- Optimistic, not naive
- Mission-led, not sales-led
- Warm, not flashy
- Confident, not aggressive

If a design looks too polished, too luxury-focused, too startup-generic, or too loud, it has likely drifted away from the brand.

## 2. Visual Signature

The website has a clear visual signature. Marketing materials should keep the same anchors:

- Dark-first backgrounds
- Warm orange and yellow gradients as the primary visual accent
- Soft-glass or low-opacity panels instead of flat white cards
- Rounded corners and pill-shaped action elements
- High contrast type with strong readability
- Subtle motion or implied motion, never noisy effects
- Spacious layouts with clear breathing room

Default creative direction:

- Base: deep charcoal or near-black
- Accent: orange to yellow gradient
- Surface: translucent dark cards with a light border
- Tone: calm energy rather than urgency

## 3. Brand Palette

Use the site tokens as the source of truth.

### Core colors

- Primary orange: `#FF6B35`
- Deep orange: `#E85D25`
- Accent yellow: `#FFD93D`
- Dark background: `#1A1A1A`
- Darker background: `#0F0F0F`
- Light text: `#E0E0E0`
- Card surface: `rgba(255, 255, 255, 0.05)`
- Card hover or elevated surface: `rgba(255, 255, 255, 0.08)`

### Secondary semantic accents

Use these sparingly for categorization, not as replacement brand colors.

- Success green: `#4CAF50`
- Growth blue: `#2196F3`
- Wisdom purple: `#9C27B0`
- Premium gold: `#FFC107`
- Failure red: `#F44336`

### Color usage ratio

For most marketing pieces, aim for:

- 70% to 80% dark neutrals
- 15% to 20% warm brand accent
- 5% to 10% supporting neutrals or semantic accents

### Color rules

- Use orange and yellow for focal points, highlights, key metrics, and calls to action.
- Keep long-form reading areas on dark backgrounds with light text.
- Do not switch to a white-first layout unless there is a strong production requirement.
- Do not introduce unrelated bright brand colors for “variety.”
- Avoid neon effects, saturated gradients across many colors, or pure black and pure white at large scale.

## 4. Typography

The site uses a simple sans-serif foundation. Marketing materials should keep the same straightforward, readable approach.

### Type direction

- Use a clean sans-serif family
- Prioritize clarity over stylization
- Keep headings bold and compact
- Keep body copy easy to scan
- Use sentence case more often than all caps

### Hierarchy

- Hero headline: large, bold, short, emotionally clear
- Section headline: bold, direct, benefit-oriented
- Body copy: concise and practical
- Caption or support text: lighter weight, slightly reduced contrast

### Heading treatment

Use gradient text selectively for major headlines, launch messages, or section hero moments. Do not apply gradient text to every heading.

Preferred gradient:

```css
background: linear-gradient(135deg, #FF6B35, #FFD93D);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

### Typography rules

- Keep headlines short enough to read in one glance.
- Use 1.6 line height for body copy and up to 1.8 for narrative sections.
- Avoid thin weights on dark backgrounds.
- Avoid condensed fonts, novelty fonts, or overly geometric display faces.

## 5. Tone of Voice in Design

Visual tone and copy tone should reinforce each other.

### Copy should sound like this

- Honest
- Grounded
- Mission-focused
- Clear about value
- Welcoming to learners and partners

### Copy should avoid

- Empty innovation language
- Overpromising transformation
- Pressure-driven scarcity tactics
- Excessive exclamation marks
- Corporate jargon that removes the human feel

### Message framing patterns that fit the brand

- Learn through real practice
- Education with integrity
- Community-powered growth
- Real-world expertise that funds free learning
- Failure as part of mastery

## 6. Layout Principles

Marketing layouts should borrow the same structure as the site: clear sections, generous spacing, and obvious hierarchy.

### Core spacing rhythm

- Wide outer margins
- One dominant message per section
- 16px rounded corners minimum on cards or panels
- Consistent gap rhythm instead of uneven stacking

### Composition rules

- Start with one bold message and one supporting proof point.
- Use a clear visual focal point near the top third.
- Break content into distinct dark panels if the piece contains multiple topics.
- Prefer asymmetry with balance rather than rigid centering everywhere.
- Leave negative space around the headline and CTA.

### Shapes and surfaces

- Use soft rounded rectangles
- Use subtle borders with orange alpha when separating content
- Use low-opacity gradients or radial glows in the background
- Keep shadows soft and diffused

## 7. Imagery Direction

Images and illustrations should feel sincere, capable, and in-progress.

### Preferred imagery

- Real people learning, building, discussing, teaching, or mentoring
- Screens, notes, workshops, prototypes, coding, problem-solving moments
- Community, collaboration, and growth visuals
- Abstract paths, constellations, trails, and directional metaphors that echo “wandering” and discovery

### Avoid imagery that feels like

- Generic corporate handshake stock photos
- Overly futuristic AI cliches
- Hyper-polished startup hero stock
- Empty office scenes with no human story
- Visuals built around fear, hustle, or domination

### Image treatment

- Slightly darken images to integrate with the dark-first palette
- Use warm overlays when needed to harmonize with the orange and yellow brand accents
- Favor authentic texture over glossy perfection

## 8. Graphic Elements

To keep a consistent feel with the site, reuse a small set of recurring motifs.

### Recommended motifs

- Soft orange-to-yellow gradients
- Curved path lines or journey lines
- Radial light blooms behind key content
- Glass cards with subtle borders
- Minimal iconography with rounded or friendly silhouettes

### Use with restraint

- Icons should support the message, not decorate empty space.
- Background glows should stay soft and low-opacity.
- Gradient strokes and journey lines should guide the eye, not dominate the canvas.

## 9. Component Recipes for Common Marketing Assets

Use these patterns so materials stay recognizably Skill-Wanderer.

### Social post

- Dark background
- One strong headline
- One supporting line or proof point
- One orange or gradient focal shape
- Optional glass card panel for quote, stat, or CTA
- Keep text large enough for mobile-first reading

### Carousel or multi-slide social story

- Slide 1: core promise in bold headline
- Slide 2: problem or belief
- Slide 3: how Skill-Wanderer approaches it differently
- Slide 4: proof, principle, or quote
- Slide 5: CTA or next step

### Event banner or poster

- Large headline
- Short mission statement
- Date or location in a supporting panel
- Strong focal gradient or path motif
- Keep the lower third clean for logistics and partner marks

### Partnership or impact deck

- Use dark backgrounds consistently across sections
- Lead with mission and model before capability details
- Present stats in highlighted cards, not crowded tables
- Use orange accent to emphasize outcomes, not every data point

### One-pager or flyer

- Hero headline at top
- One short intro paragraph
- Three to five concise value blocks
- CTA footer with URL or QR code
- Keep one dominant flow from top to bottom

### Email header or campaign cover

- Simple headline
- Warm accent gradient band or glow
- Minimal copy
- Do not overcrowd the header with multiple messages

## 10. Calls to Action

The site uses rounded pill buttons and direct CTAs. Marketing should do the same.

### CTA style

- Primary CTA: orange gradient or solid orange
- Secondary CTA: transparent or dark fill with orange outline
- Rounded corners, generous padding, bold readable label

### CTA wording

Prefer:

- Explore the platform
- Meet our learners
- View learning paths
- Partner with us
- Learn more

Avoid:

- Buy now
- Limited time only
- Act fast
- Dominate your future

## 11. Motion and Video Direction

If marketing materials include animation, short video, or digital screens, motion should feel subtle and deliberate.

### Motion style

- Slow gradient drift
- Soft fade-ins
- Gentle upward reveals
- Small card lift or glow increase
- Curved line movement that suggests a journey

### Avoid

- Fast strobing
- Aggressive zooms
- Overuse of particle effects
- High-energy transitions that feel like ad tech or gaming trailers

Recommended timing:

- Hover and micro-motion: around `0.3s`
- Entrance motion: `0.6s` to `0.8s`

## 12. What Makes a Piece Feel On-Brand

A marketing asset is likely on-brand if it does most of the following:

- Feels grounded and useful
- Uses dark space confidently
- Uses orange and yellow as accents, not wallpaper
- Balances warmth with technical clarity
- Leaves room to breathe
- Communicates mission before promotion
- Looks compatible with the website without copying it exactly

## 13. What Breaks the Brand

Avoid these common mistakes:

- White-background corporate layouts with random orange buttons
- Too many accent colors in one piece
- Hard-edged cards or sharp aggressive geometry
- Overselling language that sounds like a growth hack campaign
- Visual clutter, crowded text blocks, or tiny type
- Generic motivational poster aesthetics
- Trend-driven effects that date quickly

## 14. Quick Approval Checklist

Before publishing any marketing material, confirm:

1. The piece uses the core dark-first palette.
2. Orange and yellow are used as focal accents only.
3. The tone feels practical, human, and mission-led.
4. The layout has enough breathing room.
5. The CTA style matches the site.
6. Any imagery feels authentic and not generic.
7. The design would look natural if placed beside the website.

## 15. Starter Prompts for Designers and AI Tools

### Prompt for static marketing artwork

```text
Create a marketing visual for Skill-Wanderer that matches the website brand.
Use a dark-first background, warm orange-to-yellow gradient accents, high-contrast readable typography, soft-glass cards, rounded shapes, and subtle journey-inspired path motifs.
The tone should feel practical, human, mission-led, and optimistic without looking corporate or hype-driven.
Avoid generic startup visuals, bright unrelated colors, and cluttered layouts.
```

### Prompt for social media carousel

```text
Design a 5-slide social carousel for Skill-Wanderer using a dark charcoal background, orange and yellow accent gradients, large concise headlines, minimal body copy, soft-glass panels, and generous spacing.
The content should feel like honest educational storytelling, not aggressive promotion.
```

### Prompt for partnership deck

```text
Design a presentation deck that feels consistent with the Skill-Wanderer website.
Use a dark-first visual system, warm gradient accents, rounded panels, subtle background glow, and clean readable sans-serif typography.
The tone should communicate integrity, practical expertise, and community impact.
```

## 16. Relationship to the Website

Marketing materials should feel like an extension of the website, not a separate campaign brand.

Keep these elements aligned with the site:

- Color palette
- Type direction
- Surface treatment
- CTA styling
- Brand tone
- Mission-led storytelling

When in doubt, match the feeling of the homepage first, then simplify for the format you are designing.