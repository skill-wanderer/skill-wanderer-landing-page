<template>
  <div
    v-if="imageUrl && visible"
    class="image-slot"
    :style="{ aspectRatio: spec?.ratio }"
  >
    <img
      :src="imageUrl"
      :alt="spec?.alt ?? ''"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      decoding="async"
    />
  </div>
  <div
    v-else-if="isDev && !imageUrl"
    class="image-slot image-slot--empty"
    :style="{ aspectRatio: spec?.ratio ?? '16/9' }"
  >
    <div class="image-slot__inner">
      <template v-if="spec">
        <span class="image-slot__label">AI image slot · {{ spec.ratio.replace('/', ':') }} · {{ IMAGE_SLOT_SIZES[spec.ratio] }}</span>
        <code class="image-slot__path">assets/images/{{ name }}.webp</code>
        <p class="image-slot__prompt">{{ spec.prompt }}</p>
        <button type="button" class="image-slot__copy" @click.prevent.stop="copyPrompt">
          {{ copied ? 'Copied ✓' : 'Copy full prompt' }}
        </button>
        <span v-if="group" class="image-slot__note">
          Goes live once all {{ groupNames.length }} images in "{{ group }}" exist
        </span>
      </template>
      <template v-else>
        <span class="image-slot__label">Unknown image slot</span>
        <code class="image-slot__path">{{ name }}</code>
        <p class="image-slot__prompt">Add it to data/image-slots.ts</p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
// Every image saved under assets/images, keyed by slot name: "home/hero" -> built URL.
const files = import.meta.glob<string>('../assets/images/**/*.{webp,png,jpg,jpeg,avif}', {
  eager: true,
  import: 'default',
})

const imageUrls = new Map(
  Object.entries(files).map(([path, url]) => [
    path.replace('../assets/images/', '').replace(/\.\w+$/, ''),
    url,
  ]),
)
</script>

<script setup lang="ts">
import {
  IMAGE_SLOT_SIZES,
  fullImagePrompt,
  imageSlotGroups,
  imageSlots,
  type ImageSlotGroup,
} from '~/data/image-slots'

const props = defineProps<{
  /** Slot name from data/image-slots.ts, e.g. "home/hero". */
  name: string
  /** Hold this slot back in production until every image in the group exists. */
  group?: ImageSlotGroup
  /** Load eagerly, for images near the top of the page. */
  priority?: boolean
}>()

// Empty slots only render a placeholder in dev; production builds render nothing.
// (Keep template comments out of the v-if chain: in dev they turn the root into a
// fragment, and the parent's class would stop reaching the slot.)
const isDev = import.meta.dev
const spec = computed(() => imageSlots[props.name])
const imageUrl = computed(() => imageUrls.get(props.name))
const groupNames = computed(() => (props.group ? imageSlotGroups[props.group] : []))
const visible = computed(() => isDev || groupNames.value.every(name => imageUrls.has(name)))

const copied = ref(false)

const copyPrompt = async () => {
  if (!spec.value) return
  const text = fullImagePrompt(spec.value)
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 1500)
  } catch {
    // The clipboard API needs a secure context, e.g. when the dev server is opened over a LAN IP.
    window.prompt('Copy this prompt:', text)
  }
}
</script>

<style scoped>
.image-slot {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  background: var(--darker-bg);
}

.image-slot img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-slot--empty {
  container-type: inline-size;
  border: 2px dashed rgba(255, 107, 53, 0.45);
  background:
    repeating-linear-gradient(135deg, rgba(255, 107, 53, 0.06) 0 12px, transparent 12px 24px),
    var(--darker-bg);
  color: var(--light-text);
  font-style: normal;
  text-align: center;
}

.image-slot__inner {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 20px;
}

.image-slot__label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-orange);
}

.image-slot__path {
  max-width: 100%;
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.78rem;
  color: var(--accent-yellow);
  overflow-wrap: anywhere;
}

.image-slot__prompt {
  margin: 0;
  max-width: 62ch;
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.75;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.image-slot__copy {
  padding: 6px 14px;
  border: 1px solid rgba(255, 107, 53, 0.5);
  border-radius: 50px;
  background: rgba(255, 107, 53, 0.12);
  color: var(--light-text);
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.image-slot__copy:hover {
  background: rgba(255, 107, 53, 0.25);
}

.image-slot__note {
  font-size: 0.72rem;
  opacity: 0.6;
}

/* Small slots, such as card covers, keep only the essentials. */
@container (max-width: 460px) {
  .image-slot__prompt,
  .image-slot__note {
    display: none;
  }
}
</style>
