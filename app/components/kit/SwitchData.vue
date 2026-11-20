<script setup lang="ts">
// Data and exit: the six points of data.items in es/en/fr.ts, beside a small
// drawn activity log.
const c = useCopy()
const d = computed(() => c('switchPage.data'))
const items = computed(() => c('data.items') as { title: string; body: string }[])
</script>

<template>
  <section id="datos" class="section" style="--hm: 2" aria-labelledby="dat-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="dat-h">{{ d.h2 }}</h2>
        <p>{{ d.lead }}</p>
      </div>
      <div class="grid">
        <ul class="rows rows--data span-6">
          <li v-for="item in items" :key="item.title"><span class="rows__name">{{ item.title }}<small>{{ item.body }}</small></span></li>
        </ul>
        <div class="frame frame--split frame--lit span-6 start-7">
          <KitMini :rows="d.log" class="mini--log" />
        </div>
      </div>
    </div>
  </section>
</template>
