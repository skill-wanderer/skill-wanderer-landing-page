<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Privacy Policy</h1>
        <p class="hero-subtitle">How we protect and handle your information</p>
        <p class="last-updated">Last updated: August 26, 2025</p>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="privacy-content">
      <div class="content-container">
        <!-- Introduction -->
        <div class="policy-section">
          <h2>Our Commitment to Your Privacy</h2>
          <p>
            At Skill-Wanderer, we are committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information. This Privacy Policy explains our practices regarding the data we collect when you use our website and services.
          </p>
        </div>

        <!-- Information We Collect -->
        <div class="policy-section">
          <h2>Information We Collect</h2>
          
          <h3>Information You Provide Directly</h3>
          <ul>
            <li><strong>Contact Information:</strong> When you contact us through our contact form or subscribe to our newsletter, we collect your name and email address.</li>
            <li><strong>Voluntary Information:</strong> Any additional information you choose to share with us through forms, surveys, or direct communication.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> We may collect information about how you interact with our website, including pages visited, time spent, and navigation patterns.</li>
            <li><strong>Device Information:</strong> Basic technical information about your device and browser to ensure our website functions properly.</li>
          </ul>
        </div>

        <!-- How We Use Your Information -->
        <div class="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you updates about our educational platform and services (only if you've subscribed)</li>
            <li>To improve our website and user experience</li>
            <li>To analyze usage patterns and optimize our content</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <!-- Data Storage and Security -->
        <div class="policy-section">
          <h2>Data Storage and Security</h2>
          <p>
            We take the security of your personal information seriously. We use industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Your information is stored securely using Firebase services, which comply with international security standards.
          </p>
          <p>
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </div>

        <!-- Sharing Your Information -->
        <div class="policy-section">
          <h2>Sharing Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following limited circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services to you.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information when required by law or to protect our rights, property, or safety, or that of others.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          </ul>
        </div>

        <!-- Your Rights -->
        <div class="policy-section">
          <h2>Your Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> You can request access to the personal information we have about you.</li>
            <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions.</li>
            <li><strong>Unsubscribe:</strong> You can unsubscribe from our communications at any time by clicking the unsubscribe link in our emails or contacting us directly.</li>
          </ul>
          <p>To exercise any of these rights, please <NuxtLink to="/contact" class="contact-link">contact us through our contact form</NuxtLink>.</p>
        </div>

        <!-- Cookies and Tracking -->
        <div class="policy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your experience. These technologies help us understand how you use our website and improve our services. You can control cookie settings through your browser preferences.
          </p>
        </div>

        <!-- Third-Party Services -->
        <div class="policy-section">
          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party sites. We encourage you to review the privacy policies of any third-party services you use.
          </p>
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
