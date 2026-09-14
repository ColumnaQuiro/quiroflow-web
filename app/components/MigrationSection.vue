<script setup lang="ts">
// Was PracticeHubSection, and was the second thing on the homepage. Two
// changes, both about who the section is talking to: it now sits below the
// features (nobody weighs a migration before they know what they would be
// migrating to), and it is titled by the fear rather than by a competitor's
// name -- "PracticeHub importer" only means something to the small slice of
// visitors already on PracticeHub, while "will I lose the records?" is the
// question every clinic considering a change is actually asking.
const t = useT()
// tm(), not t() -- these two keys resolve to arrays of strings, and t()
// would stringify them instead of returning the raw array to v-for.
const { tm } = useI18n()
</script>

<template>
  <section id="migracion" class="border-y border-line bg-surface-page py-24">
    <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
      <div class="flex flex-col gap-[18px]">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('migration.badge') }}
        </span>
        <h2 class="text-[32px] leading-[1.15] tracking-tightTitle text-ink-900">{{ t('migration.titleLine1') }}</h2>
        <p class="text-[17px] font-semibold leading-[1.4] text-brand-text">{{ t('migration.titleLine2') }}</p>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">
          {{ t('migration.description') }}
        </p>
        <ul class="mt-2 flex flex-col gap-3">
          <li v-for="bullet in tm('migration.bullets')" :key="bullet" class="flex items-start gap-2.5 text-[14.5px] text-ink-600">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mt-px shrink-0" aria-hidden="true">
              <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
              <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>

      <div class="rounded-card border border-line bg-white p-7 shadow-card">
        <div class="mb-6 flex items-center justify-center gap-[18px]">
          <div class="rounded-ctl border border-dashed border-[#D5D7DE] px-[18px] py-3 text-center text-[13px] font-semibold text-ink-faint">
            {{ t('migration.fromLabel') }}
          </div>
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" class="shrink-0" aria-hidden="true">
            <path d="M1 7h24m0 0l-6-6m6 6l-6 6" stroke="#B3B7C4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex shrink-0 items-center gap-2 rounded-ctl bg-brand px-[18px] py-3">
            <LogoMark :size="16" color="#fff" />
            <span class="text-[13px] font-semibold text-white">{{ t('migration.toLabel') }}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2.5">
          <div v-for="item in tm('migration.items')" :key="item" class="flex items-center gap-2 rounded-[7px] bg-surface-page px-3 py-[9px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7.3l2.7 2.7 6-6" stroke="#1D8A5B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            <span class="text-[13px] text-ink-600">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
