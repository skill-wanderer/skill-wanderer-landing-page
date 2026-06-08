<template>
  <section class="journey">
    <div class="journey-content">
      <h2>The Wandering Saga</h2>
      <p class="journey-quote">
        Every expert was once a beginner who refused to give up. Every failure was a lesson that led to success.
      </p>
      <p class="journey-description">
        Skill-Wanderer is born from a simple belief: the best teachers are those who remember what it's like to struggle,
        to fail, and to finally breakthrough. This platform captures that journey—the wandering path of continuous learning—and
        transforms it into accessible education for all. Whether you're taking your first steps in tech or seeking to master
        advanced concepts, you'll find a home here.
      </p>
      <p class="journey-description">
        As we build this platform, we're learning too. Every line of code, every curated resource, every moment of creation
        is both a lesson for us and a future lesson we'll share with you. This is education built by learners, for learners.
      </p>
    </div>
  </section>
</template>

<style scoped>
.journey {
  padding: 100px 20px;
  background: var(--darker-bg);
}

.journey-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.journey-content h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 40px;
  color: var(--primary-orange);
}

.journey-quote {
  font-size: 1.8rem;
  font-style: italic;
  margin-bottom: 40px;
  color: var(--primary-orange);
  position: relative;
  padding: 0 40px;
}

.journey-quote::before,
.journey-quote::after {
  content: '"';
  position: absolute;
  font-size: 3rem;
  opacity: 0.3;
}

.journey-quote::before {
  left: 0;
  top: -10px;
}

.journey-quote::after {
  right: 0;
  bottom: -30px;
}

.journey-description {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.8;
}
</style>
