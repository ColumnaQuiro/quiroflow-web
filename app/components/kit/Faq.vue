<script setup lang="ts">
// faq (taste-skill): the h2 on the left line, every answer open on the right.
// The left column takes a link, or anything else through the default slot
// (the pricing page puts its email form there).
defineProps<{
  id: string
  h2: string
  lead: string
  items: { q: string; a: string }[]
  link?: { href: string; label: string }
  /** screens on a phone, when the column under the h2 makes it taller */
  hm?: number
}>()
</script>

<template>
  <section :id="id" class="section" :style="hm ? `--hm: ${hm}` : undefined" :aria-labelledby="`${id}-h`">
    <div class="wrap">
      <div class="grid">
        <div class="span-5 stack-5">
          <h2 :id="`${id}-h`">{{ h2 }}</h2>
          <p class="muted">{{ lead }}</p>
          <p v-if="link"><a class="link" :href="link.href">{{ link.label }}</a></p>
          <slot />
        </div>
        <div class="faq span-6 start-7">
          <div v-for="item in items" :key="item.q" class="faq__item">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
