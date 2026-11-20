<script setup lang="ts">
// A one-screen statement with the dealt word-highlight moment: the sentence
// rests at half ink and turns to ink word by word as it crosses the screen.
defineProps<{ id: string; copy: { label: string; before: string; strong: string; after: string } }>()
</script>

<template>
  <section :id="id" class="section statement" data-moment="word-highlight" :aria-label="copy.label">
    <div class="wrap">
      <p class="t-label">{{ copy.label }}</p>
      <p class="mo-wh__text">{{ copy.before }}<strong>{{ copy.strong }}</strong>{{ copy.after }}</p>
    </div>
  </section>
</template>
