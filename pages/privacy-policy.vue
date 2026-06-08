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
            This Privacy Policy applies to <strong>all</strong> properties operated by Skill-Wanderer under the <strong>skill-wanderer.com</strong> domain, including every subdomain, whether listed here or introduced in the future:
          </p>
          <ul>
            <li><strong>skill-wanderer.com</strong> — Main website and landing pages</li>
            <li><strong>dojo.skill-wanderer.com</strong> — The Dojo learning platform (authentication and learning management powered by Keycloak)</li>
            <li><strong>wandersings.skill-wanderer.com</strong> — Wandersings blog and community space (may use Firebase for authentication and content)</li>
            <li>Any other current or future subdomains under skill-wanderer.com</li>
          </ul>
          <p>
            Each subdomain may use different backend technologies, frameworks, and third-party services to power its features. For example, one subdomain may use a self-hosted identity provider (like Keycloak) while another may use a cloud-based service (like Firebase). Regardless of the technology, this single Privacy Policy governs how your data is handled across the entire platform.
          </p>
        </div>

        <!-- Information We Collect -->
        <div class="policy-section">
          <h2>Information We Collect</h2>

          <h3>Information You Provide Directly</h3>
          <p>Depending on which subdomains and features you use, we may collect the following types of information that you voluntarily provide:</p>
          <ul>
            <li><strong>Contact Information:</strong> When you contact us through our contact form or subscribe to our newsletter on skill-wanderer.com, we collect your name and email address.</li>
            <li><strong>Account Information (The Dojo):</strong> When you register for an account on dojo.skill-wanderer.com, we collect your name, email address, and any profile information you provide. This data is managed by our self-hosted Keycloak identity service.</li>
            <li><strong>Learning Data (The Dojo):</strong> As you use the Dojo learning platform, we may collect data related to your course enrolments, learning progress, assessment results, and certificates earned. This data is used to provide and improve your learning experience.</li>
            <li><strong>Comments and Community Content (Wandersings):</strong> If you choose to comment or engage on wandersings.skill-wanderer.com, we collect the content you submit along with any identity information associated with your account (e.g., display name, email used to authenticate).</li>
            <li><strong>Authentication Data (Any Subdomain):</strong> When you create an account or sign in on any subdomain, we collect the credentials and profile data necessary for authentication. The specific data depends on the identity provider used by that subdomain (e.g., Keycloak, Firebase Authentication, or other services).</li>
            <li><strong>Voluntary Information:</strong> Any additional information you choose to share through forms, surveys, feedback, or direct communication on any part of our platform.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>When you use any of our services, some information may be collected automatically by the underlying technology:</p>
          <ul>
            <li><strong>Device Information:</strong> Basic technical information about your device and browser (such as browser type, operating system, and screen resolution) to ensure our services display and function properly.</li>
            <li><strong>Authentication Logs:</strong> Identity providers used across our subdomains (such as Keycloak on the Dojo or Firebase on Wandersings) may log login events, session activity, and authentication attempts as part of normal security operations.</li>
            <li><strong>Server Logs:</strong> Our web servers may record standard access logs (such as IP address, requested URL, timestamp, and HTTP status code) for security monitoring and troubleshooting. These logs are not used for tracking or profiling.</li>
          </ul>

          <h3>Information We Do Not Collect</h3>
          <p>We want to be clear about what we do <strong>not</strong> do:</p>
          <ul>
            <li>We do not use analytics services (such as Google Analytics) that track your browsing behaviour</li>
            <li>We do not collect data for advertising, retargeting, or behavioural profiling on any subdomain</li>
            <li>We do not track your activity across our different subdomains</li>
            <li>We do not purchase or obtain personal data from third-party data brokers</li>
          </ul>
        </div>

        <!-- How We Use Your Information -->
        <div class="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes, depending on which services you use:</p>
          <ul>
            <li>To respond to your inquiries and provide support</li>
            <li>To send you updates about our educational platform and services (only if you have subscribed)</li>
            <li>To authenticate your identity and maintain your account on whichever subdomain you register for</li>
            <li>To provide and manage the learning experience on the Dojo, including tracking course progress, issuing certificates, and personalising your learning dashboard</li>
            <li>To enable community features such as comments and discussions on Wandersings</li>
            <li>To secure our services, detect abuse, and prevent unauthorised access across all subdomains</li>
            <li>To improve our platform and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h3>Legal Basis for Processing</h3>
          <p>We process your personal information based on the following legal grounds:</p>
          <ul>
            <li><strong>Contract:</strong> Processing necessary to provide you with the services you have signed up for (e.g., maintaining your Dojo account, delivering course content).</li>
            <li><strong>Consent:</strong> Processing based on your explicit consent (e.g., subscribing to our newsletter, posting comments).</li>
            <li><strong>Legitimate Interest:</strong> Processing necessary for our legitimate interests, such as securing our platform, improving our services, and maintaining server logs for troubleshooting — provided these interests do not override your rights.</li>
            <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws and regulations.</li>
          </ul>
        </div>

        <!-- Data Storage and Security -->
        <div class="policy-section">
          <h2>Data Storage and Security</h2>
          <p>
            We take the security of your personal information seriously. We use industry-standard security measures to protect your data from unauthorised access, alteration, disclosure, or destruction. Different subdomains use different storage solutions, each selected for security and fitness for purpose:
          </p>
          <ul>
            <li><strong>Main site (skill-wanderer.com):</strong> Contact form submissions are stored securely using Firebase services.</li>
            <li><strong>The Dojo (dojo.skill-wanderer.com):</strong> Account, authentication, and learning data is managed by our self-hosted Keycloak instance and associated databases. Your credentials are never shared with third-party identity providers. Learning progress and course data is stored in our own databases.</li>
            <li><strong>Wandersings (wandersings.skill-wanderer.com):</strong> Community content such as comments may be stored using Firebase services. If Firebase Authentication is used, your authentication tokens are managed by Firebase.</li>
            <li><strong>Future subdomains:</strong> New services may use Firebase, self-hosted databases, or other storage solutions as appropriate. Regardless of the storage technology, the same security standards and privacy principles apply.</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </div>

        <!-- Data Retention -->
        <div class="policy-section">
          <h2>Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected:
          </p>
          <ul>
            <li><strong>Account data:</strong> Retained for as long as your account is active. When you delete your account (on the Dojo, Wandersings, or any subdomain), your personal data is removed within a reasonable timeframe, subject to any legal retention requirements.</li>
            <li><strong>Contact form submissions:</strong> Retained for as long as necessary to respond to and resolve your inquiry.</li>
            <li><strong>Community content (comments):</strong> Retained for as long as the content remains published. You may request removal at any time.</li>
            <li><strong>Learning data (The Dojo):</strong> Course progress, assessment results, and certificates are retained for as long as your account is active, so you can return and continue learning. Upon account deletion, this data is removed.</li>
            <li><strong>Server and authentication logs:</strong> Retained for a limited period for security and troubleshooting purposes, then automatically purged.</li>
          </ul>
        </div>

        <!-- Sharing Your Information -->
        <div class="policy-section">
          <h2>Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following limited circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform. These currently include Firebase (for data storage and potentially authentication) and may include other services as subdomains evolve. All providers are contractually or structurally bound to protect your data and may only use it to provide services to us.</li>
            <li><strong>Self-Hosted Services:</strong> Where we use self-hosted solutions (such as Keycloak), your data does not leave our infrastructure and is not shared with the software vendor.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information when required by law or to protect our rights, property, or safety, or that of others.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</li>
          </ul>
          <p>
            We never share your personal information with advertising networks, data brokers, or analytics companies. This applies to all subdomains.
          </p>
        </div>

        <!-- Your Rights -->
        <div class="policy-section">
          <h2>Your Rights</h2>
          <p>You have the following rights regarding your personal information across all Skill-Wanderer properties, regardless of which subdomain holds your data:</p>
          <ul>
            <li><strong>Access:</strong> You can request access to the personal information we hold about you, including data stored on any subdomain.</li>
            <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions. This includes account deletion from the Dojo (Keycloak), removal of comments from Wandersings (Firebase), and deletion of contact form data from the main site.</li>
            <li><strong>Data Portability:</strong> Where technically feasible, you can request a copy of your personal data in a structured, commonly used format.</li>
            <li><strong>Account Management:</strong> On subdomains with user accounts (such as the Dojo), you can manage your profile directly through the platform settings powered by the relevant identity provider.</li>
            <li><strong>Withdraw Consent:</strong> Where processing is based on consent, you can withdraw your consent at any time without affecting the lawfulness of prior processing.</li>
            <li><strong>Unsubscribe:</strong> You can unsubscribe from our communications at any time by clicking the unsubscribe link in our emails or contacting us directly.</li>
          </ul>
          <p>To exercise any of these rights for any subdomain, please <NuxtLink to="/contact" class="contact-link">contact us through our contact form</NuxtLink>.</p>
        </div>

        <!-- Cookies and Tracking -->
        <div class="policy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Across all Skill-Wanderer properties, we use <strong>essential cookies and browser storage only</strong> — the minimum required for our services to function correctly. We do not use tracking cookies, advertising cookies, analytics cookies, or any other non-essential cookies or storage on any subdomain.
          </p>
          <p>
            The specific cookies and storage used vary by subdomain, depending on the backend technology in use:
          </p>
          <ul>
            <li>On the <strong>Dojo</strong> (dojo.skill-wanderer.com), Keycloak sets essential session cookies to maintain your authenticated state. These are strictly necessary for login and course access.</li>
            <li>On <strong>Wandersings</strong> (wandersings.skill-wanderer.com), Firebase may use browser localStorage or IndexedDB to persist authentication tokens if you use interactive features. Anonymous reading does not involve any storage.</li>
            <li>On the <strong>main site</strong>, a localStorage entry records your cookie banner acknowledgement.</li>
            <li>On <strong>future subdomains</strong>, the specific cookies and storage will depend on the technologies used, but will always be limited to essential purposes only.</li>
          </ul>
          <p>
            For embedded video content, we use YouTube's Privacy-Enhanced Mode (<code>youtube-nocookie.com</code>) to minimise third-party cookie impact. YouTube will not set cookies unless you actively play a video.
          </p>
          <p>
            For full details on the specific cookies and storage used per subdomain, please read our <NuxtLink to="/cookie-policy" class="contact-link">Cookie Policy</NuxtLink>.
          </p>
        </div>

        <!-- Third-Party Services -->
        <div class="policy-section">
          <h2>Third-Party Services</h2>
          <p>
            Our platform may contain links to third-party websites or services. This Privacy Policy does not apply to those external sites. We encourage you to review the privacy policies of any third-party services you visit.
          </p>
          <p>
            The third-party services we integrate are limited to those essential for platform operation. Different subdomains may use different services:
          </p>
          <ul>
            <li><strong>Keycloak (self-hosted):</strong> Identity and access management for the Dojo. Because it is self-hosted, no data is shared with Keycloak's creators (Red Hat) — this instance is fully operated by us on our own infrastructure.</li>
            <li><strong>Firebase (Google):</strong> Used for data storage on the main site and potentially on Wandersings for authentication and content storage. Firebase data processing is subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> and <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Data Processing terms</a>.</li>
            <li><strong>YouTube (Privacy-Enhanced Mode):</strong> Used for embedded video content across any subdomain. Cookies are only set if you actively play a video.</li>
          </ul>
          <p>
            As our platform evolves, individual subdomains may adopt new services or replace existing ones. Some subdomains may use Firebase, others may not. Some may use Keycloak, others may use a different identity solution. We will only integrate services necessary for functionality and will never integrate advertising, tracking, or data-brokerage services. Material changes will be reflected in this policy.
          </p>
        </div>

        <!-- International Data -->
        <div class="policy-section">
          <h2>International Data Considerations</h2>
          <p>
            Skill-Wanderer serves a global audience. Depending on which services and subdomains you use, your data may be processed in different locations:
          </p>
          <ul>
            <li><strong>Self-hosted services</strong> (such as Keycloak on the Dojo) process your data on our own servers in the region where they are hosted.</li>
            <li><strong>Cloud services</strong> (such as Firebase) may process data in the regions specified by the service provider's infrastructure. Google Firebase processes data in accordance with its <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">data processing terms</a>.</li>
          </ul>
          <p>
            By using our services, you acknowledge that your information may be transferred to and processed in locations outside your country of residence. We take steps to ensure that your data is treated securely and in accordance with this Privacy Policy regardless of where it is processed.
          </p>
        </div>

        <!-- Children's Privacy -->
        <div class="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13 on any subdomain. If you are a parent or guardian and believe your child has provided us with personal information (including by creating an account on the Dojo or posting comments on Wandersings), please contact us, and we will promptly delete such information.
          </p>
        </div>

        <!-- Changes to This Policy -->
        <div class="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time — for example, when we add new subdomains, adopt new backend services, or expand the features available on existing services. Any changes will be posted on this page with an updated "Last updated" date. For material changes that significantly affect how your data is handled, we will make reasonable efforts to notify you (such as via a banner on the affected subdomain). We encourage you to review this policy periodically.
          </p>
        </div>

        <!-- Contact Us -->
        <div class="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, our privacy practices, or how your data is handled on any Skill-Wanderer subdomain, please reach out to us:
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
