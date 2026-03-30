<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Cookie Policy</h1>
        <p class="hero-subtitle">How we use cookies on our website</p>
        <p class="last-updated">Last updated: March 30, 2026</p>
      </div>
    </section>

    <!-- Cookie Policy Content -->
    <section class="cookie-content">
      <div class="content-container">
        <!-- Introduction -->
        <div class="policy-section">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work properly, improve performance, and provide a better user experience.
          </p>
        </div>

        <!-- Our Approach -->
        <div class="policy-section essential-highlight">
          <h2>Our Cookie Approach: Essential Cookies Only</h2>
          <p>
            At Skill-Wanderer, we keep things simple and privacy-respecting. <strong>We only use essential cookies</strong> — the minimum necessary to make our website function correctly. We do not use tracking cookies, advertising cookies, analytics cookies, or any other non-essential cookies.
          </p>
          <div class="essential-badge">
            <span class="badge-icon">&#x2713;</span>
            <span>100% Essential Cookies Only — No tracking, no advertising, no profiling.</span>
          </div>
        </div>

        <!-- What We Use -->
        <div class="policy-section">
          <h2>Cookies We Use</h2>

          <h3>Essential / Strictly Necessary Cookies</h3>
          <p>These cookies are required for the website to function and cannot be switched off in our systems. They are set only in response to actions you take, such as acknowledging a notice or storing your preference that you have seen our cookie banner.</p>
          <div class="cookie-table-wrapper">
            <table class="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>cookie_banner_dismissed</code></td>
                  <td>Remembers that you have acknowledged our cookie notice, so we don't show it on every page visit.</td>
                  <td>1 year (stored in localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="note">
            Note: We use <strong>localStorage</strong> rather than traditional cookies where possible, as it keeps data entirely on your device and is never sent to our servers.
          </p>
        </div>

        <!-- What We Don't Use -->
        <div class="policy-section">
          <h2>What We Do Not Use</h2>
          <ul>
            <li><strong>Analytics Cookies:</strong> We do not use Google Analytics, Hotjar, or any other analytics service that tracks your behaviour across our site.</li>
            <li><strong>Advertising Cookies:</strong> We do not run ads and do not use any advertising or retargeting cookies.</li>
            <li><strong>Social Media Tracking Cookies:</strong> We do not embed social media widgets that track you across the web.</li>
            <li><strong>Personalisation Cookies:</strong> We do not build profiles about you or personalise content based on tracked behaviour.</li>
          </ul>
        </div>

        <!-- YouTube No-Cookie Embeds -->
        <div class="policy-section">
          <h2>Embedded Video Content</h2>
          <p>
            Some pages on our website may include embedded videos from YouTube. To protect your privacy, we use the <strong>YouTube Privacy-Enhanced Mode</strong> (<code>youtube-nocookie.com</code>) for all video embeds.
          </p>
          <p>
            In Privacy-Enhanced Mode, YouTube will not set cookies on your device to track your browsing activity unless you choose to play the video. This is a deliberate choice we have made to minimise any third-party cookie impact on our visitors.
          </p>
          <p>
            If you do play an embedded video, YouTube may set its own cookies subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. We have no control over those cookies once the video is played.
          </p>
        </div>

        <!-- Third-Party Services -->
        <div class="policy-section">
          <h2>Third-Party Services</h2>
          <p>
            Our website is built with Nuxt.js and hosted on our infrastructure. We use Firebase for data storage (e.g., contact form submissions). These services may place essential technical cookies or use browser storage to operate correctly. We have selected these providers based on their strong privacy commitments.
          </p>
        </div>

        <!-- Your Control -->
        <div class="policy-section">
          <h2>Your Control Over Cookies</h2>
          <p>
            Because we only use essential cookies, there is nothing to opt out of on our end. However, you always have control through your browser settings:
          </p>
          <ul>
            <li>You can view, manage, and delete cookies through your browser's settings or developer tools.</li>
            <li>You can clear your localStorage at any time, which will reset the cookie banner preference.</li>
            <li>Blocking essential cookies may affect how our website functions.</li>
          </ul>
          <p>For guidance on managing cookies in popular browsers:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
        </div>

        <!-- Changes -->
        <div class="policy-section">
          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Given our minimal cookie usage, significant changes are unlikely, but we encourage you to review this policy periodically.
          </p>
        </div>

        <!-- Contact -->
        <div class="policy-section">
          <h2>Contact Us</h2>
          <p>If you have any questions about our use of cookies, please reach out:</p>
          <div class="contact-info">
            <p><strong>Contact Form:</strong> <NuxtLink to="/contact" class="contact-link">Use our contact form</NuxtLink></p>
            <p><strong>Email:</strong> <a href="mailto:quan.nguyen@skill-wanderer.com">quan.nguyen@skill-wanderer.com</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSEO({
  title: 'Cookie Policy | Skill-Wanderer',
  description: 'Skill-Wanderer uses only essential cookies. No tracking, no advertising, no profiling. Learn about our privacy-first cookie approach.',
  keywords: ['cookie policy', 'essential cookies', 'privacy', 'skill-wanderer cookies'],
  type: 'article'
})
</script>

<style scoped>
:root {
  --primary-orange: #FF6B35;
  --deep-orange: #E85D25;
  --darker-bg: #1a1a1a;
  --deeper-bg: #0f0f0f;
  --light-text: #e0e0e0;
  --muted-text: #b0b0b0;
}

.hero {
  background: linear-gradient(135deg, var(--deeper-bg) 0%, var(--darker-bg) 100%);
  padding: 120px 20px 80px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 107, 53, 0.2);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--primary-orange);
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--light-text);
  margin-bottom: 15px;
  opacity: 0.9;
}

.last-updated {
  font-size: 1rem;
  color: var(--muted-text);
  font-style: italic;
}

.cookie-content {
  background: var(--darker-bg);
  padding: 80px 20px;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
}

.policy-section {
  margin-bottom: 50px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 107, 53, 0.1);
}

.policy-section.essential-highlight {
  border-color: rgba(255, 107, 53, 0.4);
  background: rgba(255, 107, 53, 0.04);
}

.policy-section h2 {
  font-size: 1.8rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
  font-weight: 600;
}

.policy-section h3 {
  font-size: 1.4rem;
  color: var(--light-text);
  margin: 25px 0 15px 0;
  font-weight: 500;
}

.policy-section p {
  color: var(--light-text);
  line-height: 1.7;
  margin-bottom: 15px;
  font-size: 1rem;
}

.policy-section ul {
  color: var(--light-text);
  margin: 15px 0;
  padding-left: 25px;
}

.policy-section li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.policy-section li strong {
  color: var(--primary-orange);
  font-weight: 600;
}

.policy-section a {
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.policy-section a:hover {
  color: #ff8a65;
  text-decoration: underline;
}

.essential-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding: 14px 20px;
  background: rgba(255, 107, 53, 0.12);
  border: 1px solid rgba(255, 107, 53, 0.35);
  border-radius: 8px;
  color: var(--light-text);
  font-size: 1rem;
  font-weight: 500;
}

.badge-icon {
  font-size: 1.3rem;
  color: var(--primary-orange);
  font-weight: 700;
  flex-shrink: 0;
}

.cookie-table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
}

.cookie-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.cookie-table th,
.cookie-table td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid rgba(255, 107, 53, 0.15);
  color: var(--light-text);
  line-height: 1.5;
}

.cookie-table th {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-orange);
  font-weight: 600;
}

.cookie-table td code {
  background: rgba(255, 255, 255, 0.07);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9rem;
  color: #ff8a65;
}

.policy-section p code {
  background: rgba(255, 255, 255, 0.07);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9rem;
  color: #ff8a65;
}

.note {
  font-size: 0.9rem;
  color: var(--muted-text);
  font-style: italic;
}

.contact-link {
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #ff8a65;
  text-decoration: underline;
}

.contact-info {
  background: rgba(255, 107, 53, 0.05);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin-top: 15px;
}

.contact-info p {
  margin-bottom: 8px;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 60px;
  }

  .cookie-content {
    padding: 60px 15px;
  }

  .policy-section {
    padding: 20px;
  }

  .policy-section h2 {
    font-size: 1.5rem;
  }

  .policy-section h3 {
    font-size: 1.2rem;
  }
}
</style>
