<script setup lang="ts">
// A small drawn panel of the product (.mini in brand.css): a header row,
// then label/value rows. tones[i] styles row i: "s1".."s4" draws the value
// as a status chip (blue, green, amber, red), "strike" strikes the label.
// Position comes from the caller's class/style.
const props = defineProps<{ rows: string[][]; tones?: (string | undefined)[] }>()
const chip = (i: number) => props.tones?.[i]?.match(/s[1-4]/)?.[0]
const strike = (i: number) => !!props.tones?.[i]?.includes('strike')
</script>

<template>
  <div class="mini">
    <div v-for="(row, i) in rows" :key="i">
      <s v-if="strike(i)">{{ row[0] }}</s><template v-else>{{ row[0] }}</template>
      <span v-if="row[1] !== undefined" :class="chip(i) ? ['chip', chip(i)] : undefined">{{ row[1] }}</span>
    </div>
  </div>
</template>
