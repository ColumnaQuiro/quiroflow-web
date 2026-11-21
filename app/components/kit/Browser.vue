<script setup lang="ts">
import { SCREENS, type ScreenKey } from '~/utils/screens'

// A real screen of the app in a browser window (its bar and address), for
// the large product shots on the brand stage.
const props = defineProps<{ screen: ScreenKey; alt: string; eager?: boolean }>()
const s = computed(() => SCREENS[props.screen])
</script>

<template>
  <div class="browser">
    <div class="browser__bar" aria-hidden="true"><i /><i /><i /><span>app.quiroflow.com</span></div>
    <img :src="s.src" :alt="alt" :width="s.w" :height="s.h" :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : undefined" decoding="async">
  </div>
</template>
