<script setup lang="ts">
// Three cards on one screen: packages and memberships, VeriFactu invoices
// and the app.
const c = useCopy()
const f = computed(() => c('home.features'))
const h2 = computed(() => c('home.money.h2'))
</script>

<template>
  <section id="cobros" class="section" aria-labelledby="cob-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="cob-h">{{ h2 }}</h2>
      </div>
      <div class="grid">
        <article class="card card--row card--open span-4">
          <h3>{{ f.billing.title }}</h3>
          <p>{{ f.billing.body }}</p>
          <KitShotPanel src="/screens/bono.webp" :alt="c('site.shots.bono')" />
        </article>
        <article class="card card--row card--open span-4">
          <h3>{{ f.verifactu.title }}</h3>
          <p>{{ f.verifactu.body }}</p>
          <KitShotPanel src="/screens/facturas.webp" :alt="c('site.shots.facturas')" />
        </article>
        <article class="card card--row card--open span-4">
          <h3>{{ f.app.title }}</h3>
          <p>{{ f.app.body }}</p>
          <KitShotPanel src="/screens/app-paciente-inicio.webp" :alt="c('site.shots.app')" phone />
        </article>
      </div>
    </div>
  </section>
</template>
