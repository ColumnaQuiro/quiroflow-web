<script setup lang="ts">
// The automation editor, whole, with a real flow from the app's templates
// ("No asistió": a WhatsApp to rebook, a wait for the reply, a notice to the
// practitioner), on the brand stage.
const c = useCopy()
const a = computed(() => c('home.automations'))
const localePath = useLocalePath()
</script>

<template>
  <section id="automatizaciones" class="section" style="--h: 2; --hm: 1" aria-labelledby="aut-h">
    <div class="wrap">
      <div class="grid">
        <h2 id="aut-h" class="span-5">{{ a.h2 }}</h2>
        <div class="span-6 start-7 stack-4">
          <p class="muted">{{ a.lead }}</p>
          <p class="muted">{{ a.example }} <a class="link" :href="localePath('automatizaciones')">{{ a.link }}</a></p>
        </div>
      </div>
      <div class="stage-brand stage-brand--whole">
        <KitBrowser screen="automatizacion" :alt="a.alt" />
      </div>
    </div>
  </section>
</template>
