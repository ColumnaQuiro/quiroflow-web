<script setup lang="ts">
// "Send me the prices by email", back on the kit pages. Same Netlify form as
// components/EmailCapture.vue (form name, field names, honeypot, POST to /),
// so submissions keep arriving in the same Netlify inbox; only the markup
// and the styles (.capture in public/kit/brand.css) are new. Not class
// "form": system.js would take over its submit.
const props = withDefaults(defineProps<{ formName?: string }>(), { formName: 'info-general' })

const t = useT()
const localePath = useLocalePath()
const email = ref('')
const clinic = ref('')
const consent = ref(false)
const status = ref<'idle' | 'sending' | 'ok' | 'error'>('idle')

async function submit() {
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
    trackConversion('emailCapture')
    trackMetaConversion('emailCapture')
  }
  catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div id="precios-por-email" class="capture">
    <h3 class="capture__title">{{ t('capture.title') }}</h3>
    <p class="muted">{{ t('capture.description') }}</p>
    <p v-if="status === 'ok'" class="capture__ok" role="status">{{ t('capture.success') }}</p>
    <form
      v-else
      class="capture"
      :name="formName"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="submit"
    >
      <input type="hidden" name="form-name" :value="formName">
      <p class="capture__trap" aria-hidden="true">
        <label>No rellenar: <input name="bot-field" tabindex="-1" autocomplete="off"></label>
      </p>
      <div class="field">
        <label :for="`${formName}-email`">{{ t('capture.emailLabel') }}</label>
        <input :id="`${formName}-email`" v-model="email" type="email" name="email" autocomplete="email" required>
      </div>
      <div class="field">
        <label :for="`${formName}-clinica`">{{ t('capture.clinicLabel') }}</label>
        <input :id="`${formName}-clinica`" v-model="clinic" type="text" name="clinica" autocomplete="organization">
      </div>
      <label class="capture__consent">
        <input v-model="consent" type="checkbox" name="consentimiento" required>
        <span>{{ t('capture.consentBefore') }} <a :href="localePath('politica-de-privacidad')">{{ t('capture.consentLink') }}</a>.</span>
      </label>
      <button class="btn btn--primary" type="submit" :disabled="status === 'sending'">
        {{ status === 'sending' ? t('capture.sending') : t('capture.button') }}
      </button>
      <p v-if="status === 'error'" class="capture__error" role="alert">{{ t('capture.error') }}</p>
    </form>
  </div>
</template>
