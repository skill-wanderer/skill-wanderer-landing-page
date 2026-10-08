<template>
  <dialog
    ref="dialog"
    class="email-chooser"
    aria-labelledby="email-chooser-title"
    @pointerdown="onPointerDown"
    @click="onDialogClick"
    @close="onClose"
  >
    <div v-if="mail" class="email-chooser-card">
      <div class="email-chooser-header">
        <h2 id="email-chooser-title">Send an email</h2>
        <button type="button" class="close-btn" aria-label="Close" @click="close">&times;</button>
      </div>

      <div v-for="field in fields" :key="field.id" class="email-field">
        <div class="field-header">
          <span class="field-label">{{ field.label }}</span>
          <button type="button" class="copy-btn" :class="{ copied: copied === field.name }" @click="copy(field)">
            {{ copied === field.name ? 'Copied' : 'Copy' }} <span class="sr-only">{{ field.name }}</span>
          </button>
        </div>
        <span :id="field.id" class="field-value">{{ field.value }}</span>
      </div>

      <p class="webmail-label">Open a new email in</p>
      <div class="webmail">
        <a
          v-for="service in webmail"
          :key="service.name"
          :href="service.composeUrl(mail)"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline"
          @click="close"
        >
          {{ service.name }} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <p class="sr-only" role="status">{{ copied && `Copied the ${copied}` }}</p>
    </div>
  </dialog>
</template>

<script setup lang="ts">
// Clicking a mailto link on a computer with no mail app set up does nothing, or shows a system
// "pick an app" prompt, and both feel like the site is broken. So every mailto link on the site
// opens this chooser instead: copy the details, or start the email in Gmail or Outlook on the web.

interface Mail {
  to: string
  subject: string
  body: string
}

interface MailField {
  id: string
  label: string
  name: string
  value: string
}

const toQuery = (params: Record<string, string>) =>
  Object.entries(params)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')

const webmail = [
  {
    name: 'Gmail',
    composeUrl: ({ to, subject, body }: Mail) =>
      `https://mail.google.com/mail/?view=cm&fs=1&${toQuery({ to, su: subject, body })}`
  },
  {
    name: 'Outlook',
    composeUrl: ({ to, subject, body }: Mail) =>
      `https://outlook.live.com/mail/0/deeplink/compose?${toQuery({ to, subject, body })}`
  }
]

const route = useRoute()
const dialog = ref<HTMLDialogElement | null>(null)
const mail = ref<Mail | null>(null)
const copied = ref('')
let copiedTimer: ReturnType<typeof setTimeout> | undefined
let pressStartedOnBackdrop = false

const fields = computed<MailField[]>(() =>
  [
    { id: 'email-chooser-to', label: 'To', name: 'email address', value: mail.value?.to ?? '' },
    { id: 'email-chooser-subject', label: 'Subject', name: 'subject', value: mail.value?.subject ?? '' }
  ].filter((field) => field.value)
)

function parseMailto(href: string): Mail | null {
  try {
    const url = new URL(href)
    return {
      to: decodeURIComponent(url.pathname),
      subject: url.searchParams.get('subject') ?? '',
      body: url.searchParams.get('body') ?? ''
    }
  } catch {
    return null
  }
}

async function onDocumentClick(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  // Phones and tablets come with a mail app, so mailto links already work there.
  if (window.matchMedia('(pointer: coarse)').matches) return

  const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="mailto:" i]') : null
  if (!link) return

  const parsed = parseMailto(link.href)
  if (!parsed?.to) return

  event.preventDefault()
  mail.value = parsed
  // Render the card first, so the dialog can move focus into it as it opens.
  await nextTick()
  dialog.value?.showModal()
}

function close() {
  dialog.value?.close()
}

function onClose() {
  mail.value = null
  copied.value = ''
  clearTimeout(copiedTimer)
}

// The card fills the dialog, so a click whose target is the dialog itself landed on the backdrop.
// The press has to start there too, so dragging a text selection out of the card doesn't close it.
function onPointerDown(event: PointerEvent) {
  pressStartedOnBackdrop = event.target === dialog.value
}

function onDialogClick(event: MouseEvent) {
  if (pressStartedOnBackdrop && event.target === dialog.value) close()
}

async function copy(field: MailField) {
  try {
    await navigator.clipboard.writeText(field.value)
  } catch {
    // No async clipboard (older browsers, plain-http previews). Copy a selection of the shown text
    // instead, and if even that fails, the text stays selected for a manual copy.
    const shown = document.getElementById(field.id)
    if (shown) window.getSelection()?.selectAllChildren(shown)
    if (!document.execCommand('copy')) return
  }
  copied.value = field.name
  clearTimeout(copiedTimer)
  copiedTimer = setTimeout(() => { copied.value = '' }, 2000)
}

// The layout stays mounted across pages, so don't leave the chooser open after a back or forward.
watch(() => route.fullPath, close)

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  clearTimeout(copiedTimer)
})
</script>

<style scoped>
.email-chooser {
  width: min(420px, calc(100vw - 32px));
  max-width: none;
  max-height: none;
  margin: auto;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--light-text);
  overflow: visible;
}

.email-chooser::backdrop {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(3px);
}

.email-chooser[open] .email-chooser-card {
  animation: emailChooserIn 0.2s ease-out;
}

@keyframes emailChooserIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.email-chooser-card {
  box-sizing: border-box;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding: 24px;
  background: linear-gradient(135deg, #1c1c1e 0%, #252528 100%);
  border: 1px solid rgba(255, 107, 53, 0.25);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
}

.email-chooser-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.email-chooser-header h2 {
  margin: 0;
  font-size: 1.3rem;
  color: var(--primary-orange);
}

.close-btn {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: var(--light-text);
  font: inherit;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 107, 53, 0.15);
  color: var(--primary-orange);
}

.email-field {
  margin-bottom: 12px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
}

/* The copy button sits beside the label, so the value gets the full width and rarely wraps. */
.field-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
}

.field-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #b0b0b0;
}

.field-value {
  display: block;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.copy-btn {
  flex-shrink: 0;
  padding: 4px 12px;
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  background: rgba(255, 107, 53, 0.15);
  color: var(--primary-orange);
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.copy-btn:hover {
  background: rgba(255, 107, 53, 0.25);
}

.copy-btn.copied {
  border-color: rgba(76, 175, 80, 0.4);
  background: rgba(76, 175, 80, 0.15);
  color: var(--success-green);
}

.webmail-label {
  margin: 20px 0 10px;
  font-size: 0.9rem;
  color: #b0b0b0;
}

.webmail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.webmail .btn {
  justify-content: center;
  padding: 11px 18px;
  font-size: 1rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 480px) {
  .email-chooser-card {
    padding: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .email-chooser[open] .email-chooser-card {
    animation: none;
  }
}
</style>
