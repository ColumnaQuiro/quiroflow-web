<script setup lang="ts">
import { SCREENS, type ScreenKey } from '~/utils/screens'

// A real screen of the app inside a card's panel, drawn at its own size (the
// file is 2x) and cut by the panel's right and bottom edges; the patient app
// stands whole in the middle.
const props = defineProps<{ screen: ScreenKey; alt: string; phone?: boolean }>()
const s = computed(() => SCREENS[props.screen])
</script>

<template>
  <div class="panel panel--shot" :class="{ 'panel--phone': phone }">
    <img :src="s.src" :alt="alt" :width="s.w" :height="s.h" :style="phone ? undefined : { width: `${s.w}px` }" loading="lazy" decoding="async">
  </div>
</template>
