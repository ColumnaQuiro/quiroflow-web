<script setup lang="ts">
withDefaults(defineProps<{ eyebrow: string; title: string; description: string; reverse?: boolean }>(), { reverse: false })
</script>

<template>
  <section class="py-14">
    <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
      <div :class="reverse ? 'md:order-2' : 'md:order-1'">
        <slot name="visual" />
      </div>
      <div class="flex flex-col gap-3.5" :class="reverse ? 'md:order-1' : 'md:order-2'">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ eyebrow }}
        </span>
        <h3 class="text-[25px] tracking-tightTitle text-ink-900">{{ title }}</h3>
        <p class="text-[15px] leading-[1.6] text-ink-muted">{{ description }}</p>
      </div>
    </div>
  </section>
</template>
