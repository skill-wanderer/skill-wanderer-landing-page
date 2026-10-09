<template>
  <div>
    <!-- Hero: the mission first, then one door for each of our two heroes -->
    <section class="hero">
      <div class="hero-content">
        <p class="hero-eyebrow">A learning guild, funded by real work</p>
        <h1>Free, practical education for everyone who keeps learning.</h1>
        <p class="hero-description">
          Courses, honest guidance and real project experience for self-learners and lifelong learners.
          Small businesses fund it all by hiring us as their tech partner, and that real work keeps the
          mission sustainable and everything we teach practical.
        </p>
        <div class="hero-doors">
          <div class="hero-door">
            <p class="door-label"><span aria-hidden="true">📚</span> Here to learn</p>
            <p class="door-text">
              Free courses and guidance, then real experience when you're ready. No tuition, ever. We only ask
              for your effort.
            </p>
            <NuxtLink to="/learning-path" class="btn btn-primary">
              Start Learning for Free <span>→</span>
            </NuxtLink>
            <a href="#learners" class="door-link">How it works for learners <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-door">
            <p class="door-label"><span aria-hidden="true">💡</span> Have an idea to build</p>
            <p class="door-text">
              A free working prototype first, then no development fee. Your project funds free education.
            </p>
            <NuxtLink to="/contact" class="btn btn-primary">
              Tell Us About Your Idea <span>→</span>
            </NuxtLink>
            <a href="#clients" class="door-link">How it works for your project <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <ImageSlot name="home/hero" class="hero-image" priority />
      </div>
      <svg class="wandering-path" viewBox="0 0 1200 200">
        <path class="path" d="M0,150 Q300,100 600,130 T1200,100" />
      </svg>
    </section>

    <!-- ── Hero 1: the learner ─────────────────────────────── -->

    <!-- Learner: who they are and the problem they face -->
    <section id="learners" class="track section--darker">
      <div class="track-intro">
        <div class="track-intro-text">
          <p class="track-label">For self-learners &amp; lifelong learners</p>
          <h2>Learn on your own, without learning alone.</h2>
          <p>
            You want to grow, but degrees and paid coaches can cost more than you can spend, and much of it is
            theory you can't put to use. We give you free courses, honest guidance and real project experience,
            so you learn to think for yourself and stay ready for whatever changes next.
          </p>
          <div class="track-cta">
            <NuxtLink to="/learning-path" class="btn btn-primary">
              Start Learning for Free <span>→</span>
            </NuxtLink>
            <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-secondary">
              See How Learning Works <span>→</span>
            </NuxtLink>
          </div>
          <ul class="track-trust">
            <li>No tuition or fees</li>
            <li>No ads or affiliate links</li>
            <li>Mentorship earned through effort</li>
          </ul>
        </div>
        <ImageSlot name="home/for-learners" class="track-image" />
      </div>

      <div class="problem-header">
        <h3>Sound familiar?</h3>
        <p>Wanting to grow is the easy part. Finding a clear path you can afford is not.</p>
      </div>
      <div class="problem-grid">
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">🧭</span>
          <h4>"I want to learn something new. Where do I start?"</h4>
          <p>There are endless courses, videos and opinions out there, and nobody shows you a clear path through them.</p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">💸</span>
          <h4>"I can't afford a degree or a coach."</h4>
          <p>Formal education and paid mentors cost more than most people can spend, especially before you know which way to go.</p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">🔧</span>
          <h4>"I want skills I can use, not just theory."</h4>
          <p>Formal courses teach the textbook. You want to build things that work in the real world.</p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">🌊</span>
          <h4>"Everything changes faster than I can learn."</h4>
          <p>Especially in the AI era, the tools you learned last year are already changing. It's easy to feel swamped.</p>
        </div>
      </div>
    </section>

    <!-- Learner guide: empathy + authority -->
    <section class="mentor section--dark">
      <div class="mentor-content">
        <div class="mentor-text">
          <p class="guide-eyebrow">Your mentor</p>
          <h2>We know what it's like to learn something new on your own.</h2>
          <p>
            Quan Nguyen, our founder and Guild Master, switched from import-export manager to developer himself,
            so he remembers how daunting it is to start over. He has since spent over a decade building software,
            and today he mentors learners across Asia, Africa and Latin America.
          </p>
          <p>
            Mentoring here doesn't mean handing you answers. We give you the mindset, the frameworks and the
            knowledge to keep improving by yourself, and we point out the early pitfalls before you fall into them.
          </p>
          <ul class="guide-points">
            <li><strong>Mindset:</strong> learn fast, adapt, and treat failure as part of learning</li>
            <li><strong>Frameworks:</strong> break down a new field and decide what to learn next</li>
            <li><strong>Knowledge:</strong> practical lessons from real projects, not theory for its own sake</li>
            <li><strong>Honest advice:</strong> no affiliate links, paid promotions or kickbacks, ever</li>
          </ul>
        </div>
        <div class="mentor-proof">
          <p class="mentor-proof-title">Learners we've mentored</p>
          <ul class="learner-list">
            <li v-for="learner in featuredLearners" :key="learner.slug">
              <NuxtLink :to="`/learners/${learner.slug}`" class="learner-row">
                <img :src="learner.photo" alt="" loading="lazy" />
                <span class="learner-row-text">
                  <span class="learner-row-name">
                    {{ learner.name }} <span class="learner-row-country">· {{ learner.country }}</span>
                  </span>
                  <span class="learner-row-outcome">{{ learner.outcome }}</span>
                </span>
              </NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/learners" class="mentor-proof-link">Meet all our learners →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Learner plan: from free courses to paid client work -->
    <section class="plan section--darker">
      <div class="section-header">
        <h2>How it works for learners</h2>
        <p>Four steps. Go as far as you like, at your own pace.</p>
      </div>
      <ol class="plan-steps plan-steps--four">
        <li class="plan-step">
          <ImageSlot name="philosophy/start-free" group="learnerPlanSteps" class="plan-image" />
          <span class="plan-number">1</span>
          <h3>Learn with free courses</h3>
          <p>
            Take our courses in the
            <a href="https://dojo.skill-wanderer.com/paths" target="_blank" rel="noopener noreferrer">Dojo</a>
            and read the
            <a href="https://wanderings.skill-wanderer.com" target="_blank" rel="noopener noreferrer">Wanderings blog</a>
            for the knowledge and the mindset.
          </p>
        </li>
        <li class="plan-step">
          <ImageSlot name="home/ask-for-guidance" group="learnerPlanSteps" class="plan-image" />
          <span class="plan-number">2</span>
          <h3>Ask when you're stuck</h3>
          <p>Feeling swamped, or not sure what to learn next? Reach out and we'll help you find your next step. Guidance is always free.</p>
        </li>
        <li class="plan-step">
          <ImageSlot name="philosophy/contribute" group="learnerPlanSteps" class="plan-image" />
          <span class="plan-number">3</span>
          <h3>Contribute and gain experience</h3>
          <p>Join us as a contributor: build for the guild, improve a course or help other learners. The more you put in, the more mentorship you get.</p>
        </li>
        <li class="plan-step">
          <ImageSlot name="philosophy/real-projects" group="learnerPlanSteps" class="plan-image" />
          <span class="plan-number">4</span>
          <h3>Earn on real client work</h3>
          <p>When you're ready, help on client projects under senior review and get paid for your part. Your income grows with your contribution.</p>
        </li>
      </ol>
      <div class="fair-exchange">
        <h3>A fair exchange</h3>
        <p>
          We never charge for guidance. We ask for your effort instead. Mentorship and income are both based on
          contribution, which keeps things fair for everyone and helps sustain the mission in return.
        </p>
      </div>
      <div class="plan-cta">
        <NuxtLink to="/learning-path/learn-contribute-build-earn" class="btn btn-outline">
          See the Full Learning Journey <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Learner stakes: failure vs success -->
    <section class="stakes section--dark">
      <div class="stakes-grid">
        <div class="stakes-card stakes-card--without">
          <h3>Learning without a guide</h3>
          <ul>
            <li>You fall into the same early pitfalls as every beginner</li>
            <li>You waste months going in circles, unsure what to learn next</li>
            <li>You pay for worthless courses, or fall for a scam</li>
            <li>You trust guides who profit from what they recommend, and get ripped off</li>
          </ul>
        </div>
        <div class="stakes-card stakes-card--with">
          <h3>Learning with Skill-Wanderer</h3>
          <ul>
            <li>You learn to think for yourself, so the next wave of change finds you ready</li>
            <li>You get through early mistakes, pitfalls and confusion with someone who's been there</li>
            <li>You build practical skills by contributing to real work</li>
            <li>And once you're experienced, you share it back and show the world how much you've learned</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Learner call to action: three reasons to reach out -->
    <section id="reach-out" class="reach-out section--darker">
      <div class="section-header">
        <h2>Reach out, wherever you are on the path</h2>
        <p>Guidance is free. All we ask in return is your effort.</p>
      </div>
      <div class="reach-grid">
        <article class="reach-card">
          <span class="reach-icon" aria-hidden="true">🤝</span>
          <h3>Work with us as a contributor</h3>
          <p>Gain real experience on guild and client work, with mentorship that grows with your effort.</p>
          <NuxtLink to="/contact?tab=join" class="btn btn-primary">Join as a Contributor</NuxtLink>
        </article>
        <article class="reach-card">
          <span class="reach-icon" aria-hidden="true">📚</span>
          <h3>Help improve a course</h3>
          <p>Spotted a gap, a mistake or a clearer way to explain something? Tell us, and help the next learner.</p>
          <a :href="courseEmailLink" class="btn btn-outline">Suggest an Improvement</a>
        </article>
        <article class="reach-card">
          <span class="reach-icon" aria-hidden="true">🧭</span>
          <h3>Ask for guidance</h3>
          <p>Stuck, swamped or unsure where to start? Just ask. Quan reads every message himself.</p>
          <a :href="guidanceEmailLink" class="btn btn-outline">Ask for Guidance</a>
        </article>
      </div>
    </section>

    <!-- The mission: client work keeps learning free (sustainable) and grounded in real work (practical) -->
    <section class="mission-band">
      <div class="mission-band-content">
        <p class="guide-eyebrow">How it stays free</p>
        <h2>Client work funds the mission</h2>
        <p class="mission-lead">
          Free education still costs money to run: servers, tools and people's time. We don't charge tuition,
          show ads or take affiliate commissions. Instead, we build websites and AI tools for small businesses
          as their tech partner, and that work pays for the mission.
        </p>
        <ImageSlot name="home/mission-loop" class="mission-image" />
        <div class="mission-why">
          <div class="mission-why-card">
            <h3><span aria-hidden="true">🌱</span> It keeps the mission sustainable</h3>
            <p>Client fees cover our running costs, so learning can stay free for everyone who wants it.</p>
          </div>
          <div class="mission-why-card">
            <h3><span aria-hidden="true">🛠️</span> It keeps the learning practical</h3>
            <p>What we teach comes from projects we really build, and contributors gain real experience on them, under review.</p>
          </div>
        </div>
        <ol class="mission-loop" aria-label="How the mission keeps itself going">
          <li><span>Client projects cover the costs</span></li>
          <li><span>Learning stays free for everyone</span></li>
          <li><span>Learners grow into contributors</span></li>
          <li><span>Contributors help on client projects</span></li>
        </ol>
        <p class="mission-loop-again">
          <span aria-hidden="true">↻</span> Every project funds the next learner, and every learner who grows helps
          build the next project.
        </p>
        <ul class="principle-chips">
          <li>No ads or hidden agendas</li>
          <li>All net revenue reinvested</li>
          <li>Free learning for everyone</li>
        </ul>
        <p class="mission-note">
          Client work covers our running costs today, but not yet the people who give their time to the mission.
          If you believe in free education, you can help.
        </p>
        <div class="mission-links">
          <NuxtLink to="/help-the-mission" class="btn btn-outline">
            Help the Mission <span>→</span>
          </NuxtLink>
          <NuxtLink to="/principles" class="btn btn-outline">
            Our 12 Principles <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Hero 2: the client, whose project funds the mission ── -->

    <!-- Client: who they are and the problem they face -->
    <section id="clients" class="track section--dark">
      <div class="track-intro">
        <div class="track-intro-text">
          <p class="track-label">For solo founders, freelancers, coaches, consultants, writers &amp; small businesses</p>
          <h2>See your idea working before you commit.</h2>
          <p>
            We build a free working prototype of your website or AI tool. If you like it, we launch it with
            no development fee and stay on as your tech partner. If not, you walk away and owe nothing.
          </p>
          <div class="track-cta">
            <NuxtLink to="/contact" class="btn btn-primary">
              Tell Us About Your Idea <span>→</span>
            </NuxtLink>
            <NuxtLink to="/work-with-us/service-model" class="btn btn-secondary">
              See How It Works <span>→</span>
            </NuxtLink>
          </div>
          <ul class="track-trust">
            <li>No development fee</li>
            <li>No lock-in</li>
            <li>Your project helps fund free education</li>
          </ul>
        </div>
        <ImageSlot name="home/for-clients" class="track-image" />
      </div>

      <div class="problem-header">
        <h3>Sound familiar?</h3>
        <p>Good ideas shouldn't stay invisible just because the tech is hard.</p>
      </div>
      <div class="problem-grid">
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">🤔</span>
          <h4>"Tech isn't my thing."</h4>
          <p>You know exactly what you want to say. Building the website or app to say it is another story.</p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">💡</span>
          <h4>"I have an idea, but where do I start?"</h4>
          <p>
            Maybe it's an AI practice assignment for your students, or a booking page for your clients.
            You can picture it, but you don't know what it takes.
          </p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">💸</span>
          <h4>"I can't risk thousands on a maybe."</h4>
          <p>Agencies want a big payment up front, before you even know if the idea works.</p>
        </div>
        <div class="problem-card">
          <span class="problem-icon" aria-hidden="true">🔒</span>
          <h4>"What if I get stuck?"</h4>
          <p>Stuck with a developer who disappears, a platform you can't leave, or an AI-built app nobody can fix.</p>
        </div>
      </div>
    </section>

    <!-- Client guide: empathy + authority -->
    <section class="guide section--darker">
      <div class="guide-content">
        <img src="/skill-wanderer-avatar.jpg" alt="Quan Nguyen, founder of Skill-Wanderer" class="guide-avatar" loading="lazy" />
        <div class="guide-text">
          <p class="guide-eyebrow">Your guide</p>
          <h2>We know what it's like to start with an idea and a small budget.</h2>
          <p>
            Skill-Wanderer is led by Quan Nguyen, our founder and Guild Master. He started in business, not
            tech, as an import-export manager at Toyota Tsusho, so he speaks your language. Since then he has
            spent over a decade building software as a developer, solution architect and project manager
            across startups and enterprises, once leading 16 developers on 4 projects at the same time.
          </p>
          <p>
            He still teaches through Skill-Wanderer, which keeps his skills current. AI helps us move fast,
            but Quan designs your project and reviews every change, so it doesn't fall apart later.
          </p>
          <ul class="guide-points">
            <li>Plain-language advice, not just code</li>
            <li>Quan designs your project and reviews every change</li>
            <li>Guild learners may help, always under his review</li>
          </ul>
        </div>
      </div>
    </section>

    <TestimonialBlock :testimonials="clientTestimonials" section-title="What Clients Say" />

    <!-- Client plan: the same 3 steps used everywhere -->
    <section class="plan section--dark">
      <div class="section-header">
        <h2>How it works for your project</h2>
        <p>Three simple steps. You can stop after any of them.</p>
      </div>
      <ol class="plan-steps">
        <li class="plan-step">
          <ImageSlot name="plan/idea" group="planSteps" class="plan-image" />
          <span class="plan-number">1</span>
          <h3>Tell us your idea</h3>
          <p>Send a short message or email Quan. He reads it himself and replies with a time for one short call.</p>
        </li>
        <li class="plan-step">
          <ImageSlot name="plan/prototype" group="planSteps" class="plan-image" />
          <span class="plan-number">2</span>
          <h3>Get a free working prototype</h3>
          <p>If it's a good fit, we build a first version you can click through. React to something real. If it's not right, walk away and owe nothing.</p>
        </li>
        <li class="plan-step">
          <ImageSlot name="plan/launch" group="planSteps" class="plan-image" />
          <span class="plan-number">3</span>
          <h3>Launch and grow together</h3>
          <p>
            No development fee. A monthly fee covers hosting, maintenance, support and occasional changes, and
            we stay as your tech partner. Leave anytime and take your project with you.
          </p>
        </li>
      </ol>
      <p class="plan-proof">
        <NuxtLink to="/work-with-us/projects/matt-harr-speaker">Matt</NuxtLink>,
        <NuxtLink to="/work-with-us/projects/broad-strokes-studio">Jack</NuxtLink> and
        <NuxtLink to="/work-with-us/projects/the-meek-method">Aimee</NuxtLink>
        work with us on exactly this model.
      </p>
      <div class="plan-cta">
        <NuxtLink to="/work-with-us/service-model" class="btn btn-outline">
          Read the Full Details <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Client stakes: failure vs success -->
    <section class="stakes section--darker">
      <div class="stakes-grid">
        <div class="stakes-card stakes-card--without">
          <h3>Without the right partner</h3>
          <ul>
            <li>Your idea stays invisible, and nobody finds you</li>
            <li>You pay for features you didn't need</li>
            <li>A quickly AI-built app falls apart after launch</li>
            <li>You're locked in to one developer or platform</li>
          </ul>
        </div>
        <div class="stakes-card stakes-card--with">
          <h3>With Skill-Wanderer</h3>
          <ul>
            <li>Your name gets out there, with a site that explains what you do</li>
            <li>You learn what you really need before you spend</li>
            <li>A version that fits your budget is live and looked after</li>
            <li>A partner who stays as long as you want, with no lock-in</li>
            <li>And your project helps fund free education</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Client projects: proof of work -->
    <section class="projects-showcase section--dark">
      <div class="section-header">
        <h2>Recent Client Projects</h2>
        <p>Real work for real clients, from solo practices to start-ups.</p>
      </div>
      <div class="projects-strip">
        <NuxtLink to="/work-with-us/projects/matt-harr-speaker" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mattharr/thumb.jpg" alt="Matt Harr Speaker" loading="lazy" />
            <span class="project-type-badge">No Development Fee</span>
          </div>
          <div class="project-meta">
            <h4>Matt Harr Speaker</h4>
            <p class="project-summary">35 years of school leadership turned into a positioned speaking brand.</p>
            <div class="project-stack-tags">
              <span>Astro</span>
              <span>Cloudflare</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/broad-strokes-studio" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/broadstrokes/thumb.jpg" alt="Broad Strokes Studio" loading="lazy" />
            <span class="project-type-badge">No Development Fee</span>
          </div>
          <div class="project-meta">
            <h4>Broad Strokes Studio</h4>
            <p class="project-summary">A bespoke calligraphy commission funnel with published pricing and Stripe checkout.</p>
            <div class="project-stack-tags">
              <span>Astro</span>
              <span>Stripe</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/the-meek-method" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/meekmethod/thumb.jpg" alt="The Meek Method" loading="lazy" />
            <span class="project-type-badge">No Development Fee</span>
          </div>
          <div class="project-meta">
            <h4>The Meek Method</h4>
            <p class="project-summary">Positioning and a full practice site for a decision coaching business.</p>
            <div class="project-stack-tags">
              <span>Astro</span>
              <span>Web3Forms</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/wm-smile-generation-uganda" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/wmsmile/children-learning.jpeg" alt="WM Smile Generation Uganda" loading="lazy" />
            <span class="project-type-badge">Non-Profit</span>
          </div>
          <div class="project-meta">
            <h4>WM Smile Generation</h4>
            <p class="project-summary">Website for a Ugandan non-profit supporting healthcare and education communities.</p>
            <div class="project-stack-tags">
              <span>Nuxt 3</span>
              <span>Kubernetes</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/mindyminds" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mindyminds/thumb.jpg" alt="MindyMinds" loading="lazy" />
            <span class="project-type-badge">Start-up</span>
          </div>
          <div class="project-meta">
            <h4>MindyMinds</h4>
            <p class="project-summary">Multi-tenant AI chatbot platform delivered concept-to-production in 3 months.</p>
            <div class="project-stack-tags">
              <span>Next.js</span>
              <span>Docker</span>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/work-with-us/projects/mindyplay" class="project-thumb">
          <div class="project-image-wrap">
            <img src="/projects/mindyplay/thumb.jpg" alt="MindyPlay" loading="lazy" />
            <span class="project-type-badge">Start-up</span>
          </div>
          <div class="project-meta">
            <h4>MindyPlay</h4>
            <p class="project-summary">A physical game concept turned into an interactive mobile game.</p>
            <div class="project-stack-tags">
              <span>Flutter</span>
              <span>Firebase</span>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="projects-cta">
        <NuxtLink to="/work-with-us/our-projects" class="btn btn-outline">
          View All Projects <span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Final CTA: one door for each hero -->
    <section class="final-cta section--darker">
      <h2>Start where you are</h2>
      <p class="final-cta-lead">Whether you're here to learn or to build, you're part of the same mission.</p>
      <div class="final-doors">
        <div class="final-door">
          <h3>Here to learn?</h3>
          <p>
            Start with a free course, or tell us where you're stuck. Guidance is free. We only ask for your effort.
          </p>
          <NuxtLink to="/learning-path" class="btn btn-primary">
            Start Learning for Free <span>→</span>
          </NuxtLink>
          <p class="final-cta-email">
            Or <a :href="guidanceEmailLink">ask us for guidance</a>
          </p>
        </div>
        <div class="final-door">
          <h3>Have an idea to build?</h3>
          <p>
            Describe what you want to build or the problem you have. Quan reads every message himself and usually
            replies within 2 working days with a time for a short call. He takes one call a day, so he keeps time to
            build and teach.
          </p>
          <NuxtLink to="/contact" class="btn btn-primary">
            Tell Us About Your Idea <span>→</span>
          </NuxtLink>
          <p class="final-cta-email">
            Or email <a :href="`mailto:${GUILD_MASTER_EMAIL}`">{{ GUILD_MASTER_EMAIL }}</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const GUILD_MASTER_EMAIL = 'quan.nguyen@skill-wanderer.com'
const guidanceEmailLink = `mailto:${GUILD_MASTER_EMAIL}?subject=${encodeURIComponent('Asking for guidance')}`
const courseEmailLink = `mailto:${GUILD_MASTER_EMAIL}?subject=${encodeURIComponent('Helping improve a Skill-Wanderer course')}`

// Outcomes as told on each learner's story page under /learners. The photos are their own.
const featuredLearners = [
  {
    slug: 'prabhat-kumar',
    name: 'Prabhat Kumar',
    country: 'India',
    photo: '/learners/Prabhat-Kumar.jpeg',
    outcome: 'Finished the DevOps mentorship in under two months and now gains real-world experience with our partner MindyCore.',
  },
  {
    slug: 'khouja-nasreddine',
    name: 'Khouja Nasreddine',
    country: 'Tunisia',
    photo: '/learners/khouja-nasreddine.jpeg',
    outcome: 'Completed the Mobile Game Dev path and now works with one of our partners.',
  },
  {
    slug: 'alfredo-salazar',
    name: 'Alfredo Salazar',
    country: 'Venezuela',
    photo: '/learners/Alfredo-Salazar.jpeg',
    outcome: 'Graduated the Mobile Game Dev path and now puts those skills to work with one of our partners.',
  },
  {
    slug: 'thanh-nguyen',
    name: 'Thanh Nguyen',
    country: 'Vietnam',
    photo: '/learners/Thanh-Nguyen.jpeg',
    outcome: "Went from a stranger on LinkedIn to the guild's vanguard in a single month.",
  },
]

// Verbatim excerpts from the LinkedIn recommendations shown in full on /work-with-us/our-projects.
const clientTestimonials = [
  {
    quote:
      'What sets Quan apart, however, is that his help went far beyond designing a website. He has been a trusted business adviser throughout the process, offering honest feedback and practical guidance on how to position myself, present my services, reach potential clients, and grow my speaking business.',
    name: 'Matt Harr',
    role: 'Speaker on school culture and leadership',
    avatar: '/projects/mattharr/matt-harr-avatar.jpg',
  },
  {
    quote:
      "Quan is phenomenal to work with; he designed a website for my calligraphy business and worked with me for two full months to make sure it was exactly how I hoped it'd be. Everything from personal preferences (i.e. not using AI, but taking actual photos of the work) to pricing structure was convenient and clearly laid out in both our consultations and contract.",
    name: 'Jack Passananti',
    role: 'Writer · Calligrapher · Illuminator',
    avatar: '/projects/broadstrokes/jack-avatar.jpg',
  },
]

// SEO and meta management
useSEO({
  title: 'Skill-Wanderer | Free Education, Funded by Real Work',
  description: 'Free courses, guidance and real project experience for self-learners, funded by our tech partner work for small businesses. No tuition, ads or affiliate links.',
  keywords: [
    'free education',
    'free mentorship',
    'self-learners',
    'lifelong learning',
    'learn by contributing',
    'tech partner for small business',
    'website for coaches',
    'website for consultants',
    'free prototype',
    'no development fee',
    'no vendor lock-in',
    'AI tools for educators',
  ],
  type: 'website',
  structuredData: [
    createOrganizationSchema(),
    createFAQSchema([
      {
        question: 'What does Skill-Wanderer do?',
        answer: 'Skill-Wanderer is a free education mission. We give self-learners and lifelong learners free courses, guidance and real project experience. It is funded by our work as a tech partner for solo founders, freelancers, coaches, consultants, writers and small businesses: we build websites and AI tools, starting with a free working prototype. If a client continues, there is no development fee; they pay a monthly or quarterly fee for hosting, maintenance, support and occasional changes.'
      },
      {
        question: 'Is the learning really free?',
        answer: 'Yes, all Skill-Wanderer learning content is completely free, and we never charge for guidance. We ask for your effort instead, and mentorship grows with your contribution. Mentorship and guild support are funded mainly by our client work, and never by ads.'
      },
      {
        question: 'Can learners earn with Skill-Wanderer?',
        answer: 'Yes. When you are ready, you can help on real client projects under senior review and be paid for your part. Income is based on contribution, which keeps it fair for everyone and helps sustain the mission.'
      },
      {
        question: 'Do I pay anything before I see my project?',
        answer: 'No. For accepted projects the first working prototype is free, and there is no obligation to continue. The monthly price is confirmed only after you have reviewed the prototype.'
      },
      {
        question: 'Can I leave later?',
        answer: 'Yes, anytime. We do not believe in vendor lock-in: you own your domain, you can see the code and configuration, and you can move the project yourself or with another provider.'
      },
      {
        question: 'Who builds my project?',
        answer: 'Quan Nguyen, our founder, designs the project, builds the critical parts and reviews every change. Guild learners may help, always under his review.'
      }
    ])
  ]
})

// 🔷 Define handler outside (important for cleanup)
const handleScroll = () => {
  const navbar = document.getElementById('navbar')
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  }
}

const handleAnchorClick = (e: Event) => {
  const targetElement = e.target as HTMLElement | null
  if (!targetElement) return

  const anchor = targetElement.closest('a[href^="#"]') as HTMLAnchorElement | null
  if (!anchor) return

  const href = anchor.getAttribute('href')
  if (!href) return

  const target = document.querySelector(href)
  if (target) {
    e.preventDefault()
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 🔷 Mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleAnchorClick)
})

// 🔷 Cleanup (TOP LEVEL ✅)
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleAnchorClick)
})
</script>
<style scoped>
/* Section backgrounds alternate down the page */
.section--dark {
  background: var(--dark-bg);
}

.section--darker {
  background: var(--darker-bg);
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 140px 20px 80px;
  background: radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255, 217, 61, 0.05) 0%, transparent 50%);
}

/* Positioned so it stacks above the decorative path. */
.hero-content {
  position: relative;
  max-width: 960px;
  text-align: center;
  z-index: 2;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 20px;
  animation: fadeInUp 0.8s ease-out;
}

.hero h1 {
  font-size: clamp(2.3rem, 6vw, 4.2rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 24px;
  text-wrap: balance;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 0.8s ease-out;
}

.hero-description {
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.75;
  max-width: 760px;
  margin: 0 auto 40px;
  opacity: 0.85;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* One door per hero: the learner and the client */
.hero-doors {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  max-width: 880px;
  margin: 0 auto;
  text-align: left;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-door {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 28px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.hero-door:hover {
  border-color: rgba(255, 107, 53, 0.4);
  background: var(--card-hover);
}

.door-label {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-yellow);
}

.door-text {
  flex-grow: 1;
  margin: 0;
  line-height: 1.7;
  opacity: 0.85;
}

.hero-door .btn {
  font-size: 1rem;
  padding: 13px 24px;
}

.door-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-orange);
  text-decoration: none;
}

.door-link:hover {
  text-decoration: underline;
}

.wandering-path {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  opacity: 0.3;
  pointer-events: none;
}

.hero-image {
  max-width: 880px;
  margin: 48px auto 0;
  animation: fadeInUp 0.8s ease-out 0.7s both;
}

.path {
  stroke: var(--primary-orange);
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawPath 3s ease-out forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

/* Buttons */
.btn {
  box-sizing: border-box;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(255, 107, 53, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid var(--primary-orange);
}

.btn-secondary:hover {
  background: var(--primary-orange);
  color: white;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid rgba(255, 107, 53, 0.3);
}

.btn-outline:hover {
  background: rgba(255, 107, 53, 0.1);
  border-color: var(--primary-orange);
  transform: translateY(-2px);
}

/* Section Header */
.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 20px;
  color: var(--primary-orange);
}

.section-header p {
  font-size: 1.15rem;
  line-height: 1.7;
  opacity: 0.85;
}

/* Track: each hero's story opens with who they are, then their problem */
.track {
  padding: 100px 20px;
}

.track-intro {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: 56px;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto 90px;
}

/* Until its image exists (production skips empty slots), the intro centers like a header. */
.track-intro:not(:has(.track-image)) {
  max-width: 820px;
  text-align: center;
}

.track-intro:not(:has(.track-image)) .track-cta,
.track-intro:not(:has(.track-image)) .track-trust {
  justify-content: center;
}

.track-label {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.track-intro-text h2 {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 20px;
  text-wrap: balance;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.track-intro-text > p:not(.track-label) {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 28px;
}

.track-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* A little smaller than the hero buttons, so both fit side by side in the text column. */
.track-cta .btn {
  font-size: 1rem;
  padding: 14px 24px;
}

.track-trust {
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  font-size: 0.95rem;
  opacity: 0.85;
}

.track-trust li::before {
  content: '✓';
  color: var(--success-green);
  font-weight: 700;
  margin-right: 8px;
}

.track-image {
  border-radius: 20px;
}

/* Problem */
.problem-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
}

.problem-header h3 {
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  color: var(--primary-orange);
  margin-bottom: 12px;
}

.problem-header p {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.85;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.problem-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.3s ease;
}

.problem-card:hover {
  border-color: rgba(255, 107, 53, 0.35);
  background: var(--card-hover);
}

.problem-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 14px;
}

.problem-card h4 {
  color: white;
  font-size: 1.25rem;
  margin: 0 0 10px;
}

.problem-card p {
  margin: 0;
  opacity: 0.8;
  line-height: 1.7;
}

/* Guide (shared by the learner's mentor and the client's guide) */
.guide,
.mentor {
  padding: 100px 20px;
}

.guide-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 48px;
  align-items: flex-start;
}

.guide-avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 107, 53, 0.4);
  flex-shrink: 0;
}

.guide-eyebrow {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 12px;
}

.guide-text h2,
.mentor-text h2 {
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  line-height: 1.25;
  color: white;
  margin-bottom: 20px;
}

.guide-text p,
.mentor-text > p:not(.guide-eyebrow) {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 16px;
}

.guide-points {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: grid;
  gap: 10px;
}

.guide-points li {
  position: relative;
  padding-left: 28px;
  line-height: 1.6;
}

.guide-points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-green);
  font-weight: 700;
}

.guide-points strong {
  color: white;
}

/* Learner mentor: the story on the left, learners we've mentored on the right */
.mentor-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 56px;
  align-items: start;
}

.mentor-proof {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 28px 24px;
}

.mentor-proof-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-yellow);
  margin: 0 0 12px 10px;
}

.learner-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: grid;
  gap: 4px;
}

.learner-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px;
  border-radius: 14px;
  color: var(--light-text);
  text-decoration: none;
  transition: background 0.3s ease;
}

.learner-row:hover {
  background: var(--card-hover);
}

.learner-row img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 107, 53, 0.4);
  flex-shrink: 0;
}

.learner-row-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.learner-row-name {
  font-weight: 700;
  color: white;
}

.learner-row-country {
  font-weight: 400;
  opacity: 0.6;
}

.learner-row-outcome {
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.75;
}

.mentor-proof-link {
  margin-left: 10px;
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.mentor-proof-link:hover {
  text-decoration: underline;
}

/* Plan */
.plan {
  padding: 100px 20px;
}

.plan-steps {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.plan-steps--four {
  grid-template-columns: repeat(4, 1fr);
  max-width: 1240px;
}

.plan-step {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 36px 28px;
  transition: all 0.3s ease;
}

.plan-steps--four .plan-step {
  padding: 28px 22px;
}

.plan-step:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
}

.plan-step .plan-image {
  margin-bottom: 22px;
  border-radius: 14px;
}

.plan-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 18px;
}

.plan-step h3 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.plan-step p {
  opacity: 0.82;
  line-height: 1.7;
}

.plan-step p a {
  color: var(--primary-orange);
  font-weight: 600;
}

.plan-proof {
  text-align: center;
  max-width: 700px;
  margin: 40px auto 0;
  font-size: 1.05rem;
  opacity: 0.9;
}

.plan-proof a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.plan-proof a:hover {
  text-decoration: underline;
}

.plan-cta {
  text-align: center;
  margin-top: 28px;
}

/* The learner's side of the deal: effort in return for guidance */
.fair-exchange {
  max-width: 820px;
  margin: 48px auto 0;
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid rgba(255, 217, 61, 0.3);
  background: linear-gradient(135deg, rgba(255, 217, 61, 0.07), rgba(255, 107, 53, 0.05));
  text-align: center;
}

.fair-exchange h3 {
  color: var(--accent-yellow);
  font-size: 1.3rem;
  margin: 0 0 10px;
}

.fair-exchange p {
  margin: 0;
  line-height: 1.8;
  opacity: 0.9;
}

/* Stakes */
.stakes {
  padding: 100px 20px;
}

.stakes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.stakes-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 36px;
}

.stakes-card--without {
  border: 1px solid rgba(244, 67, 54, 0.3);
}

.stakes-card--with {
  border: 1px solid rgba(76, 175, 80, 0.35);
  background: rgba(76, 175, 80, 0.05);
}

.stakes-card h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 18px;
}

.stakes-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.stakes-card li {
  position: relative;
  padding-left: 30px;
  line-height: 1.6;
  opacity: 0.88;
}

.stakes-card--without li::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: #f87171;
  font-weight: 700;
}

.stakes-card--with li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-weight: 700;
}

/* Learner call to action */
.reach-out {
  padding: 100px 20px;
}

.reach-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.reach-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 28px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.reach-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-4px);
}

.reach-icon {
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 16px;
}

.reach-card h3 {
  color: white;
  font-size: 1.25rem;
  margin: 0 0 10px;
}

.reach-card p {
  flex-grow: 1;
  opacity: 0.82;
  line-height: 1.7;
  margin: 0 0 24px;
}

.reach-card .btn {
  font-size: 1rem;
  padding: 12px 22px;
}

/* Projects Showcase */
.projects-showcase {
  padding: 100px 20px;
}

.projects-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-thumb {
  text-decoration: none;
  color: var(--light-text);
  border-radius: 16px;
  overflow: hidden;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  transition: all 0.3s ease;
}

.project-thumb:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.project-image-wrap {
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  position: relative;
}

.project-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-thumb:hover .project-image-wrap img {
  transform: scale(1.05);
}

/* Anchored left to match the project cards, and because several thumbnail
   crops put their subject on the right. */
.project-type-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 50px;
  letter-spacing: 0.04em;
}

.project-meta {
  padding: 16px 18px;
}

.project-meta h4 {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 6px;
}

.project-summary {
  font-size: 0.85rem;
  opacity: 0.6;
  line-height: 1.5;
  margin-bottom: 10px;
}

.project-stack-tags {
  display: flex;
  gap: 6px;
}

.project-stack-tags span {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 50px;
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: var(--primary-orange);
  font-weight: 600;
}

.projects-cta {
  text-align: center;
  margin-top: 40px;
}

/* Mission band: how client work funds free education */
.mission-band {
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, var(--darker-bg) 60%);
  border-top: 1px solid rgba(255, 107, 53, 0.1);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
}

.mission-band-content {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.mission-band h2 {
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: var(--primary-orange);
  margin-bottom: 18px;
}

.mission-lead {
  max-width: 760px;
  margin: 0 auto 36px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.88;
}

.mission-image {
  max-width: 880px;
  margin: 0 auto 36px;
}

.mission-why {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 36px;
  text-align: left;
}

.mission-why-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 18px;
  padding: 26px 28px;
}

.mission-why-card h3 {
  color: white;
  font-size: 1.2rem;
  margin: 0 0 8px;
}

.mission-why-card p {
  margin: 0;
  line-height: 1.7;
  opacity: 0.85;
}

/* The loop: four steps with an arrow in each gap, then a line that closes the circle */
.mission-loop {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
}

.mission-loop li {
  position: relative;
  display: flex;
}

.mission-loop span {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 217, 61, 0.08);
  border: 1px solid rgba(255, 217, 61, 0.3);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
}

.mission-loop li:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 50%;
  left: calc(100% + 16px);
  transform: translate(-50%, -50%);
  color: var(--primary-orange);
  font-weight: 700;
}

.mission-loop-again {
  margin: 0 auto 32px;
  max-width: 680px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--accent-yellow);
}

.principle-chips {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.principle-chips li {
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.25);
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 0.9rem;
}

.mission-note {
  max-width: 680px;
  margin: 0 auto 24px;
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.8;
}

.mission-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Final CTA */
.final-cta {
  padding: 100px 20px;
  text-align: center;
}

.final-cta h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--primary-orange);
  margin-bottom: 18px;
}

.final-cta-lead {
  max-width: 680px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.88;
}

.final-doors {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

.final-door {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 32px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 20px;
}

.final-door h3 {
  color: white;
  font-size: 1.4rem;
  margin: 0 0 12px;
}

.final-door > p:not(.final-cta-email) {
  flex-grow: 1;
  margin: 0 0 24px;
  line-height: 1.8;
  opacity: 0.85;
}

.final-cta-email {
  margin: 18px 0 0;
  font-size: 0.95rem;
  opacity: 0.8;
}

.final-cta-email a {
  color: var(--primary-orange);
  font-weight: 600;
  text-decoration: none;
}

.final-cta-email a:hover {
  text-decoration: underline;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1100px) {
  .plan-steps--four {
    grid-template-columns: repeat(2, 1fr);
    max-width: 760px;
  }
}

@media (max-width: 900px) {
  .plan-steps {
    grid-template-columns: 1fr;
    max-width: 600px;
  }

  .plan-steps--four {
    grid-template-columns: repeat(2, 1fr);
    max-width: 760px;
  }

  .track-intro {
    grid-auto-flow: row;
    gap: 36px;
    max-width: 680px;
    margin-bottom: 72px;
    text-align: center;
  }

  .track-cta,
  .track-trust {
    justify-content: center;
  }

  .mentor-content {
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 680px;
  }

  .reach-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 16px 60px;
  }

  .hero-eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.05em;
  }

  .hero-doors,
  .mission-why,
  .final-doors {
    grid-template-columns: 1fr;
  }

  .track {
    padding: 80px 16px;
  }

  .track-label {
    font-size: 0.8rem;
    letter-spacing: 0.05em;
  }

  .problem-grid,
  .stakes-grid {
    grid-template-columns: 1fr;
  }

  .guide-content {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  .guide-avatar {
    width: 140px;
    height: 140px;
  }

  .guide-text {
    text-align: center;
  }

  .guide-points {
    text-align: left;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  .projects-strip {
    grid-template-columns: 1fr 1fr;
  }

  .mission-loop {
    grid-template-columns: 1fr;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
  }

  .mission-loop li:not(:last-child)::after {
    content: '↓';
    top: calc(100% + 16px);
    left: 50%;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .plan-steps--four {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}

@media (max-width: 480px) {
  .projects-strip {
    grid-template-columns: 1fr;
  }

  .problem-card,
  .stakes-card,
  .hero-door,
  .final-door {
    padding: 28px 22px;
  }
}
</style>
