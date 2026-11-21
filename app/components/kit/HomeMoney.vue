<script setup lang="ts">
// Three cards on one screen: packages and memberships, VeriFactu invoices
// and the app.
const c = useCopy()
const f = computed(() => c('home.features'))
const h2 = computed(() => c('home.money.h2'))
const pay = computed(() => c('featuresPage.money.payments'))
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
          <KitIll kind="bono" :rows="f.billing.rows" />
        </article>
        <article class="card card--row card--open span-4">
          <h3>{{ f.verifactu.title }}</h3>
          <p>{{ f.verifactu.body }}</p>
          <KitIll kind="invoice" :rows="f.verifactu.rows" />
        </article>
        <article class="card card--row card--open span-4">
          <h3>{{ pay.title }}</h3>
          <p>{{ pay.body }}</p>
          <KitIll kind="list" :rows="pay.rows" />
        </article>
      </div>
    </div>
  </section>
</template>
