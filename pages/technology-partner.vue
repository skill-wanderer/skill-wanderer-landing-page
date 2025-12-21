<template>
  <div />
</template>

<script setup lang="ts">
await navigateTo('/partnerships/become-a-partner', { redirectCode: 301 })
</script>

<style scoped>

.achievement-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.achievement-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.achievement-card h4 {
  color: var(--primary-orange);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.achievement-card p {
  opacity: 0.85;
  line-height: 1.6;
  font-size: 0.95rem;
}

.feature-card {
  background: var(--darker-bg);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.feature-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.feature-card h4 {
  color: var(--primary-orange);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.feature-card p {
  opacity: 0.85;
  line-height: 1.6;
  font-size: 0.95rem;
}

.partner-values {
  background: var(--darker-bg);
  border-radius: 15px;
  padding: 35px;
  margin-bottom: 40px;
}

.partner-values h4 {
  color: var(--primary-orange);
  font-size: 1.4rem;
  margin-bottom: 25px;
  text-align: center;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: var(--card-bg);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.value-item:hover {
  background: var(--card-hover);
  transform: translateX(5px);
}

.value-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.value-item span:last-child {
  font-size: 0.95rem;
  opacity: 0.9;
}

.partner-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  border-top: 2px solid rgba(255, 107, 53, 0.1);
}

.service-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.3);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
}

.service-card h3 {
  color: var(--primary-orange);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.service-card p {
  opacity: 0.9;
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.tech-tag {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-orange);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 107, 53, 0.2);
}

/* Experience Section */
.experience {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.experience-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.journey-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.stat-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.stat-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card:hover {
  background: var(--card-hover);
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-orange);
  line-height: 1;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
}

.stat-description {
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.4;
}

/* Coming Soon CTA */
.coming-soon-cta {
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 30px;
}

.partnership-value {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}

.value-highlight {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-orange);
  margin: 0;
  opacity: 1;
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
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-orange), var(--deep-orange));
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--deep-orange), var(--primary-orange));
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
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

/* MindyCore Theme Buttons */
.btn-mindycore-primary {
  background: #fbbf24; /* Yellow */
  color: #1e3a8a; /* Dark blue text */
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 1rem;
}

.btn-mindycore-primary:hover {
  background: #f59e0b; /* Darker yellow */
  color: #1e3a8a;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
}

.btn-mindycore-secondary {
  background: transparent;
  color: #fbbf24; /* Yellow */
  border: 2px solid #fbbf24;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 1rem;
}

.btn-mindycore-secondary:hover {
  background: #fbbf24;
  color: #1e3a8a;
  transform: translateY(-2px);
}

/* Partnership Model Section */
.partnership-model {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.model-content {
  max-width: 1000px;
  margin: 0 auto;
}

.model-intro {
  text-align: center;
  margin-bottom: 50px;
}

.model-statement {
  font-size: 1.2rem;
  color: var(--light-text);
  margin-bottom: 15px;
  font-weight: 500;
}

.model-description {
  font-size: 1.1rem;
  color: var(--light-text);
  opacity: 0.9;
  margin-top: 25px;
  line-height: 1.8;
}

.model-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.model-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.model-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-orange);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.1);
}

.model-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.model-card h4 {
  color: var(--primary-orange);
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.model-card p {
  color: var(--light-text);
  opacity: 0.9;
  line-height: 1.7;
  font-size: 0.95rem;
}

.model-alignment {
  background: rgba(255, 107, 53, 0.05);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
}

.model-alignment h3 {
  color: var(--primary-orange);
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
}

.alignment-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.alignment-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}

.alignment-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.alignment-item p {
  color: var(--light-text);
  line-height: 1.6;
  margin: 0;
}

.alignment-item strong {
  color: var(--primary-orange);
}

.model-benefit {
  text-align: center;
  margin-bottom: 40px;
}

.model-benefit p {
  font-size: 1.1rem;
  color: var(--light-text);
  opacity: 0.9;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.transparency-note {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05));
  border-left: 4px solid var(--primary-orange);
  border-radius: 0 12px 12px 0;
  padding: 25px 30px;
  text-align: center;
}

.transparency-note p {
  color: var(--light-text);
  font-size: 1rem;
  font-style: italic;
  margin: 0;
  opacity: 0.95;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
  
  .karma-cycle {
    flex-direction: column;
    gap: 20px;
  }
  
  .cycle-arrow {
    transform: rotate(90deg);
  }
  
  .partner-spotlight {
    padding: 30px 20px;
  }

  .partner-logo-section {
    margin-bottom: 30px;
  }

  .mindycore-logo {
    max-width: 200px;
  }

  .logo-text {
    font-size: 2rem;
  }

  .partner-tagline h3 {
    font-size: 1.2rem;
  }

  .partner-features,
  .partner-achievements {
    grid-template-columns: 1fr;
  }

  .partner-features {
    max-width: 100%;
  }

  .impact-statement {
    padding: 30px 20px;
  }

  .impact-statement h3 {
    font-size: 1.4rem;
  }

  .impact-statement p {
    font-size: 1rem;
  }

  .value-highlight {
    font-size: 1.1rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .partner-cta {
    flex-direction: column;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .journey-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }

  .model-details {
    grid-template-columns: 1fr;
  }

  .alignment-points {
    grid-template-columns: 1fr;
  }

  .model-alignment {
    padding: 25px 20px;
  }

  .model-statement {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .journey-stats {
    grid-template-columns: 1fr;
  }
  
  .hero {
    padding: 120px 15px 60px;
  }

  .partner-description p {
    font-size: 1rem;
  }

  .model-card {
    padding: 20px;
  }

  .transparency-note {
    padding: 20px;
  }
}
</style>
