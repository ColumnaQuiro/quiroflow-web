<script setup lang="ts">
import type { ScreenKey } from '~/utils/screens'

// A section of feature cards, each with its title, one or two sentences and
// a small drawn panel (KitMini). layout "two-rows" puts four cards as two
// rows of two over two screens (.g2); "bento" puts five as a wide card and a
// narrow one, then three; "three" puts three in one row on one screen.
interface Card { title: string; body: string; rows: string[][]; tones?: string[]; shot?: { screen: ScreenKey; alt: string; phone?: boolean }; ill?: 'plan' | 'waitlist' | 'bono' | 'invoice' | 'reports' | 'rooms' | 'list' }
defineProps<{
  id: string
  h2: string
  muted?: string
  layout: 'two-rows' | 'bento' | 'three'
  cards: Card[]
  link?: { href: string; label: string }
}>()
</script>

<template>
  <section :id="id" class="section" :class="{ g2: layout !== 'three' }" :aria-labelledby="`${id}-h`">
    <div class="wrap">
      <div class="group">
        <div class="section-head">
          <h2 :id="`${id}-h`">{{ h2 }}<template v-if="muted">{{ ' ' }}<span class="muted">{{ muted }}</span></template></h2>
          <p v-if="link"><a class="link" :href="link.href">{{ link.label }}</a></p>
        </div>
        <div class="grid">
          <article
            v-for="(card, i) in (layout === 'three' ? cards : cards.slice(0, 2))"
            :key="card.title"
            class="card card--row card--open"
            :class="layout === 'three' ? 'span-4' : layout === 'bento' ? (i === 0 ? 'span-8' : 'span-4') : 'span-6'"
          >
            <h3>{{ card.title }}</h3>
            <p>{{ card.body }}</p>
            <KitShotPanel v-if="card.shot" :screen="card.shot.screen" :alt="card.shot.alt" :phone="card.shot.phone" />
            <KitIll v-else :kind="card.ill || 'list'" :rows="card.rows" />
          </article>
        </div>
      </div>
      <div v-if="layout !== 'three'" class="grid">
        <article
          v-for="card in cards.slice(2)"
          :key="card.title"
          class="card card--row card--open"
          :class="layout === 'bento' ? 'span-4' : 'span-6'"
        >
          <h3>{{ card.title }}</h3>
          <p>{{ card.body }}</p>
          <KitShotPanel v-if="card.shot" :screen="card.shot.screen" :alt="card.shot.alt" :phone="card.shot.phone" />
          <KitIll v-else :kind="card.ill || 'list'" :rows="card.rows" />
        </article>
      </div>
    </div>
  </section>
</template>
