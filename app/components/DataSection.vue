<script setup lang="ts">
// Where the data lives, who answers for it, and -- the part nobody writes
// down -- how you get it back out. Lock-in is the silent objection to buying
// from a small vendor, and a publicly stated exporter is the only thing that
// answers it. Saying it before being asked is the whole point.
const t = useT()
const { tm, rt } = useI18n()

const items = computed(() =>
  (tm('data.items') as { title: string; body: string }[]).map(item => ({
    title: rt(item.title),
    body: rt(item.body),
  })),
)
</script>

<template>
  <section id="datos" class="py-24">
    <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
      <div class="mx-auto flex max-w-[680px] flex-col items-center gap-3.5 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('data.badge') }}
        </span>
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('data.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('data.description') }}</p>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex gap-3.5 rounded-card border border-line bg-white p-6"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" class="mt-0.5 shrink-0" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="#E9F6EF" />
            <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#157F52" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          </svg>
          <div class="flex flex-col gap-1.5">
            <h3 class="text-[16px] font-semibold tracking-tightTitle text-ink-900">{{ item.title }}</h3>
            <p class="text-[14.5px] leading-[1.65] text-ink-muted">{{ item.body }}</p>
          </div>
        </div>
      </div>

      <p class="mx-auto max-w-[640px] text-center text-[14px] leading-[1.6] text-ink-muted">{{ t('data.note') }}</p>
    </div>
  </section>
</template>
