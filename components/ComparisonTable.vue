<template>
  <section class="comparison-section">
    <div class="comparison-container">
      <h2 v-if="sectionTitle" class="comparison-heading">{{ sectionTitle }}</h2>
      <p v-if="sectionSubtitle" class="comparison-subtitle">{{ sectionSubtitle }}</p>

      <!-- Desktop table -->
      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th class="comparison-feature-header">{{ featureLabel }}</th>
              <th
                v-for="(col, ci) in columns"
                :key="ci"
                class="comparison-col-header"
                :class="{ 'comparison-col-header--highlight': col.highlight }"
              >
                <span v-if="col.badge" class="comparison-badge">{{ col.badge }}</span>
                <span class="comparison-col-name">{{ col.name }}</span>
                <span v-if="col.price" class="comparison-col-price">{{ col.price }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, ri) in rows" :key="ri">
              <td class="comparison-feature-cell">
                {{ row.feature }}
                <span v-if="row.tooltip" class="comparison-tooltip" :title="row.tooltip">?</span>
              </td>
              <td
                v-for="(col, ci) in columns"
                :key="ci"
                class="comparison-value-cell"
                :class="{ 'comparison-value-cell--highlight': col.highlight }"
              >
                <template v-if="typeof row.values[ci] === 'boolean'">
                  <svg v-if="row.values[ci]" class="comparison-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <svg v-else class="comparison-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </template>
                <span v-else class="comparison-text-value">{{ row.values[ci] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ComparisonColumn {
  name: string
  price?: string
  badge?: string
  highlight?: boolean
}

interface ComparisonRow {
  feature: string
  values: (boolean | string)[]
  tooltip?: string
}

interface Props {
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
  sectionTitle?: string
  sectionSubtitle?: string
  featureLabel?: string
}

withDefaults(defineProps<Props>(), {
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  featureLabel: 'Feature',
})
</script>

<style scoped>
.comparison-section {
  padding: 80px 20px;
  background: var(--darker-bg);
}

.comparison-container {
  max-width: 1000px;
  margin: 0 auto;
}

.comparison-heading {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
}

.comparison-subtitle {
  text-align: center;
  color: var(--light-text);
  font-size: 1.1rem;
  margin-bottom: 50px;
  opacity: 0.8;
}

.comparison-table-wrapper {
  overflow-x: auto;
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.15);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--card-bg);
}

.comparison-feature-header,
.comparison-col-header {
  padding: 24px 20px;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  border-bottom: 1px solid rgba(255, 107, 53, 0.15);
}

.comparison-feature-header {
  text-align: left;
  width: 35%;
  color: var(--light-text);
}

.comparison-col-header--highlight {
  background: rgba(255, 107, 53, 0.1);
  position: relative;
}

.comparison-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  color: #1a1a1a;
  margin-bottom: 8px;
}

.comparison-col-name {
  display: block;
  font-size: 1.1rem;
}

.comparison-col-price {
  display: block;
  font-size: 0.9rem;
  color: var(--primary-orange);
  margin-top: 4px;
  font-weight: 500;
}

.comparison-feature-cell,
.comparison-value-cell {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.95rem;
}

.comparison-feature-cell {
  color: var(--light-text);
  font-weight: 500;
}

.comparison-value-cell {
  text-align: center;
}

.comparison-value-cell--highlight {
  background: rgba(255, 107, 53, 0.05);
}

.comparison-check {
  color: #4CAF50;
}

.comparison-cross {
  color: rgba(255, 255, 255, 0.2);
}

.comparison-text-value {
  color: var(--light-text);
  font-size: 0.9rem;
}

.comparison-tooltip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--light-text);
  font-size: 0.7rem;
  font-weight: 700;
  margin-left: 6px;
  cursor: help;
  vertical-align: middle;
}

tbody tr:last-child .comparison-feature-cell,
tbody tr:last-child .comparison-value-cell {
  border-bottom: none;
}

@media (max-width: 768px) {
  .comparison-feature-header,
  .comparison-col-header {
    padding: 16px 12px;
    font-size: 0.85rem;
  }

  .comparison-col-name {
    font-size: 0.95rem;
  }

  .comparison-feature-cell,
  .comparison-value-cell {
    padding: 12px;
    font-size: 0.85rem;
  }
}
</style>
