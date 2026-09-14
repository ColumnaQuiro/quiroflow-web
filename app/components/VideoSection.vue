<script setup lang="ts">
import { PRODUCT_VIDEO_URL } from '~/utils/links'

const t = useT()

// Nothing renders in a production build until PRODUCT_VIDEO_URL is set. For a
// new SaaS the 60-90s walkthrough is the strongest proof on the page -- more
// than any copy -- so the slot is reserved here, right under the hero, rather
// than bolted on later. But an unfilled slot must not ship as a visible
// "coming soon" box to a real visitor, so the placeholder is dev-only.
const hasVideo = computed(() => PRODUCT_VIDEO_URL.length > 0)
const showPlaceholder = import.meta.dev
</script>

<template>
  <section v-if="hasVideo || showPlaceholder" id="video" class="border-b border-line bg-surface-page py-16">
    <div class="mx-auto flex max-w-[880px] flex-col items-center gap-4 px-8 text-center">
      <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
        {{ t('video.eyebrow') }}
      </span>
      <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('video.title') }}</h2>
      <p class="max-w-[560px] text-[15.5px] leading-[1.6] text-ink-muted">{{ t('video.description') }}</p>

      <div class="mt-3 w-full overflow-hidden rounded-card border border-line bg-white shadow-card">
        <iframe
          v-if="hasVideo"
          :src="PRODUCT_VIDEO_URL"
          title="QuiroFlow"
          class="aspect-video w-full max-w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <!-- Dev-only reminder. Set PRODUCT_VIDEO_URL in app/utils/links.ts. -->
        <div v-else class="flex aspect-video w-full items-center justify-center border-2 border-dashed border-line-control bg-surface-page px-6">
          <p class="text-[14px] font-semibold text-ink-faint">
            [Vídeo de producto pendiente — 60-90 s · define PRODUCT_VIDEO_URL en app/utils/links.ts]
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
