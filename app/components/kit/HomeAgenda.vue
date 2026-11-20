<script setup lang="ts">
// app-frame (taste-skill): the product big, the day's list beside the open
// patient record, in one app window across the .wrap.
const c = useCopy()
const a = computed(() => c('home.agenda'))
const localePath = useLocalePath()
</script>

<template>
  <section id="agenda" class="section" aria-labelledby="agenda-h">
    <div class="wrap">
      <div class="grid">
        <h2 id="agenda-h" class="span-5">{{ a.h2 }}</h2>
        <p class="span-6 start-7 muted">{{ a.lead }} <a class="link" :href="localePath('funcionalidades')">{{ a.link }}</a></p>
      </div>
      <div class="ui app fill" role="img" :aria-label="a.aria" data-ui-pause-host>
        <div class="app__pane app__pane--list">
          <KitWindow :w="a.window" />
        </div>
        <div class="app__pane app__pane--open">
          <div class="ui-panel ficha">
            <div class="ficha__top"><span class="ui-avatar" data-tone="3">ER</span><b>{{ a.record.name }}</b><span>{{ a.record.sub }}</span><span class="ui-spacer" /><span class="chip s2">{{ a.record.status }}</span></div>
            <div class="ficha__grid">
              <div class="ficha__box">
                <p class="ficha__label">{{ a.record.plan[0] }}</p>
                <p><strong>{{ a.record.plan[1] }}</strong> · {{ a.record.plan[2] }}</p>
                <div class="weeks" aria-hidden="true"><i class="on" /><i class="on" /><i class="on" /><i class="on" /><i class="late" /><i /><i /><i /><i /><i /><i /><i /></div>
                <p>{{ a.record.plan[3] }}</p>
              </div>
              <div class="ficha__box">
                <p class="ficha__label">{{ a.record.bono[0] }}</p>
                <p><strong>{{ a.record.bono[1] }}</strong> {{ a.record.bono[2] }}</p>
                <p>{{ a.record.bono[3] }}</p>
                <p>{{ a.record.bono[4] }}</p>
              </div>
            </div>
            <div class="ficha__rows">
              <div v-for="r in a.record.rows" :key="r[0]"><span>{{ r[0] }}</span><span>{{ r[1] }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
