<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'

const t = useT()
// tm(), not t() -- the feature lists resolve to arrays of strings, and t()
// would stringify them instead of returning the raw array to v-for. Same
// reason PracticeHubSection.vue reaches for it.
const { tm } = useI18n()

const annual = ref(false)

// Amounts live here rather than in the translations: they are identical in
// every language, and duplicating them across es/en/fr is how they drift.
const TIERS = [
  { key: 'solo', monthly: 59, annual: 50, featured: false },
  { key: 'practice', monthly: 119, annual: 99, featured: true },
  { key: 'clinic', monthly: 199, annual: 169, featured: false },
] as const

function price(tier: (typeof TIERS)[number]) {
  return annual.value ? tier.annual : tier.monthly
}
</script>

<template>
  <section id="precios" class="border-y border-line bg-surface-page py-24">
    <div class="mx-auto flex max-w-[1120px] flex-col items-center gap-4 px-8">
      <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
        {{ t('pricing.badge') }}
      </span>
      <h2 class="max-w-[620px] text-center text-[32px] leading-[1.15] tracking-tightTitle text-ink-900">
        {{ t('pricing.title') }}
      </h2>
      <p class="max-w-[640px] text-center text-[15.5px] leading-[1.6] text-ink-muted">
        {{ t('pricing.description') }}
      </p>

      <div class="mt-3 inline-flex items-center rounded-full border border-line bg-surface p-1">
        <button
          type="button"
          class="rounded-full px-4 py-[7px] text-[13.5px] font-semibold transition-colors"
          :class="annual ? 'text-ink-muted hover:text-ink-600' : 'bg-brand text-white'"
          :aria-pressed="!annual"
          @click="annual = false"
        >
          {{ t('pricing.monthly') }}
        </button>
        <button
          type="button"
          class="flex items-center gap-2 rounded-full px-4 py-[7px] text-[13.5px] font-semibold transition-colors"
          :class="annual ? 'bg-brand text-white' : 'text-ink-muted hover:text-ink-600'"
          :aria-pressed="annual"
          @click="annual = true"
        >
          {{ t('pricing.annual') }}
          <span
            class="rounded-full px-2 py-px text-[11.5px] font-semibold"
            :class="annual ? 'bg-white/20 text-white' : 'bg-brand-tint text-brand-text'"
          >
            {{ t('pricing.annualSave') }}
          </span>
        </button>
      </div>

      <div class="mt-8 grid w-full grid-cols-1 items-start gap-5 md:grid-cols-3">
        <div
          v-for="tier in TIERS"
          :key="tier.key"
          class="relative flex h-full flex-col gap-5 rounded-[14px] border bg-surface p-6"
          :class="tier.featured ? 'border-brand shadow-[0_1px_3px_rgba(16,24,40,0.06),0_12px_28px_-8px_rgba(79,70,229,0.22)]' : 'border-line'"
        >
          <span
            v-if="tier.featured"
            class="absolute -top-[11px] left-6 rounded-full bg-brand px-2.5 py-[3px] text-[11.5px] font-semibold text-white"
          >
            {{ t('pricing.mostChosen') }}
          </span>

          <div class="flex flex-col gap-1">
            <h3 class="text-[17px] font-semibold text-ink-900">{{ t(`pricing.tiers.${tier.key}.name`) }}</h3>
            <p class="text-[13.5px] text-ink-muted">{{ t(`pricing.tiers.${tier.key}.for`) }}</p>
          </div>

          <div class="flex flex-col gap-0.5">
            <p class="flex items-baseline gap-1">
              <span class="text-[38px] font-semibold leading-none tracking-tightTitle text-ink-900 tabular-nums">{{ price(tier) }}&nbsp;€</span>
              <span class="text-[14px] text-ink-muted">{{ t('pricing.perMonth') }}</span>
            </p>
            <p class="h-[18px] text-[12.5px] text-ink-faint2">
              <span v-if="annual">{{ t('pricing.billedAnnually') }}</span>
            </p>
          </div>

          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl px-[22px] py-[11px] text-[14.5px] font-semibold transition-colors"
            :class="tier.featured ? 'bg-brand text-white hover:bg-brand-hover' : 'border border-line-control bg-surface text-ink-700 hover:border-line-controlHover'"
          >
            {{ t('pricing.cta') }}
          </a>

          <ul class="flex flex-col gap-2.5 border-t border-line pt-5">
            <li
              v-for="feature in (tm(`pricing.tiers.${tier.key}.features`) as string[])"
              :key="feature"
              class="flex items-start gap-2.5 text-[14px] leading-[1.5] text-ink-600"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mt-px shrink-0" aria-hidden="true">
                <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
                <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
              <span>{{ feature }}</span>
            </li>
            <li v-if="tier.key !== 'solo'" class="pl-[28px] text-[13px] text-ink-faint2">
              {{ t('pricing.extraPro') }}
            </li>
          </ul>
        </div>
      </div>

      <p class="mt-4 max-w-[640px] text-center text-[13.5px] text-ink-muted">{{ t('pricing.ctaNote') }}</p>
    </div>
  </section>
</template>
