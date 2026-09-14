<script setup lang="ts">
const t = useT()
const localePath = useLocalePath()
const { ready, decided, set, acceptAll, rejectAll } = useConsent()

const showSettings = ref(false)
// Both default to false, never pre-ticked: under the AEPD's reading of the
// LSSI-CE, silence is not consent, so a visitor who opens the panel and saves
// without touching anything has consented to nothing.
const ads = ref(false)
const analytics = ref(false)

// Only after the client has read localStorage. On the server `ready` is false,
// so the banner is absent from the prerendered HTML and hydration matches.
const visible = computed(() => ready.value && !decided.value)

function saveSelection() {
  set(ads.value, analytics.value)
}
</script>

<template>
  <div
    v-if="visible"
    role="dialog"
    aria-modal="false"
    :aria-label="t('consent.title')"
    class="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 backdrop-blur"
  >
    <div class="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-5 md:px-8">
      <div class="flex flex-col gap-2">
        <p class="text-[15px] font-semibold text-ink-900">{{ t('consent.title') }}</p>
        <p class="max-w-[70ch] text-[13.5px] leading-[1.6] text-ink-muted">
          {{ t('consent.body') }}
          <NuxtLink :to="localePath('politica-de-privacidad')" class="text-brand underline">
            {{ t('footer.privacy') }}
          </NuxtLink>
        </p>
      </div>

      <div v-if="showSettings" class="flex flex-col gap-3 rounded-card border border-line bg-surface-page p-4">
        <div class="flex items-start justify-between gap-4">
          <div class="flex flex-col gap-0.5">
            <span class="text-[13.5px] font-semibold text-ink-900">{{ t('consent.necessaryTitle') }}</span>
            <span class="text-[12.5px] leading-[1.5] text-ink-muted">{{ t('consent.necessaryBody') }}</span>
          </div>
          <span class="shrink-0 whitespace-nowrap rounded-full bg-success-bg px-2.5 py-1 text-[11.5px] font-semibold text-success-text">
            {{ t('consent.always') }}
          </span>
        </div>

        <label class="flex items-start justify-between gap-4 border-t border-line-control/60 pt-3">
          <span class="flex flex-col gap-0.5">
            <span class="text-[13.5px] font-semibold text-ink-900">{{ t('consent.adsTitle') }}</span>
            <span class="text-[12.5px] leading-[1.5] text-ink-muted">{{ t('consent.adsBody') }}</span>
          </span>
          <input v-model="ads" type="checkbox" class="mt-1 h-4 w-4 shrink-0 accent-brand" />
        </label>

        <label class="flex items-start justify-between gap-4 border-t border-line-control/60 pt-3">
          <span class="flex flex-col gap-0.5">
            <span class="text-[13.5px] font-semibold text-ink-900">{{ t('consent.analyticsTitle') }}</span>
            <span class="text-[12.5px] leading-[1.5] text-ink-muted">{{ t('consent.analyticsBody') }}</span>
          </span>
          <input v-model="analytics" type="checkbox" class="mt-1 h-4 w-4 shrink-0 accent-brand" />
        </label>
      </div>

      <!-- Accept and Decline are deliberately identical in size and weight.
           Making rejection visibly harder than acceptance is the specific
           dark pattern the AEPD has sanctioned. -->
      <div class="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <button
          type="button"
          class="rounded-ctl bg-brand px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-brand-hover"
          @click="acceptAll"
        >
          {{ t('consent.accept') }}
        </button>
        <button
          type="button"
          class="rounded-ctl border border-line-control bg-white px-5 py-2.5 text-[14px] font-semibold text-ink-700 hover:border-ink-faint"
          @click="rejectAll"
        >
          {{ t('consent.reject') }}
        </button>
        <button
          v-if="!showSettings"
          type="button"
          class="rounded-ctl px-2 py-2.5 text-[13.5px] font-medium text-ink-muted underline hover:text-ink-900 sm:ml-1"
          @click="showSettings = true"
        >
          {{ t('consent.settings') }}
        </button>
        <button
          v-else
          type="button"
          class="rounded-ctl px-2 py-2.5 text-[13.5px] font-medium text-ink-muted underline hover:text-ink-900 sm:ml-1"
          @click="saveSelection"
        >
          {{ t('consent.save') }}
        </button>
      </div>
    </div>
  </div>
</template>
