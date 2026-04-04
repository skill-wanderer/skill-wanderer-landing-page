<template>
  <div class="roadmap-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Guild Roadmap</h1>
        <p class="hero-subtitle">Building the Future of Skill-Wanderer — One Module at a Time</p>
        <p class="hero-description">
          Our roadmap outlines the key modules we're developing to power a truly independent,
          community-driven tech guild. Every module is built with passion, transparency,
          and our guild members' needs at heart.
        </p>
      </div>
    </section>

    <!-- Roadmap Timeline Section -->
    <section class="roadmap-timeline">
      <div class="container">
        <div class="section-header">
          <h2>Core Guild Modules</h2>
          <p>The foundational pillars that will power the Skill-Wanderer guild ecosystem</p>
        </div>

        <div class="timeline">
          <!-- Phase 1: Custom LMS -->
          <div class="timeline-item" :class="{ visible: visibleItems.has('lms') }" ref="lmsRef">
            <div class="timeline-marker">
              <span class="phase-number">1</span>
            </div>
            <div class="timeline-card">
              <div class="card-header">
                <span class="card-icon"><Library :size="24" color="white" :stroke-width="2" /></span>
                <div class="card-status status-active">
                  <span class="status-dot"></span>
                  In Progress
                </div>
              </div>
              <h3>Custom LMS Module</h3>
              <p class="card-subtitle">Replacing Moodle with a Purpose-Built Learning System</p>
              <p class="card-description">
                Building a fully customized Learning Management System from the ground up to replace our
                existing Moodle setup. This new LMS is tailored to embrace our guild philosophy of learning
                through failure, practical education, and community-driven content — with no limitations
                imposed by third-party tools.
              </p>
              <div class="card-features">
                <div class="feature-tag">Interactive Learning Paths</div>
                <div class="feature-tag">Progress Tracking</div>
                <div class="feature-tag">Practical Assessments</div>
                <div class="feature-tag">AI-Assisted Content</div>
                <div class="feature-tag">Certificate Generation</div>
                <div class="feature-tag">Self-Hosted Infrastructure</div>
              </div>
              <div class="card-goal">
                <strong>Goal:</strong> Full ownership of the learning experience — no vendor lock-in,
                no compromises on our principles, and complete freedom to innovate.
              </div>
            </div>
          </div>

          <!-- Phase 2: Portal & Administration -->
          <div class="timeline-item" :class="{ visible: visibleItems.has('portal') }" ref="portalRef">
            <div class="timeline-marker">
              <span class="phase-number">2</span>
            </div>
            <div class="timeline-card">
              <div class="card-header">
                <span class="card-icon"><Home :size="24" color="white" :stroke-width="2" /></span>
                <div class="card-status status-planned">
                  <span class="status-dot"></span>
                  Planned
                </div>
              </div>
              <h3>Portal & Administration Module</h3>
              <p class="card-subtitle">A Home for Every Member</p>
              <p class="card-description">
                A comprehensive member portal and administration system that gives guild members, mentors,
                and administrators a personalized dashboard to manage their journey. From enrollment and
                profile management to progress analytics and role-based access — everything in one place.
              </p>
              <div class="card-features">
                <div class="feature-tag">Member Dashboards</div>
                <div class="feature-tag">Role-Based Access</div>
                <div class="feature-tag">Profile Management</div>
                <div class="feature-tag">Enrollment System</div>
                <div class="feature-tag">Progress Analytics</div>
                <div class="feature-tag">Admin Panel</div>
              </div>
              <div class="card-goal">
                <strong>Goal:</strong> Empower guild members to own their learning journey with a clean,
                intuitive portal that respects their privacy and autonomy.
              </div>
            </div>
          </div>

          <!-- Phase 3: Chat & Communication -->
          <div class="timeline-item" :class="{ visible: visibleItems.has('chat') }" ref="chatRef">
            <div class="timeline-marker">
              <span class="phase-number">3</span>
            </div>
            <div class="timeline-card">
              <div class="card-header">
                <span class="card-icon"><MessageCircle :size="24" color="white" :stroke-width="2" /></span>
                <div class="card-status status-planned">
                  <span class="status-dot"></span>
                  Planned
                </div>
              </div>
              <h3>Chat & Communication Module</h3>
              <p class="card-subtitle">Real-Time Connection for Guild Members & Mentors</p>
              <p class="card-description">
                A built-in chat and communication system to enable real-time conversations between
                guild members, mentors, and the community. Direct messages, group channels, study rooms,
                and mentor Q&A sessions — all integrated seamlessly into the guild without relying
                on external tools.
              </p>
              <div class="card-features">
                <div class="feature-tag">Direct Messaging</div>
                <div class="feature-tag">Group Channels</div>
                <div class="feature-tag">Study Rooms</div>
                <div class="feature-tag">Mentor Q&A Sessions</div>
                <div class="feature-tag">Notifications</div>
                <div class="feature-tag">File Sharing</div>
              </div>
              <div class="card-goal">
                <strong>Goal:</strong> Foster meaningful, instant communication that strengthens the
                bonds between guild members and mentors — keeping everything within our ecosystem.
              </div>
            </div>
          </div>

          <!-- Phase 4: Community Module -->
          <div class="timeline-item" :class="{ visible: visibleItems.has('community') }" ref="communityRef">
            <div class="timeline-marker">
              <span class="phase-number">4</span>
            </div>
            <div class="timeline-card">
              <div class="card-header">
                <span class="card-icon"><Handshake :size="24" color="white" :stroke-width="2" /></span>
                <div class="card-status status-planned">
                  <span class="status-dot"></span>
                  Planned
                </div>
              </div>
              <h3>Community Module</h3>
              <p class="card-subtitle">Members Helping Members</p>
              <p class="card-description">
                A vibrant guild space where members help each other grow. Discussion forums,
                knowledge sharing, peer code reviews, project showcases, and collaborative learning
                challenges. This is where the culture of "guild over competition" truly comes alive.
              </p>
              <div class="card-features">
                <div class="feature-tag">Discussion Forums</div>
                <div class="feature-tag">Peer Code Reviews</div>
                <div class="feature-tag">Project Showcases</div>
                <div class="feature-tag">Knowledge Sharing</div>
                <div class="feature-tag">Learning Challenges</div>
                <div class="feature-tag">Reputation System</div>
              </div>
              <div class="card-goal">
                <strong>Goal:</strong> Build a self-sustaining guild where today's apprentices become
                tomorrow's masters, embodying the karma of shared growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Supporting Modules Section -->
    <section class="supporting-modules">
      <div class="container">
        <div class="section-header">
          <h2>Supporting & Growth Modules</h2>
          <p>Additional modules we're developing alongside the core guild infrastructure to support operations, partnerships, and sustainability</p>
        </div>

        <div class="modules-grid">
          <div class="module-card">
            <span class="module-icon"><Mail :size="24" :stroke-width="2" /></span>
            <h3>Contact & Outreach</h3>
            <p>
              A dedicated contact and outreach module to streamline communication with potential
              partners, guild members, and supporters — making it easy for anyone to reach out and
              engage with Skill-Wanderer.
            </p>
            <div class="module-tags">
              <span class="tag">Contact Forms</span>
              <span class="tag">Inquiry Management</span>
              <span class="tag">Auto-Responses</span>
            </div>
          </div>

          <div class="module-card">
            <span class="module-icon"><ClipboardList :size="24" :stroke-width="2" /></span>
            <h3>Project Management</h3>
            <p>
              An internal project management tool to coordinate guild development, track feature
              progress, manage tasks across contributors, and maintain transparency about what
              we're building and when.
            </p>
            <div class="module-tags">
              <span class="tag">Task Boards</span>
              <span class="tag">Sprint Planning</span>
              <span class="tag">Contributor Tracking</span>
            </div>
          </div>

          <div class="module-card">
            <span class="module-icon"><Coins :size="24" :stroke-width="2" /></span>
            <h3>Fundraising & Sustainability</h3>
            <p>
              Tools and integrations to raise funding for the project — from donation campaigns
              and grant applications to our Social Impact Token model that sustains free education
              through community trust and shared value.
            </p>
            <div class="module-tags">
              <span class="tag">Donation Platform</span>
              <span class="tag">Grant Management</span>
              <span class="tag">Impact Tokens</span>
            </div>
          </div>

          <div class="module-card">
            <span class="module-icon"><BarChart3 :size="24" :stroke-width="2" /></span>
            <h3>Analytics & Insights</h3>
            <p>
              A privacy-respecting analytics module to understand learning patterns, measure
              guild impact, and make data-driven decisions — all without compromising
              member privacy or selling data.
            </p>
            <div class="module-tags">
              <span class="tag">Learning Analytics</span>
              <span class="tag">Impact Metrics</span>
              <span class="tag">Privacy-First</span>
            </div>
          </div>

          <div class="module-card">
            <span class="module-icon"><Plug :size="24" :stroke-width="2" /></span>
            <h3>Integration & API</h3>
            <p>
              Open APIs and integration points that allow the guild modules to work together
              seamlessly and enable third-party tools to connect where needed — built on our
              microservices architecture.
            </p>
            <div class="module-tags">
              <span class="tag">REST APIs</span>
              <span class="tag">Microservices</span>
              <span class="tag">Webhooks</span>
            </div>
          </div>

          <div class="module-card">
            <span class="module-icon"><Shield :size="24" :stroke-width="2" /></span>
            <h3>Security & Compliance</h3>
            <p>
              Ensuring the guild meets the highest standards of security and data protection.
              From authentication and authorization to GDPR compliance — protecting our
              community's trust is non-negotiable.
            </p>
            <div class="module-tags">
              <span class="tag">Authentication</span>
              <span class="tag">Data Protection</span>
              <span class="tag">GDPR Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Banner -->
    <section class="vision-banner">
      <div class="container">
        <div class="banner-content">
          <h2>Built in the Open, Driven by Purpose</h2>
          <p>
            Every module on this roadmap is developed with the same principles that define our guild:
            <strong>transparency, integrity, and community-first thinking</strong>. We don't just build software —
            we build trust. This roadmap is a living document that evolves with our guild members' needs and the
            community's input.
          </p>
          <div class="banner-stats">
            <div class="stat">
              <span class="stat-number">4</span>
              <span class="stat-label">Core Modules</span>
            </div>
            <div class="stat">
              <span class="stat-number">6+</span>
              <span class="stat-label">Supporting Modules</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Open & Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Want to Be Part of the Journey?</h2>
      <p>Whether you're a learner, contributor, or supporter — there's a place for you in the Skill-Wanderer guild</p>
      <div class="cta-buttons">
        <NuxtLink to="/contact" class="btn btn-primary">
          Get In Touch
          <span>→</span>
        </NuxtLink>
        <NuxtLink to="/work-with-us/become-a-partner" class="btn btn-secondary">
          Partner With Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BarChart3, ClipboardList, Coins, Handshake, Home, Library, Mail, MessageCircle, Plug, Shield } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

// SEO and meta management
useSEO({
  title: 'Guild Roadmap | Skill-Wanderer Development Plan',
  description: 'Explore the Skill-Wanderer guild roadmap — from our custom LMS and member portal to community tools and sustainability. See what we\'re building and how you can be part of the guild.',
  keywords: ['skill-wanderer roadmap', 'guild development', 'LMS module', 'community module', 'tech guild roadmap', 'open source education'],
  type: 'website',
})

const visibleItems = ref(new Set<string>())

onMounted(() => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = (entry.target as HTMLElement).dataset.timelineId
        if (id) {
          visibleItems.value.add(id)
        }
      }
    })
  }, observerOptions)

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    const ids = ['lms', 'portal', 'chat', 'community']
    ;(item as HTMLElement).dataset.timelineId = ids[index]
    observer.observe(item)
  })

  // Observe module cards for fade-in
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('visible')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.module-card').forEach(card => {
    cardObserver.observe(card)
  })

  return () => {
    observer.disconnect()
    cardObserver.disconnect()
  }
})
</script>

<style scoped>
/* ========== Hero Section ========== */
.hero {
  padding: 140px 20px 80px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  opacity: 0.9;
  margin-bottom: 20px;
}

.hero-description {
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
  line-height: 1.8;
  font-size: 1.05rem;
}

/* ========== Roadmap Timeline Section ========== */
.roadmap-timeline {
  padding: 80px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  opacity: 0.8;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ========== Timeline ========== */
.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--primary-orange), var(--accent-yellow), rgba(255, 107, 53, 0.2));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding-left: 100px;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: 22px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
}

.phase-number {
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
}

.timeline-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 35px;
  transition: all 0.3s ease;
}

.timeline-card:hover {
  background: var(--card-hover);
  border-color: rgba(255, 107, 53, 0.3);
  transform: translateY(-3px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-icon {
  font-size: 2.5rem;
}

.card-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.status-active {
  background: rgba(76, 175, 80, 0.15);
  color: #4CAF50;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.status-active .status-dot {
  background: #4CAF50;
  animation: pulse-dot 2s infinite;
}

.status-planned {
  background: rgba(255, 193, 7, 0.12);
  color: #FFD93D;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.status-planned .status-dot {
  background: #FFD93D;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.timeline-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 8px;
}

.card-subtitle {
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 15px;
  font-style: italic;
}

.card-description {
  line-height: 1.8;
  opacity: 0.85;
  margin-bottom: 20px;
  font-size: 0.98rem;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.feature-tag {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: var(--accent-yellow);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 500;
}

.card-goal {
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--primary-orange);
  padding: 12px 18px;
  border-radius: 0 8px 8px 0;
  font-size: 0.92rem;
  line-height: 1.7;
  opacity: 0.9;
}

.card-goal strong {
  color: var(--primary-orange);
}

/* ========== Supporting Modules Section ========== */
.supporting-modules {
  padding: 80px 20px;
  background: radial-gradient(ellipse at 50% 0%, rgba(255, 107, 53, 0.06) 0%, transparent 60%);
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.module-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.12);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.module-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.module-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.module-icon {
  font-size: 2.2rem;
  display: block;
  margin-bottom: 15px;
}

.module-card h3 {
  color: var(--primary-orange);
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.module-card p {
  opacity: 0.85;
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 18px;
}

.module-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.78rem;
  opacity: 0.7;
}

/* ========== Vision Banner ========== */
.vision-banner {
  padding: 80px 20px;
}

.banner-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 20px;
  padding: 50px 40px;
}

.banner-content h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.banner-content p {
  opacity: 0.85;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 35px;
}

.banner-content p strong {
  color: var(--primary-orange);
}

.banner-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 5px;
}

/* ========== CTA Section ========== */
.cta {
  padding: 80px 20px;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
}

.cta h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta p {
  opacity: 0.8;
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 107, 53, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid var(--primary-orange);
}

.btn-secondary:hover {
  background: rgba(255, 107, 53, 0.1);
  transform: translateY(-2px);
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .hero {
    padding: 120px 20px 60px;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 60px;
    margin-bottom: 40px;
  }

  .timeline-marker {
    left: 2px;
    width: 36px;
    height: 36px;
  }

  .timeline-card {
    padding: 25px;
  }

  .timeline-card h3 {
    font-size: 1.3rem;
  }

  .modules-grid {
    grid-template-columns: 1fr;
  }

  .banner-content {
    padding: 35px 25px;
  }

  .banner-stats {
    gap: 30px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .feature-tag {
    font-size: 0.75rem;
    padding: 4px 10px;
  }

  .card-features {
    gap: 6px;
  }
}
</style>
