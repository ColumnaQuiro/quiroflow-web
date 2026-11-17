<script setup lang="ts">
// Who actually moves the money and sends the messages. A clinic buying from a
// small vendor wants to know its patients' card payments and direct debits
// are not sitting with us, and that WhatsApp goes through the official API
// rather than a workaround that gets numbers banned. Naming the providers
// answers both.
//
// Brand rules behind what this says and shows:
// - Logos are the providers' own files (stripe.com, brand.gocardless.com,
//   the WhatsApp glyph), in one dark monochrome so none outshouts the rest.
//   Do not redraw or recolour them beyond that.
// - Meta: QuiroFlow is a Tech Provider, which is NOT the Meta Business
//   Partners programme. Do not add the Meta logo or call us a Meta partner;
//   the WhatsApp glyph with "official WhatsApp Business API" is what Meta's
//   guidelines allow and what a clinic actually cares about.
// - Stripe: using Stripe does not make us a Stripe partner. Say "with
//   Stripe", never "Stripe partner".
const t = useT()
const { tm, rt } = useI18n()

const logos = {
  stripe: { src: '/logos/stripe.svg', alt: 'Stripe', width: 60, height: 25, cls: 'h-[26px]' },
  gocardless: { src: '/logos/gocardless.svg', alt: 'GoCardless', width: 800, height: 120, cls: 'h-[19px]' },
  whatsapp: { src: '/logos/whatsapp.svg', alt: 'WhatsApp', width: 24, height: 24, cls: 'h-[24px]' },
} as const

const items = computed(() =>
  (tm('integrations.items') as { key: string; title: string; body: string }[]).map(item => ({
    logo: logos[rt(item.key) as keyof typeof logos],
    title: rt(item.title),
    body: rt(item.body),
  })),
)
</script>

<template>
  <section id="integraciones" class="pb-24">
    <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
      <div class="mx-auto flex max-w-[680px] flex-col items-center gap-3.5 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('integrations.badge') }}
        </span>
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('integrations.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('integrations.description') }}</p>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div
          v-for="item in items"
          :key="item.logo.alt"
          class="flex flex-col gap-4 rounded-card border border-line bg-white p-6"
        >
          <div class="flex h-[28px] items-center gap-2">
            <img
              :src="item.logo.src"
              :alt="item.logo.alt"
              :width="item.logo.width"
              :height="item.logo.height"
              :class="[item.logo.cls, 'w-auto']"
              loading="lazy"
              decoding="async"
            >
            <!-- WhatsApp's guidelines give the glyph, not a wordmark: the
                 name is written out in our own type beside it. -->
            <span v-if="item.logo.alt === 'WhatsApp'" class="text-[18px] font-semibold tracking-tightTitle text-ink-700" aria-hidden="true">WhatsApp</span>
          </div>
          <div class="flex flex-col gap-1.5">
            <h3 class="text-[16px] font-semibold tracking-tightTitle text-ink-900">{{ item.title }}</h3>
            <p class="text-[14.5px] leading-[1.65] text-ink-muted">{{ item.body }}</p>
          </div>
        </div>
      </div>

      <p class="mx-auto max-w-[640px] text-center text-[12.5px] leading-[1.6] text-ink-faint">{{ t('integrations.note') }}</p>
    </div>
  </section>
</template>
