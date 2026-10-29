<script setup lang="ts">
const t = useT()
const { tm, rt } = useI18n()

interface Pillar { verb: string; what: string; items: string[] }
const pillars = computed<Pillar[]>(() =>
  (tm('oneApp.pillars') as unknown as { verb: unknown; what: unknown; items: unknown[] }[]).map(p => ({
    verb: rt(p.verb as never),
    what: rt(p.what as never),
    items: p.items.map(i => rt(i as never)),
  })),
)
</script>

<template>
  <!-- The hero says "one app"; this is what is in it, in the order a patient
       meets it. The sections further down go deeper into single features. -->
  <section id="una-app" class="py-20">
    <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
      <div class="mx-auto flex max-w-[700px] flex-col items-center gap-3.5 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('oneApp.badge') }}
        </span>
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('oneApp.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('oneApp.description') }}</p>
      </div>

      <ol class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <li v-for="pillar in pillars" :key="pillar.verb" class="flex min-w-0 flex-col gap-3 rounded-card border border-line bg-white p-5">
          <div class="flex flex-col gap-1">
            <h3 class="text-[19px] font-semibold tracking-tightTitle text-brand-text">{{ pillar.verb }}</h3>
            <p class="text-[13.5px] text-ink-muted">{{ pillar.what }}</p>
          </div>
          <ul class="flex flex-col gap-1.5 border-t border-line pt-3">
            <li v-for="item in pillar.items" :key="item" class="text-[14px] leading-snug text-ink-600">{{ item }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
