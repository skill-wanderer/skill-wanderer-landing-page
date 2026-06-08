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
          <h2>What Are Cookies and Browser Storage?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work properly, improve performance, and provide a better user experience.
          </p>
          <p>
            Modern web applications also use other forms of browser storage — such as <code>localStorage</code>, <code>sessionStorage</code>, and <code>IndexedDB</code> — to store data locally on your device. These serve similar purposes to cookies (for example, keeping you logged in) but work differently under the hood. This policy covers all of these technologies.
          </p>
          <h3>Scope of This Policy</h3>
          <p>
            This Cookie Policy applies to <strong>all</strong> Skill-Wanderer properties under the <strong>skill-wanderer.com</strong> domain, including every subdomain, whether listed here or introduced in the future:
          </p>
          <ul>
            <li><strong>skill-wanderer.com</strong> — Main website and landing pages</li>
            <li><strong>dojo.skill-wanderer.com</strong> — Learning platform (The Dojo)</li>
            <li><strong>wandersings.skill-wanderer.com</strong> — Blog and community writings (Wandersings)</li>
            <li>Any other current or future subdomains under skill-wanderer.com</li>
          </ul>
          <p>
            Each subdomain may use different backend technologies, frameworks, and third-party services to power its features. For example, one subdomain may use a self-hosted identity provider while another may use a cloud-based service. Regardless of the underlying technology, our cookie and storage principles remain the same across the entire platform: <strong>essential use only</strong>.
          </p>
        </div>

        <!-- Our Approach -->
        <div class="policy-section essential-highlight">
          <h2>Our Cookie Approach: Essential Only — Every Subdomain</h2>
          <p>
            Across all Skill-Wanderer properties — present and future — we keep things simple and privacy-respecting. <strong>We only use essential cookies and browser storage</strong>: the minimum necessary to make our services function correctly. This principle applies uniformly to every subdomain, regardless of which backend technology or third-party service powers it.
          </p>
          <p>
            We do not use tracking cookies, advertising cookies, analytics cookies, or any other non-essential cookies or storage mechanisms on any part of our platform. If a subdomain requires authentication, commenting, learning progress tracking, or any other interactive feature, only the storage strictly needed for that feature is used.
          </p>
          <div class="essential-badge">
            <span class="badge-icon">&#x2713;</span>
            <span>100% Essential Cookies &amp; Storage Only — No tracking, no advertising, no profiling. Across every subdomain.</span>
          </div>
        </div>

        <!-- What We Use -->
        <div class="policy-section">
          <h2>Cookies and Storage We Use</h2>

          <h3>Essential / Strictly Necessary Cookies and Storage</h3>
          <p>These cookies and storage entries are required for the services to function and cannot be switched off in our systems. They are set only in response to actions you take, such as logging in, acknowledging a notice, submitting a form, or storing a preference.</p>

          <h4 style="font-size: 1.1rem; color: var(--light-text); margin: 20px 0 10px 0; font-weight: 500;">Main Website (skill-wanderer.com)</h4>
          <div class="cookie-table-wrapper">
            <table class="cookie-table">
              <thead>
                <tr>
                  <th>Cookie / Storage Key</th>
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
            The main site currently uses Firebase for contact form submissions. Firebase may use browser storage (IndexedDB or localStorage) to manage form delivery. No persistent tracking data is stored.
          </p>

          <h4 style="font-size: 1.1rem; color: var(--light-text); margin: 20px 0 10px 0; font-weight: 500;">The Dojo (dojo.skill-wanderer.com) — Learning Platform</h4>
          <p>The Dojo uses <strong>Keycloak</strong> (self-hosted) as its identity and access management service for sign-in and learning management. Keycloak sets essential session cookies to keep you logged in and to secure your account. These cookies are strictly necessary — without them, authentication and course access cannot function.</p>
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
                  <td><code>KEYCLOAK_SESSION</code></td>
                  <td>Maintains your authenticated session on the Dojo learning platform.</td>
                  <td>Session / configurable</td>
                </tr>
                <tr>
                  <td><code>KEYCLOAK_IDENTITY</code></td>
                  <td>Stores your identity token to keep you signed in across pages.</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td><code>AUTH_SESSION_ID</code></td>
                  <td>Tracks the active authentication session during the login flow.</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td><code>KC_RESTART</code></td>
                  <td>Allows Keycloak to resume an interrupted authentication flow.</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="note">
            Note: Keycloak cookie names may vary slightly depending on the realm configuration. Only cookies strictly required for authentication are set. Keycloak is self-hosted and we do not share authentication data with third parties.
          </p>
          <p>
            The Dojo may also use additional browser storage (such as localStorage or sessionStorage) for essential learning features — for example, saving your course progress or preferences locally. This data remains on your device and is never used for tracking.
          </p>

          <h4 style="font-size: 1.1rem; color: var(--light-text); margin: 20px 0 10px 0; font-weight: 500;">Wandersings (wandersings.skill-wanderer.com) — Blog &amp; Community</h4>
          <p>Wandersings allows readers to engage with content through features such as commenting. It may use <strong>Firebase</strong> services to store and serve that content and to handle authentication. Firebase SDK typically uses browser <code>IndexedDB</code> and <code>localStorage</code> for token persistence rather than traditional cookies.</p>
          <div class="cookie-table-wrapper">
            <table class="cookie-table">
              <thead>
                <tr>
                  <th>Storage</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Firebase IndexedDB / localStorage</td>
                  <td>If you sign in to comment or interact, Firebase stores your authentication token locally so you remain signed in. This data stays on your device and is not a traditional cookie.</td>
                  <td>Until you sign out or clear browser storage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="note">
            Note: Anonymous browsing of Wandersings does not require any cookies or local storage. Storage is only used if you actively engage with interactive features such as commenting.
          </p>

          <h4 style="font-size: 1.1rem; color: var(--light-text); margin: 20px 0 10px 0; font-weight: 500;">Future and Other Subdomains</h4>
          <p>
            As our platform grows, we may introduce additional subdomains for new services — such as forums, tools, dashboards, or other educational resources. Each new subdomain may use its own backend technology stack, which could include (but is not limited to):
          </p>
          <ul>
            <li><strong>Identity providers</strong> (e.g., Keycloak, Firebase Authentication, or other self-hosted solutions) that set session cookies or store tokens in browser storage for authentication</li>
            <li><strong>Backend frameworks</strong> that set CSRF (Cross-Site Request Forgery) protection tokens as cookies to secure form submissions</li>
            <li><strong>Cloud or self-hosted databases</strong> that may require client-side tokens stored in localStorage or IndexedDB</li>
            <li><strong>Session management</strong> cookies set by web servers or application frameworks to maintain your active session</li>
          </ul>
          <p>
            Regardless of the specific technology, our commitment remains the same: <strong>only essential cookies and storage</strong> will be used. No subdomain will ever use cookies for tracking, advertising, analytics, or profiling. When a new subdomain is added, this policy will be updated to list its specific cookies and storage, but the essential-only principle is guaranteed across the entire platform.
          </p>
        </div>

        <!-- Common Essential Storage Patterns -->
        <div class="policy-section">
          <h2>Common Essential Storage Patterns Across Subdomains</h2>
          <p>
            Because our subdomains use different technologies, you may encounter the following types of essential storage across the platform. All of these are strictly functional:
          </p>
          <div class="cookie-table-wrapper">
            <table class="cookie-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Session Cookies</strong></td>
                  <td>Maintain your login state and authenticated session while you use a service. Deleted when you close your browser unless a "remember me" option is used.</td>
                  <td>Keycloak session cookies, framework session IDs</td>
                </tr>
                <tr>
                  <td><strong>CSRF Tokens</strong></td>
                  <td>Protect against cross-site request forgery attacks when you submit forms. These are a security measure, not tracking.</td>
                  <td>CSRF cookies set by backend frameworks</td>
                </tr>
                <tr>
                  <td><strong>Authentication Tokens</strong></td>
                  <td>Store your identity or access tokens so you remain signed in. May be stored as cookies, in localStorage, or in IndexedDB depending on the service.</td>
                  <td>Firebase auth tokens, Keycloak identity cookies, JWT tokens</td>
                </tr>
                <tr>
                  <td><strong>User Preferences</strong></td>
                  <td>Remember choices you have explicitly made, such as dismissing a banner, selecting a theme, or choosing a language.</td>
                  <td>Cookie banner dismissal, UI preferences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- What We Don't Use -->
        <div class="policy-section">
          <h2>What We Do Not Use — On Any Subdomain, Ever</h2>
          <p>The following types of cookies and storage are <strong>never</strong> used on any Skill-Wanderer property, regardless of which backend technology powers the subdomain:</p>
          <ul>
            <li><strong>Analytics Cookies:</strong> We do not use Google Analytics, Hotjar, Mixpanel, or any other analytics service that tracks your behaviour across our properties.</li>
            <li><strong>Advertising Cookies:</strong> We do not run ads and do not use any advertising, retargeting, or remarketing cookies on any subdomain.</li>
            <li><strong>Social Media Tracking Cookies:</strong> We do not embed social media widgets or pixels that track you across the web.</li>
            <li><strong>Personalisation / Profiling Cookies:</strong> We do not build profiles about you, track browsing patterns, or personalise content based on tracked behaviour.</li>
            <li><strong>Cross-Subdomain Tracking:</strong> We do not use cookies or any other mechanism to track your activity across our different subdomains. Your session on dojo.skill-wanderer.com is entirely separate from your activity on wandersings.skill-wanderer.com.</li>
            <li><strong>Third-Party Marketing Scripts:</strong> We do not load any third-party marketing, tracking, or data-collection scripts on any subdomain.</li>
          </ul>
        </div>

        <!-- YouTube No-Cookie Embeds -->
        <div class="policy-section">
          <h2>Embedded Video Content</h2>
          <p>
            Some pages across our subdomains may include embedded videos from YouTube. To protect your privacy, we use the <strong>YouTube Privacy-Enhanced Mode</strong> (<code>youtube-nocookie.com</code>) for all video embeds.
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
          <h2>Third-Party Services by Subdomain</h2>
          <p>Different parts of our platform rely on different backend services. Each is chosen for its functionality and privacy commitments. Here is a summary of the current services in use:</p>
          <ul>
            <li><strong>Main site (skill-wanderer.com):</strong> Built with Nuxt.js. Firebase is used for contact form submissions. These use browser storage essential to form delivery only.</li>
            <li><strong>The Dojo (dojo.skill-wanderer.com):</strong> Uses Keycloak (self-hosted) for identity and access management, and for managing the learning experience. No authentication data is shared with third-party advertising or analytics services.</li>
            <li><strong>Wandersings (wandersings.skill-wanderer.com):</strong> May use Firebase for authentication, storing comments, and community content. Anonymous reading does not involve any third-party services.</li>
          </ul>
          <p>
            As our platform evolves, individual subdomains may adopt, replace, or remove third-party services. Some subdomains may use Firebase, others may not. Some may use Keycloak, others may use a different identity solution. The specific services are an implementation detail — our privacy commitment is not:
          </p>
          <ul>
            <li>We will only integrate services that are necessary for platform functionality</li>
            <li>We will never integrate advertising networks, data brokers, or behavioural tracking services</li>
            <li>Any material changes to the services used will be reflected in this policy with an updated date</li>
          </ul>
        </div>

        <!-- Your Control -->
        <div class="policy-section">
          <h2>Your Control Over Cookies and Storage</h2>
          <p>
            Because we only use essential cookies and storage, there is nothing to opt out of on our end. However, you always have control through your browser settings:
          </p>
          <ul>
            <li>You can view, manage, and delete cookies through your browser's settings or developer tools.</li>
            <li>You can clear your localStorage, sessionStorage, and IndexedDB at any time through your browser's developer tools, which will reset preferences and sign you out of any services.</li>
            <li>Blocking essential cookies may affect how our services function — for example, you may not be able to sign in to the Dojo or post comments on Wandersings.</li>
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
            We may update this Cookie Policy from time to time — for example, when we add a new subdomain, adopt a new backend service, or change how an existing service stores data. Any changes will be posted on this page with an updated "Last updated" date. Our essential-only approach to cookies will not change, but the specific list of cookies and storage used may be updated as the platform evolves.
          </p>
        </div>

        <!-- Contact -->
        <div class="policy-section">
          <h2>Contact Us</h2>
          <p>If you have any questions about our use of cookies or browser storage on any Skill-Wanderer subdomain, please reach out:</p>
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
