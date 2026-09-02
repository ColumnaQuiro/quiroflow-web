<script setup lang="ts">
withDefaults(defineProps<{ size?: number; color?: string }>(), { size: 26, color: '#4F46E5' })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" fill="none">
    <rect x="29" y="8" width="42" height="18" rx="9" :fill="color" />
    <rect x="44.6" y="32" width="42" height="18" rx="9" :fill="color" />
    <rect x="13.4" y="56" width="42" height="18" rx="9" :fill="color" />
    <rect x="29" y="80" width="42" height="18" rx="9" :fill="color" />
  </svg>
</template>
