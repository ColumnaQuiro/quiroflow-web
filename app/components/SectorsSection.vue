<script setup lang="ts">
const t = useT()
const localePath = useLocalePath()
</script>

<template>
  <!-- The homepage no longer claims a vertical, so it has to say out loud
       which ones it serves. Osteopathy and podiatry get named here even
       though neither has a page yet: a podologist who reads only the hero
       has no way to tell whether this is for them, and silence reads as no. -->
  <section id="especialidades" class="border-y border-line bg-surface-page py-20">
    <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
      <div class="mx-auto flex max-w-[660px] flex-col items-center gap-3.5 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('sectors.badge') }}
        </span>
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('sectors.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('sectors.description') }}</p>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <NuxtLink
          :to="localePath('software-quiropractica')"
          class="group flex flex-col gap-2.5 rounded-card border border-line bg-white p-7 transition-colors hover:border-brand"
        >
          <h3 class="text-[18px] font-semibold tracking-tightTitle text-ink-900">{{ t('sectors.chiro.title') }}</h3>
          <p class="text-[14.5px] leading-[1.65] text-ink-muted">{{ t('sectors.chiro.body') }}</p>
          <span class="mt-1 text-[14px] font-semibold text-brand-text group-hover:underline">{{ t('sectors.chiro.link') }} →</span>
        </NuxtLink>

        <NuxtLink
          :to="localePath('software-fisioterapia')"
          class="group flex flex-col gap-2.5 rounded-card border border-line bg-white p-7 transition-colors hover:border-brand"
        >
          <h3 class="text-[18px] font-semibold tracking-tightTitle text-ink-900">{{ t('sectors.physio.title') }}</h3>
          <p class="text-[14.5px] leading-[1.65] text-ink-muted">{{ t('sectors.physio.body') }}</p>
          <span class="mt-1 text-[14px] font-semibold text-brand-text group-hover:underline">{{ t('sectors.physio.link') }} →</span>
        </NuxtLink>
      </div>

      <div class="rounded-card border border-brand-tintBorder bg-brand-tint px-7 py-6">
        <h3 class="text-[16px] font-semibold text-ink-900">{{ t('sectors.others.title') }}</h3>
        <p class="mt-1.5 max-w-[720px] text-[14.5px] leading-[1.65] text-ink-muted">{{ t('sectors.others.body') }}</p>
      </div>
    </div>
  </section>
</template>
