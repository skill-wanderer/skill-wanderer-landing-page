<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <span class="hero-tag">Testimonials</span>
      <h1>In Their Own Words</h1>
      <p>
        What it's like to work with Quan, from four clients whose websites we built and look after, and from Jade,
        who got a mock-up website in less than a day.
      </p>
    </section>

    <TestimonialBlock :testimonials="testimonials" layout="stacked" />

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="content">
        <ImageSlot name="testimonials/guestbook" class="cta-image" />
        <h2>Have an Idea to Build?</h2>
        <p>Tell us what you want to build. You'll see a free working prototype before you commit to anything.</p>
        <div class="cta-buttons">
          <NuxtLink to="/contact" class="btn-primary">Tell Us About Your Idea</NuxtLink>
          <NuxtLink to="/work-with-us/service-model" class="btn-secondary">How It Works</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Full texts. The case study pages quote them in full too, and the homepage and
// /work-with-us/our-projects use excerpts, so keep them in step when one changes.
const testimonials = [
  {
    // Every word as he posted it. Two capital letters are fixed, and one spaced hyphen became a comma
    // (no dashes in site copy). The photo is his studio headshot from his own site.
    quote: [
      "Where do I start? Quan, a person who showed up in my LinkedIn posts as somebody who was eager to understand what I was talking about related to the NeO Frequency. At some stage, he decided to tell me that my website didn't really show up as intended on his laptop and that there were issues with mobile phones as well. On top of that, he was also seeing some other aspects of my, in the meantime redundant website, that he could improve, and he was happy to show me how. He proposed a different design, one that reacts faster too and obviously would never have screen presentation issues anymore. About 2 days later, he came back to me with a design prototype.",
      'I guess here I really need to warn you!',
      "At first I thought my old website was still OK, but after he showed me what it could look like, I was sold! So be careful, people; make sure you are happy to let him do his magic, because the moment you agree with him WITHOUT ANY OBLIGATION and for Free (!), that he builds a prototype/design website for you, that's it! You will want that design coming to life! I promise you.",
      'Quan is more than capable in everything that he does, and he goes way beyond the famous "extra mile". To give you an example: When I asked him to provide me with a "Work in progress" page for my domain, so that people could no longer see my website, but were informed that a new website was under construction, his message became so much more elaborate, including a sneak preview of the new landing page, including direct ways to contact me or download a brochure (while waiting for my website to be live).',
      `Quan can really perceive very quickly what it is you need, sometimes even before you do. During your website project, I'm sure he will pleasantly surprise you over and over again. All the way to delivery day. And yes, sometimes, it even feels like he could read my mind too :-). Last but not least, I admire his "skill-wanderer" philosophy; he doesn't charge you anything for the website either. It's built completely for FREE. So what's the catch, you may think? Well, isn't that obvious? He IS the CATCH!`,
      'I would highly recommend Quan to anybody looking for a highly proactive, intelligent, smart, full-stack developer and AI integrator. Thank you so much, Quan, for your precious time and energy invested in our collaboration so far. The result is there for the world to see: https://theneofrequency.com. I truly wish our collaboration will bear bigger fruit in the near future for both of us!',
    ],
    name: 'Floris Robert Slob',
    role: 'Senior Transformation & Change Leader · Founder of The NeO Frequency',
    avatar: '/projects/neofrequency/floris-avatar.jpg',
    source: 'Shared on LinkedIn, 10 November 2026',
    link: { to: '/work-with-us/projects/the-neo-frequency', label: 'The NeO Frequency case study' },
  },
  {
    quote: [
      'Working with Quan Nguyen at Skill-Wanderer has been such a positive experience, and I genuinely cannot recommend him enough.',
      'When I first started working with Quan on my website for The Meek Method, I had a very clear vision of what I wanted my business to represent, but very little understanding of the technology required to bring it all together.',
      "Quan has been incredibly patient with me throughout the entire process. He takes the time to explain things, answer my questions, and make sure I understand what we're doing without ever making me feel rushed or overwhelmed.",
      "What I appreciate most is that he genuinely cares about the work he does and the people he works with. He pays attention to the smallest details, welcomes feedback, and often catches things or suggests improvements I wouldn't have known to ask about.",
      "He didn't simply build a website and walk away. He has continued to help me with adjustments, technical questions, and the many moving pieces that come with building an online presence for a growing business.",
      "I've also come to really respect the mission behind Skill-Wanderer and Quan's commitment to using his business to support free education.",
      "If you're looking for someone who is knowledgeable, reliable, thoughtful, and genuinely invested in helping your business succeed, I would highly recommend working with Quan.",
      "I'm incredibly grateful to have him as part of the team helping me build The Meek Method.",
    ],
    name: 'Aimee Meek',
    role: 'Decision Coach · Creator of The Meek Method',
    avatar: '/projects/meekmethod/aimee-avatar.jpg',
    source: 'Shared on LinkedIn',
    link: { to: '/work-with-us/projects/the-meek-method', label: 'The Meek Method case study' },
  },
  {
    quote: [
      'Quan did an outstanding job building my professional speaking website. He took my ideas, stories, and experience and turned them into a polished website that clearly represents who I am and the message I want to share.',
      'What sets Quan apart, however, is that his help went far beyond designing a website. He has been a trusted business adviser throughout the process, offering honest feedback and practical guidance on how to position myself, present my services, reach potential clients, and grow my speaking business. He understands both the creative and business sides of building a professional brand.',
      'Quan is knowledgeable, dependable, patient, and genuinely invested in the success of the people he works with. I highly recommend him to anyone looking for an excellent website and a trusted partner who will help them think strategically about their business.',
    ],
    name: 'Matt Harr',
    role: "Speaker on school culture and leadership · Author of Back When Consequences Weren't Optional",
    avatar: '/projects/mattharr/matt-harr-avatar.jpg',
    source: 'Shared on LinkedIn, 29 August 2026',
    link: { to: '/work-with-us/projects/matt-harr-speaker', label: 'Matt Harr Speaker case study' },
  },
  {
    quote:
      "Quan is phenomenal to work with; he designed a website for my calligraphy business and worked with me for two full months to make sure it was exactly how I hoped it'd be. Everything from personal preferences (i.e. not using AI, but taking actual photos of the work) to pricing structure was convenient and clearly laid out in both our consultations and contract. Quan went above and beyond expectations and would not accept any bonus/tip for his patience and effort.",
    name: 'Jack Passananti',
    role: 'Writer · Calligrapher · Illuminator, Broad Strokes Studio',
    avatar: '/projects/broadstrokes/jack-avatar.jpg',
    source: 'Shared on LinkedIn, 4 August 2026',
    link: { to: '/work-with-us/projects/broad-strokes-studio', label: 'Broad Strokes Studio case study' },
  },
  {
    // Not a client project, so the link goes to her own site rather than a case study.
    // The photo is her own portrait from that site.
    quote:
      "Quan did an amazing job creating a mock website for me in less than a day. He was very aware of the challenges I face not having a background in web design and adapted his example site to improve navigability and appearance. I definitely plan on incorporating some of his layout choices into my own site. Definitely recommend talking to him if you're not getting conversions and need a knowledgeable dev on your side.",
    name: 'Jade Arthur',
    role: 'Gaming Career Coach · Make the Grade with Jade',
    avatar: '/testimonials/jade-arthur-avatar.jpg',
    source: 'Shared on LinkedIn',
    sourceUrl: 'https://www.linkedin.com/in/makethegradewithjade/',
    link: { to: 'https://makethegradewithjade.com', label: 'makethegradewithjade.com' },
  },
]

useSEO({
  title: 'Testimonials | Skill-Wanderer',
  description:
    'What clients say about working with Quan Nguyen and Skill-Wanderer: a transformation consultant, a coach, a speaker and a calligrapher, plus a mock-up website built in less than a day.',
  keywords: ['Skill-Wanderer testimonials', 'Skill-Wanderer reviews', 'client testimonials', 'website for consultants', 'website for coaches', 'website for speakers', 'affordable website developer'],
  structuredData: createBreadcrumbSchema([
    { name: 'Home', url: 'https://skill-wanderer.com/' },
    { name: 'Work With Us', url: 'https://skill-wanderer.com/work-with-us' },
    { name: 'Testimonials', url: 'https://skill-wanderer.com/work-with-us/testimonials' },
  ]),
})
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────── */
.hero {
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  padding: 150px 20px 70px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 25% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 75% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 40%);
}

.hero-tag {
  display: inline-block;
  background: rgba(255, 107, 53, 0.12);
  border: 1px solid rgba(255, 107, 53, 0.35);
  color: var(--primary-orange);
  padding: 5px 18px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin: 0 0 20px;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.25rem;
  color: var(--light-text);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  position: relative;
  z-index: 1;
}

/* ── CTA Section ───────────────────────────────────── */
.cta-section {
  padding: 90px 20px;
  background: var(--dark-bg);
  text-align: center;
}

.content {
  max-width: 760px;
  margin: 0 auto;
}

.cta-image {
  max-width: 560px;
  margin: 0 auto 36px;
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.cta-section p {
  opacity: 0.85;
  font-size: 1.1rem;
  margin-bottom: 38px;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-block;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--deep-orange), var(--primary-orange));
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.35);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid var(--primary-orange);
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-block;
}

.btn-secondary:hover {
  background: var(--primary-orange);
  color: white;
  transform: translateY(-2px);
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.4rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .cta-section h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 120px 16px 50px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}
</style>
