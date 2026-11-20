<script setup lang="ts">
// Stripe, GoCardless and WhatsApp with their real marks (public/logos), the
// same three providers and texts as components/IntegrationsSection.vue.
const c = useCopy()
const h2 = computed(() => c('featuresPage.providers.h2'))
const i = computed(() => c('integrations'))
const LOGOS: Record<string, { src: string; alt: string; width: number; height: number }> = {
  stripe: { src: '/logos/stripe.svg', alt: 'Stripe', width: 60, height: 25 },
  gocardless: { src: '/logos/gocardless.svg', alt: 'GoCardless', width: 800, height: 120 },
  whatsapp: { src: '/logos/whatsapp.svg', alt: 'WhatsApp', width: 24, height: 24 },
}
</script>

<template>
  <section id="proveedores" class="section" style="--hm: 2" aria-labelledby="prov-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="prov-h">{{ h2 }}</h2>
        <p>{{ i.description }}</p>
      </div>
      <div class="grid">
        <article v-for="item in i.items" :key="item.key" class="card card--row card--open span-4">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
          <div class="panel panel--logo">
            <img :src="LOGOS[item.key].src" :alt="LOGOS[item.key].alt" :width="LOGOS[item.key].width" :height="LOGOS[item.key].height" loading="lazy">
            <span v-if="item.key === 'whatsapp'" aria-hidden="true">WhatsApp</span>
          </div>
        </article>
      </div>
      <p class="t-small muted providers__note">{{ i.note }}</p>
    </div>
  </section>
</template>
