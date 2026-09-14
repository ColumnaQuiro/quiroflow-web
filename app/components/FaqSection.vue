<script setup lang="ts">
// Shared by the homepage and both vertical pages. The GDPR and migration
// answers were only reachable by someone who happened to land on the physio
// page -- they are the two most expensive objections on the site, so they
// belong wherever a visitor is deciding.
defineProps<{ title: string; description?: string; items: { q: string; a: string }[] }>()
</script>

<template>
  <section id="faq" class="border-y border-line bg-surface-page py-20">
    <div class="mx-auto flex max-w-[760px] flex-col gap-8 px-8">
      <div class="flex flex-col items-center gap-3 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ title }}</h2>
        <p v-if="description" class="text-[15px] leading-[1.6] text-ink-muted">{{ description }}</p>
      </div>
      <div class="flex flex-col gap-5">
        <div
          v-for="item in items"
          :key="item.q"
          class="rounded-card border border-line bg-white p-6"
        >
          <h3 class="text-[16px] font-semibold tracking-tightTitle text-ink-900">{{ item.q }}</h3>
          <p class="mt-2 text-[14.5px] leading-[1.7] text-ink-muted">{{ item.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
