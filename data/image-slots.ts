// Spots on the site that are ready for an AI-generated illustration.
//
// To fill a slot, generate an image from its prompt and save it as
// `assets/images/<slot name>.webp` (png, jpg and avif work too), for example
// `assets/images/home/hero.webp`. It shows up on the page automatically.
//
// While `npm run dev` is running, an empty slot shows a dashed placeholder with
// its prompt and a copy button. Production builds skip empty slots, so the live
// site never shows a placeholder.
//
// Photos of real people (clients, learners, the team) and case study artwork are
// deliberately not slots: those stay as real photos and the clients' own assets.

export type ImageSlotRatio = '16/9' | '4/3'

export interface ImageSlotSpec {
  /** Shape the page crops the image to. Generate at this ratio for the best framing. */
  ratio: ImageSlotRatio
  /** Read aloud by screen readers. Update it if your image ends up showing something else. */
  alt: string
  /** The scene. The house style below is appended when you copy the prompt. */
  prompt: string
}

/** Appended to every prompt so the set shares one look (see MARKETING_DESIGN_GUIDELINES.md, sections 7 and 15). */
export const IMAGE_HOUSE_STYLE =
  'Style: warm editorial illustration with a soft painterly texture and fine grain, like a modern storybook. ' +
  'Deep charcoal background, low-key lighting, and warm orange and golden-yellow light as the only accent colors, ' +
  'like lamplight or a sunrise glow. Calm, sincere and hopeful, with plenty of empty space. Any people are small, ' +
  'seen from behind or in soft silhouette, with no detailed faces. No text, letters, numbers, logos or watermarks. ' +
  'Avoid glossy 3D renders, neon, robots, holograms, glowing circuit brains and corporate stock-photo poses.'

export const IMAGE_SLOT_SIZES: Record<ImageSlotRatio, string> = {
  '16/9': '1600 × 900',
  '4/3': '1200 × 900',
}

const FORMAT_HINTS: Record<ImageSlotRatio, string> = {
  '16/9': 'Wide 16:9 landscape format.',
  '4/3': '4:3 landscape format.',
}

/** The text to paste into the image generator: scene, house style and format. */
export const fullImagePrompt = (spec: ImageSlotSpec) =>
  `${spec.prompt} ${IMAGE_HOUSE_STYLE} ${FORMAT_HINTS[spec.ratio]}`

export const imageSlots: Record<string, ImageSlotSpec> = {
  // ── Homepage ─────────────────────────────────────────────
  'home/hero': {
    ratio: '16/9',
    alt: 'A founder at a kitchen table watching a paper sketch become a working website on a laptop',
    prompt:
      'A solo founder at a kitchen table at dusk, seen from behind, looking at a laptop where a working website is taking shape. ' +
      'Beside the laptop lies the paper sketch it started from, and a thin glowing path of light runs from the sketch to the screen.',
  },

  // ── The 3-step plan (homepage, Work With Us, How It Works) ──
  'plan/idea': {
    ratio: '4/3',
    alt: 'A person writing a short message about their idea at a lamplit desk',
    prompt:
      'A person at a small wooden desk in the evening, writing a short message on a laptop. A notebook beside it shows a rough doodle of their idea. ' +
      'A desk lamp and a cup of tea; relaxed and unhurried.',
  },
  'plan/prototype': {
    ratio: '4/3',
    alt: 'A business owner trying out a working prototype on a tablet',
    prompt:
      'Over-the-shoulder view of a small business owner tapping through a first working prototype on a tablet, the screen showing a simple layout of blocks and buttons. ' +
      'Sticky notes with small doodles sit around the tablet.',
  },
  'plan/launch': {
    ratio: '4/3',
    alt: 'Two people watching a website go live at sunrise, with a small plant growing beside them',
    prompt:
      'Two people seen from behind at a shared desk, watching a website go live on a laptop as the morning sun rises through the window. ' +
      'A small potted plant in the foreground has a fresh new leaf.',
  },

  // ── Work With Us ─────────────────────────────────────────
  'work-with-us/hero': {
    ratio: '16/9',
    alt: 'Small workspaces for a coach, a consultant, a writer and a bakery, each with its own website glowing on screen',
    prompt:
      'A row of small, cozy independent workspaces at dusk, side by side like little shopfronts: a coach\'s desk with a notebook, a consultant\'s table with coffee, ' +
      'a writer\'s desk piled with books and a tiny bakery counter. Each has a laptop or phone glowing with its own simple website, and one warm path of light connects them all.',
  },
  'service-model/ownership': {
    ratio: '16/9',
    alt: 'A hand holding a ring of keys in front of an open, warmly lit doorway',
    prompt:
      'A hand holding a ring of house keys in front of an open doorway, with warm light spilling out from inside. ' +
      'The feeling is ownership and freedom: you hold the keys, and the door is never locked.',
  },

  // ── About: the three story chapters ─────────────────────
  'about/beginning': {
    ratio: '16/9',
    alt: 'An old laptop and a tiny single-board computer running together on a home desk at night',
    prompt:
      'A cozy home desk late at night: a well-worn old laptop with its lid open beside a tiny single-board computer, joined by a few cables, small status lights glowing. ' +
      'In the background, a world map pinned to the wall and a few shipping boxes hint at an earlier career in international trade.',
  },
  'about/realization': {
    ratio: '16/9',
    alt: 'A master guiding an apprentice at a workbench that holds both hand tools and a laptop',
    prompt:
      'A warm workshop that blends an old craft guild with modern tech: a wooden workbench with hand tools and a laptop side by side. ' +
      'An experienced craftsperson guides an apprentice\'s hands, both seen from behind, under lantern light with wood shavings on the floor.',
  },
  'about/vision': {
    ratio: '16/9',
    alt: 'A glowing looping path walked by apprentices, journeymen and masters',
    prompt:
      'A looping path seen from above at dusk, walked by small figures at different stages: apprentices, journeymen and masters. ' +
      'Lanterns line the loop, and the path glows warmer wherever people have walked, as if the journey keeps lighting itself.',
  },

  // ── Help the Mission, Roadmap ───────────────────────────
  'help-the-mission/hero': {
    ratio: '16/9',
    alt: 'Hands passing a glowing lantern from one person to the next',
    prompt:
      'Several hands passing a small glowing lantern from one to the next across a dark background, the hands different in age and skin tone. ' +
      'The lantern\'s warm orange light is the only light in the scene.',
  },
  'roadmap/hero': {
    ratio: '16/9',
    alt: 'A winding trail with four lanterns marking the milestones ahead',
    prompt:
      'A winding trail through rolling hills at dusk, seen from a high viewpoint and marked by four glowing waypoint lanterns. ' +
      'The nearest lantern burns brightly and the farther ones are softer, still waiting to be reached. A small group of travelers walks the path together.',
  },

  // ── Learning paths: hub hero, then one cover per path (index card and path page) ──
  'learning-paths/hub': {
    ratio: '16/9',
    alt: 'A traveler at a crossroads choosing between lit paths toward different landmarks',
    prompt:
      'A crossroads in an open landscape at twilight with a wooden signpost pointing in many directions. Each road is lined with small warm lights and leads toward ' +
      'a different distant landmark: a lighthouse, a workshop, a tower, a bridge. A traveler with a backpack stands at the center, choosing.',
  },
  'learning-paths/web-development': {
    ratio: '16/9',
    alt: 'A web page being assembled from wooden and paper blocks on a workbench',
    prompt:
      'A workbench where a web page is being built like a physical model: layout blocks, buttons and picture frames made of wood and paper being fitted together, ' +
      'with a laptop behind them showing abstract colored lines that suggest code.',
  },
  'learning-paths/mobile-development': {
    ratio: '16/9',
    alt: 'A phone and a tablet showing an app and a small game, next to a sketchbook of app doodles',
    prompt:
      'A phone and a tablet laid out on a desk like a craftsperson\'s project, their screens showing a simple colorful app and a small platform game. ' +
      'A sketchbook of app screen doodles lies open beside them.',
  },
  'learning-paths/qa-tester': {
    ratio: '16/9',
    alt: 'An inspector with a magnifying glass checking an app screen for problems',
    prompt:
      'A careful inspector with a magnifying glass examining a large printed app screen pinned to a corkboard, small colored flags marking the spots that need fixing. ' +
      'A clipboard checklist with tick marks hangs beside it.',
  },
  'learning-paths/business-analyst': {
    ratio: '16/9',
    alt: 'A figure crossing a bridge between a busy market and a builders\' workshop, carrying a blueprint',
    prompt:
      'A small wooden bridge between two islands at dusk. On one island, a market stall where people talk about what they need; on the other, a workshop where builders ' +
      'work at computers. A figure crosses the bridge carrying a rolled-up blueprint.',
  },
  'learning-paths/software-development-roles-and-career': {
    ratio: '16/9',
    alt: 'A trail map branching toward different landmarks, with a compass resting on it',
    prompt:
      'An old map spread on a table, showing one starting point that branches into trails toward different landmarks: a lighthouse, a workshop, a watchtower, a bridge. ' +
      'A brass compass rests on the map.',
  },
  'learning-paths/project-management': {
    ratio: '16/9',
    alt: 'A small team planning next steps in front of a wall of sticky notes',
    prompt:
      'A planning wall covered in sticky notes arranged in tidy columns, with string connecting a few milestones. ' +
      'Three people seen from behind stand in front of it, one pointing to the next step.',
  },
  'learning-paths/ai-and-machine-learning': {
    ratio: '16/9',
    alt: 'A notebook of hand-drawn graphs beside a laptop showing a curve fitting scattered data points',
    prompt:
      'A desk with an open notebook full of hand-drawn graphs and simple network diagrams, next to a laptop where a smooth curve gradually fits a scatter of dots. ' +
      'A cup of coffee and a mood of patient experimentation.',
  },
  'learning-paths/devops': {
    ratio: '16/9',
    alt: 'Crates moving along a conveyor through build, check and ship stations, with a small server rack nearby',
    prompt:
      'A small, tidy workshop where wooden crates move along a conveyor belt through three stations that build, check and ship them, each lit by a small warm lamp. ' +
      'In the corner, a compact rack of servers hums quietly with glowing status lights.',
  },
  'learning-paths/mlops': {
    ratio: '16/9',
    alt: 'A gardener checking gauges in a greenhouse of young plants connected by tubes',
    prompt:
      'A greenhouse lab where young plants grow in rows of trays under warm grow lights, connected by neat tubes and gauges. ' +
      'A gardener checks the measurements on one tray, keeping the whole system healthy.',
  },
  'learning-paths/start-up-foundation': {
    ratio: '16/9',
    alt: 'A founder showing a first handmade product to curious passersby at a small stall',
    prompt:
      'A tiny market stall at dawn where a founder shows a simple handmade product to the first few curious passersby. ' +
      'An open notebook of observations sits on the counter.',
  },
  'learning-paths/advanced-software-development-skills': {
    ratio: '16/9',
    alt: 'A clockwork mechanism being fine-tuned under a magnifying lamp on a craftsperson\'s bench',
    prompt:
      'A master craftsperson\'s workbench with precise tools laid out in order, an open clockwork mechanism being fine-tuned under a magnifying lamp, ' +
      'and a laptop at the edge of the bench.',
  },
  'learning-paths/software-architecture-and-design-patterns': {
    ratio: '16/9',
    alt: 'A blueprint and a scale model of a building made from repeating modules on a drafting table',
    prompt:
      'An architect\'s drafting table with a detailed blueprint of a building made from repeating modular blocks, a scale model of interlocking modules beside it, ' +
      'and a compass and ruler under a warm desk lamp.',
  },

  // ── Education philosophy: the four journey stages ───────
  'philosophy/start-free': {
    ratio: '4/3',
    alt: 'A beginner starting to learn at a shared library table',
    prompt:
      'A beginner opening a laptop for the first time at a long shared table in a library, with an open book and a hand-drawn path map beside them and a few other learners nearby. ' +
      'Inviting and low-pressure.',
  },
  'philosophy/contribute': {
    ratio: '4/3',
    alt: 'Two learners building and teaching together while a mentor looks on',
    prompt:
      'Two learners at a workbench, one building a small feature on a laptop while the other explains an idea on a notepad. ' +
      'A mentor stands a little behind them, watching with quiet approval.',
  },
  'philosophy/real-projects': {
    ratio: '4/3',
    alt: 'A small team reviewing a live product with their client',
    prompt:
      'A small, focused team around a table with laptops, reviewing a live product on a large screen together with the client who asked for it. ' +
      'Real work and real stakes, in warm light.',
  },
  'philosophy/grow': {
    ratio: '4/3',
    alt: 'An experienced builder teaching apprentices in a workshop, with a path leading to a new studio',
    prompt:
      'A seasoned builder at the front of a small workshop teaching a group of apprentices, with a wall of finished projects behind them. ' +
      'Through the open door, a path leads toward a new studio of their own.',
  },

  // ── The 12 principles (principle page hero and index card) ──
  'principles/accessible': {
    ratio: '16/9',
    alt: 'A young learner walking through the open doors of a warmly lit library',
    prompt:
      'A library with wide-open doors at dusk, warm light pouring out and shelves of books within easy reach. ' +
      'A young person with a worn backpack steps inside: no gate, no turnstile, nothing in the way.',
  },
  'principles/integrity': {
    ratio: '16/9',
    alt: 'A glass-walled workshop at night with everything inside in plain view',
    prompt:
      'A glass-walled workshop at night where everything inside is visible: tools, work in progress and an open ledger on the desk. ' +
      'A calm feeling of transparency, with nothing hidden.',
  },
  'principles/individualized': {
    ratio: '16/9',
    alt: 'Several different routes climbing toward the same lit cabin on a hill',
    prompt:
      'Several different routes climbing the same gentle hill toward one lit cabin at the top: a staircase, a winding trail and a rope bridge. ' +
      'Small travelers move along each route at their own pace.',
  },
  'principles/engaging': {
    ratio: '16/9',
    alt: 'A learner celebrating as their project finally works',
    prompt:
      'A learner at a desk at night, seen from behind, raising a fist in quiet triumph as their small project finally works on the laptop screen. ' +
      'Crumpled sticky notes are scattered around, and a small burst of warm light rises from the screen.',
  },
  'principles/creativity': {
    ratio: '16/9',
    alt: 'Cracked practice pots on a shelf beside a finished vase, with hands shaping a new piece',
    prompt:
      'A pottery workshop where cracked and lopsided pots sit proudly on a shelf next to one beautiful finished vase. ' +
      'Clay-covered hands shape a new piece on the wheel, and the failed attempts are lit as warmly as the success.',
  },
  'principles/relevant': {
    ratio: '16/9',
    alt: 'A learner fixing a real café\'s ordering system while the owner watches',
    prompt:
      'A learner with a laptop at the counter of a busy small café, fixing the café\'s real ordering system while the owner watches. ' +
      'Practical, grounded and real, not a classroom exercise.',
  },
  'principles/pathways': {
    ratio: '16/9',
    alt: 'An apprentice, a journeyman and a master on a spiral staircase, the master reaching down to help',
    prompt:
      'A spiral stone staircase climbing a tower, with figures at different heights: an apprentice at the bottom carrying a small toolbox, ' +
      'a journeyman halfway up, and a master near the top reaching down to help the next person up.',
  },
  'principles/technology-partnership': {
    ratio: '16/9',
    alt: 'A hallway joining a room where a client receives a finished website and a classroom of learners',
    prompt:
      'Two rooms joined by one lamplit hallway. In the first, a finished website is handed over to a happy client; ' +
      'in the second, the same warm light spills into a small classroom of learners.',
  },
  'principles/respect-ip': {
    ratio: '16/9',
    alt: 'Manuscripts each sealed with their creator\'s own wax seal, beside a pen and a laptop',
    prompt:
      'A writer\'s desk with a stack of manuscripts, each closed with its own distinct wax seal, and an ink pen and a laptop side by side. ' +
      'The feeling that every creator\'s work is recognized and credited.',
  },
  'principles/community': {
    ratio: '16/9',
    alt: 'People of different ages learning together around a long table at night',
    prompt:
      'People of different ages around a long shared table at night with laptops and notebooks open. One person explains something while the others lean in to listen, ' +
      'under warm hanging lamps, seen from a little distance.',
  },
  'principles/social-enterprise': {
    ratio: '16/9',
    alt: 'A tree rooted in books, its branches hung with lanterns over people learning in its shade',
    prompt:
      'A sturdy tree whose roots wrap around a stack of books and whose branches hold small glowing lanterns, with people sitting in its shade learning together.',
  },
  'principles/mission-centric-reinvestment': {
    ratio: '16/9',
    alt: 'A gardener planting coins like seeds, with young saplings growing behind',
    prompt:
      'A gardener planting coins like seeds in rich soil at dawn, while rows of young saplings already sprout in the beds behind them.',
  },
}

/**
 * Slots that sit side by side in one row or grid. In production a grouped slot
 * waits until every image in its group exists, so a half-filled row never ships.
 */
export const imageSlotGroups = {
  planSteps: ['plan/idea', 'plan/prototype', 'plan/launch'],
  philosophyJourney: ['philosophy/start-free', 'philosophy/contribute', 'philosophy/real-projects', 'philosophy/grow'],
  learningPathCovers: Object.keys(imageSlots).filter(name => name.startsWith('learning-paths/') && name !== 'learning-paths/hub'),
  principleCovers: Object.keys(imageSlots).filter(name => name.startsWith('principles/')),
}

export type ImageSlotGroup = keyof typeof imageSlotGroups
