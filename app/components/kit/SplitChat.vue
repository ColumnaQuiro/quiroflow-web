<script setup lang="ts">
// split-text-left (taste-skill): the heading, a few sentences and three
// facts on the left; on the right the receptionist's WhatsApp conversation
// rising out of the lit frame.
defineProps<{
  id: string
  h2: string
  lead: string
  rows: string[]
  link: { href: string; label: string }
  chat: any
  /** the real conversation screen; the drawn chat stands in without it */
  shot?: { alt: string }
}>()
</script>

<template>
  <section :id="id" class="section" :aria-labelledby="`${id}-h`">
    <div class="wrap">
      <div class="grid">
        <div class="span-5 stack-5">
          <h2 :id="`${id}-h`">{{ h2 }}</h2>
          <p class="t-lead">{{ lead }}</p>
          <ul class="rows">
            <li v-for="r in rows" :key="r"><span class="rows__name">{{ r }}</span></li>
          </ul>
          <p><a class="link" :href="link.href">{{ link.label }}</a></p>
        </div>
        <div v-if="shot" class="frame frame--split frame--tall stage-soft span-6 start-7">
          <img class="stage-soft__shot" src="/screens/recepcionista.webp" :alt="shot.alt" width="592" height="580" loading="lazy" decoding="async">
        </div>
        <div v-else class="frame frame--split frame--lit frame--tall span-6 start-7">
          <div class="stage stage--fade-b">
            <div class="at-rise to-edge fit" style="--fit-max:400px;--w:400px;--ax:max(24px, 50% - 200px);--ay:56px" data-ui-loop>
              <KitChat :chat="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
