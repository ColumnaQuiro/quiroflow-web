<script setup lang="ts">
// Seven full-width feature blocks of equal weight meant none of them stood
// out. The three that differentiate keep their own FeatureSection above; the
// table-stakes ones (everyone's software has a calendar and invoices) are
// compressed into this grid so they are still answered without competing for
// the same attention.
defineProps<{ items: { eyebrow: string; title: string; body: string }[] }>()
</script>

<template>
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="item in items"
      :key="item.title"
      class="flex flex-col gap-2 rounded-card border border-line bg-white p-6"
    >
      <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-2.5 py-[3px] text-[11.5px] font-semibold text-brand-text">
        {{ item.eyebrow }}
      </span>
      <h3 class="mt-1 text-[16.5px] font-semibold tracking-tightTitle text-ink-900">{{ item.title }}</h3>
      <p class="text-[14px] leading-[1.65] text-ink-muted">{{ item.body }}</p>
    </div>
  </div>
</template>
