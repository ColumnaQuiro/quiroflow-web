<script setup lang="ts">
// A real screenshot of the app (public/screens, captured from the fictional
// Clínica Demo, no production data) inside a card's panel: anchored at the
// panel's top left and cut by its right and bottom edges, or, for the
// patient app, a phone standing in the middle.
defineProps<{ src: string; alt: string; phone?: boolean }>()
</script>

<template>
  <div class="panel panel--shot" :class="{ 'panel--phone': phone }">
    <img :src="src" :alt="alt" loading="lazy" decoding="async">
  </div>
</template>
