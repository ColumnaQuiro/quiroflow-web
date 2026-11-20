<script setup lang="ts">
// The kit's "window" fragment (public/kit/ui/window): an app window with a
// sidebar and a list. ui.js runs its loop (the open rows are worked on one by
// one) once the kit scripts start. rows: [initials, name, detail, state
// ("" open, "done", "you"), state label, time].
interface WindowCopy {
  crumb: string
  view: string
  search: string
  side: string[][]
  views: string
  sideViews: string[]
  cols: string[]
  states: string[]
  rows: string[][]
}
defineProps<{ w: WindowCopy }>()
const TONES = [1, 3, 4, 2, 5, 3, 1, 4, 2, 5]
</script>

<template>
  <div class="ui ui-panel ui-win" data-ui="window" :data-open="w.states[0]" :data-work="w.states[1]" :data-done="w.states[2]">
    <div class="ui-win__bar">
      <span class="ui-dots" aria-hidden="true"><i /><i /><i /></span>
      <span class="ui-win__crumb">{{ w.crumb }} <i>/</i> <b>{{ w.view }}</b></span>
      <span class="ui-spacer" />
      <span class="ui-win__search" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg><span class="ui-win__ph">{{ w.search }}</span><span class="ui-kbd">/</span></span>
    </div>
    <div class="ui-win__body">
      <nav class="ui-win__side" aria-hidden="true">
        <span v-for="(s, i) in w.side" :key="s[0]" class="ui-win__nav" :class="{ 'is-on': i === 0 }">{{ s[0] }}<em v-if="s[1]">{{ s[1] }}</em></span>
        <span class="ui-win__label">{{ w.views }}</span>
        <span v-for="v in w.sideViews" :key="v" class="ui-win__nav">{{ v }}</span>
      </nav>
      <div class="ui-win__main">
        <div class="ui-win__cols" aria-hidden="true"><span v-for="col in w.cols" :key="col">{{ col }}</span></div>
        <ul class="ui-win__rows">
          <li v-for="(r, i) in w.rows" :key="r[1] + r[5]" class="ui-win__row" data-row>
            <span class="ui-avatar" :data-tone="TONES[i % TONES.length]">{{ r[0] }}</span>
            <span class="ui-win__who">{{ r[1] }}</span>
            <span class="ui-win__sub">{{ r[2] }}</span>
            <span class="ui-win__st" :class="{ 'is-done': r[3] === 'done', 'is-you': r[3] === 'you' }" data-st>{{ r[4] }}</span>
            <span class="ui-win__age">{{ r[5] }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
