<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Privacy Policy</h1>
        <p class="hero-subtitle">How we protect and handle your information</p>
        <p class="last-updated">Last updated: March 30, 2026</p>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="privacy-content">
      <div class="content-container">
        <!-- Introduction -->
        <div class="policy-section">
          <h2>Our Commitment to Your Privacy</h2>
          <p>
            At Skill-Wanderer, we are committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information. This Privacy Policy explains our practices regarding the data we collect when you use any Skill-Wanderer service.
          </p>
          <h3>Scope of This Policy</h3>
          <p>
            This Privacy Policy applies to all properties operated by Skill-Wanderer under the <strong>skill-wanderer.com</strong> domain, including:
          </p>
          <ul>
            <li><strong>skill-wanderer.com</strong> — Main website and landing pages</li>
            <li><strong>dojo.skill-wanderer.com</strong> — The Dojo learning platform (authentication managed by Keycloak)</li>
            <li><strong>wandersings.skill-wanderer.com</strong> — Wandersings blog and community space (may use Firebase)</li>
            <li>Any other subdomains we may introduce in the future</li>
          </ul>
          <p>
            Different subdomains may use different backend services to power their features. Where relevant, this policy describes data practices specific to each part of the platform.
          </p>
        </div>

        <!-- Information We Collect -->
        <div class="policy-section">
          <h2>Information We Collect</h2>

          <h3>Information You Provide Directly</h3>
          <ul>
            <li><strong>Contact Information:</strong> When you contact us through our contact form or subscribe to our newsletter, we collect your name and email address.</li>
            <li><strong>Account Information (The Dojo):</strong> When you register for an account on dojo.skill-wanderer.com, we collect your name, email address, and any profile information you provide. This data is managed by our self-hosted Keycloak identity service.</li>
            <li><strong>Comments and Community Content (Wandersings):</strong> If you choose to comment or engage on wandersings.skill-wanderer.com, we collect the content you submit along with any identity information associated with your account.</li>
            <li><strong>Voluntary Information:</strong> Any additional information you choose to share through forms, surveys, or direct communication.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Device Information:</strong> Basic technical information about your device and browser to ensure our services function properly.</li>
            <li><strong>Authentication Logs (The Dojo):</strong> Keycloak, our identity provider for the Dojo, may log login events, session activity, and authentication attempts as part of normal security operations.</li>
          </ul>
        </div>

        <!-- How We Use Your Information -->
        <div class="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you updates about our educational platform and services (only if you've subscribed)</li>
            <li>To authenticate your identity and maintain your account on the Dojo learning platform</li>
            <li>To enable community features such as comments on Wandersings</li>
            <li>To improve our platform and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <!-- Data Storage and Security -->
        <div class="policy-section">
          <h2>Data Storage and Security</h2>
          <p>
            We take the security of your personal information seriously. We use industry-standard security measures to protect your data from unauthorised access, alteration, disclosure, or destruction.
          </p>
          <ul>
            <li><strong>Main site:</strong> Contact form submissions are stored securely using Firebase services.</li>
            <li><strong>The Dojo (dojo.skill-wanderer.com):</strong> Account and authentication data is managed by our self-hosted Keycloak instance. Your credentials are never shared with third-party identity providers.</li>
            <li><strong>Wandersings (wandersings.skill-wanderer.com):</strong> Community content such as comments may be stored using Firebase services, which comply with international security standards.</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </div>

        <!-- Sharing Your Information -->
        <div class="policy-section">
          <h2>Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following limited circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers (such as Firebase for data storage) who assist us in operating our platform. These providers are contractually bound to protect your data.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information when required by law or to protect our rights, property, or safety, or that of others.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          </ul>
          <p>
            We never share your personal information with advertising networks, data brokers, or analytics companies.
          </p>
        </div>

        <!-- Your Rights -->
        <div class="policy-section">
          <h2>Your Rights</h2>
          <p>You have the following rights regarding your personal information across all Skill-Wanderer properties:</p>
          <ul>
            <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions. This includes account deletion from the Dojo and removal of comments from Wandersings.</li>
            <li><strong>Account Management:</strong> On the Dojo, you can manage your account profile directly through the platform settings powered by Keycloak.</li>
            <li><strong>Unsubscribe:</strong> You can unsubscribe from our communications at any time by clicking the unsubscribe link in our emails or contacting us directly.</li>
          </ul>
          <p>To exercise any of these rights, please <NuxtLink to="/contact" class="contact-link">contact us through our contact form</NuxtLink>.</p>
        </div>

        <!-- Cookies and Tracking -->
        <div class="policy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Across all Skill-Wanderer properties, we use <strong>essential cookies only</strong> — the minimum required for our services to function correctly. We do not use tracking cookies, advertising cookies, analytics cookies, or any other non-essential cookies on any subdomain.
          </p>
          <p>
            On the Dojo (dojo.skill-wanderer.com), Keycloak sets essential session cookies to maintain your authenticated state. These are strictly necessary for login functionality.
          </p>
          <p>
            On Wandersings (wandersings.skill-wanderer.com), Firebase may use browser localStorage or IndexedDB to persist authentication tokens if you use interactive features. Anonymous reading does not involve any storage.
          </p>
          <p>
            For embedded video content, we use YouTube's Privacy-Enhanced Mode (<code>youtube-nocookie.com</code>) to minimise third-party cookie impact. YouTube will not set cookies unless you actively play a video.
          </p>
          <p>
            For full details on the specific cookies we use per subdomain, please read our <NuxtLink to="/cookie-policy" class="contact-link">Cookie Policy</NuxtLink>.
          </p>
        </div>

        <!-- Third-Party Services -->
        <div class="policy-section">
          <h2>Third-Party Services</h2>
          <p>
            Our platform may contain links to third-party websites or services. This Privacy Policy does not apply to those external sites. We encourage you to review the privacy policies of any third-party services you use.
          </p>
          <p>
            The third-party services we integrate are limited to those essential for platform operation:
          </p>
          <ul>
            <li><strong>Keycloak (self-hosted):</strong> Identity and access management for the Dojo. No data is shared with Keycloak's creators (Red Hat) — this instance is operated by us.</li>
            <li><strong>Firebase (Google):</strong> Used for data storage on the main site and potentially on Wandersings. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</li>
            <li><strong>YouTube (Privacy-Enhanced Mode):</strong> Used for embedded video content. Cookies are only set if you actively play a video.</li>
          </ul>
        </div>

        <!-- Children's Privacy -->
        <div class="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
          </p>
        </div>

        <!-- Changes to This Policy -->
        <div class="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
        </div>

        <!-- Contact Us -->
        <div class="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please reach out to us:
          </p>
          <div class="contact-info">
            <p><strong>Contact Form:</strong> <NuxtLink to="/contact" class="contact-link">Use our contact form</NuxtLink> for privacy-related inquiries</p>
            <p><strong>General Contact:</strong> <a href="mailto:quan.nguyen@skill-wanderer.com">quan.nguyen@skill-wanderer.com</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO and meta management
useSEO({
  title: 'Privacy Policy | Skill-Wanderer',
  description: 'Learn how Skill-Wanderer protects and handles your personal information. Our commitment to privacy and transparency.',
  keywords: ['privacy policy', 'data protection', 'skill-wanderer privacy', 'personal information'],
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

/* Hero Section */
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

/* Content Section */
.privacy-content {
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

.policy-section code {
  background: rgba(255, 255, 255, 0.07);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9rem;
  color: #ff8a65;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 60px;
  }
  
  .privacy-content {
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
