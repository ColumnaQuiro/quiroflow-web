<script setup lang="ts">
// Lifted out of the physiotherapy page, where it was the single best
// conversion surface on the site and the only page that had it. A visitor
// who is not ready for a call had nothing to do on the homepage but leave.
//
// Netlify Forms: the form is submitted with fetch so the visitor gets an
// inline confirmation instead of Netlify's generic success page, but the real
// <form> with data-netlify stays in the prerendered HTML because that markup
// is what Netlify's build step scans to register the form at all. Without JS
// the native POST still works, so this degrades rather than breaks. Each page
// passes its own formName so the submissions arrive separable by source.
const props = defineProps<{ formName: string }>()

const t = useT()
const localePath = useLocalePath()

const email = ref('')
const clinic = ref('')
const consent = ref(false)
const status = ref<'idle' | 'sending' | 'ok' | 'error'>('idle')

async function submitCapture() {
  if (status.value === 'sending' || !email.value || !consent.value) return
  status.value = 'sending'
  try {
    const body = new URLSearchParams({
      'form-name': props.formName,
      email: email.value,
      clinica: clinic.value,
      consentimiento: 'si',
    })
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    if (!res.ok) throw new Error(String(res.status))
    status.value = 'ok'
    // Primary conversion: unlike the demo and sign-up buttons this one
    // completes on-site, so it is the only signal Google Ads can attribute
    // with confidence. No-ops unless the visitor accepted ads cookies and
    // the labels are set.
    trackConversion('emailCapture')
  }
  catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="precios-por-email" class="py-20">
    <div class="mx-auto max-w-[640px] px-8">
      <div class="rounded-card border border-line bg-white p-8 shadow-card">
        <h2 class="text-[24px] tracking-tightTitle text-ink-900">{{ t('capture.title') }}</h2>
        <p class="mt-2 text-[14.5px] leading-[1.6] text-ink-muted">{{ t('capture.description') }}</p>

        <p v-if="status === 'ok'" class="mt-5 rounded-ctl bg-success-bg px-4 py-3 text-[14.5px] font-semibold text-success-text">
          {{ t('capture.success') }}
        </p>

        <form
          v-else
          :name="formName"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="mt-5 flex flex-col gap-3"
          @submit.prevent="submitCapture"
        >
          <input type="hidden" name="form-name" :value="formName" />
          <!-- The honeypot must be hidden from assistive tech as well as from
               sighted visitors: a screen-reader user who dutifully fills in a
               labelled field would be silently classified as a bot. Tailwind's
               `hidden` is display:none, which removes the subtree from the
               accessibility tree entirely, so the label is never announced --
               aria-hidden is belt and braces for the same guarantee. Note this
               rules out the usual off-screen tricks (sr-only, left:-9999px),
               which hide it visually while leaving it fully readable. -->
          <p class="hidden" aria-hidden="true">
            <label>No rellenar: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
          </p>

          <label class="flex flex-col gap-1.5">
            <span class="text-[13px] font-semibold text-ink-700">{{ t('capture.emailLabel') }}</span>
            <input
              v-model="email"
              type="email"
              name="email"
              required
              placeholder="hola@tuclinica.com"
              class="rounded-ctl border border-line-control px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none focus:border-brand"
            />
          </label>

          <label class="flex flex-col gap-1.5">
            <span class="text-[13px] font-semibold text-ink-700">{{ t('capture.clinicLabel') }}</span>
            <input
              v-model="clinic"
              type="text"
              name="clinica"
              class="rounded-ctl border border-line-control px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none focus:border-brand"
            />
          </label>

          <label class="mt-1 flex items-start gap-2.5 text-[13px] leading-[1.5] text-ink-muted">
            <input
              v-model="consent"
              type="checkbox"
              name="consentimiento"
              required
              class="mt-0.5 h-4 w-4 shrink-0 accent-brand"
            />
            <span>
              {{ t('capture.consentBefore') }}
              <NuxtLink :to="localePath('politica-de-privacidad')" class="text-brand underline">
                {{ t('capture.consentLink') }}
              </NuxtLink>.
            </span>
          </label>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="mt-1 inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover disabled:opacity-60"
          >
            {{ status === 'sending' ? t('capture.sending') : t('capture.button') }}
          </button>

          <p v-if="status === 'error'" class="text-[13.5px] text-danger-text">
            {{ t('capture.error') }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
