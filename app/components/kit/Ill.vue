<script setup lang="ts">
// Illustrations of one feature, drawn from the app's own pieces (the care
// plan's periods, a bono's bar, an invoice with its QR, the rooms of a day):
// one or two clean cards on the brand tint, a notification floating over
// them, numbered steps and a dotted line where the feature is a sequence.
// Crisp at any size, never a screenshot cut mid-line. The words come from
// the copy (rows), so they follow the page's language.
type Kind = 'plan' | 'waitlist' | 'bono' | 'invoice' | 'reports' | 'rooms' | 'list'
const props = defineProps<{ kind: Kind; rows: string[][]; extra?: string[][] }>()
const r = computed(() => props.rows)
const head = computed(() => r.value[0]?.[0] ?? '')
const body = computed(() => r.value.slice(1))
const tone = (v?: string) => {
  const t = (v || '').toLowerCase()
  if (/día|track|jour|cobrad|paid|pay|acept|accept|reserv|booked|confirm|hecho|done|termin|libre|free|incluid|included|inclus|firmad|signed/.test(t)) return 'ok'
  if (/cancel|retras|behind|retard|días|days|jours|sin confirmar|not confirmed|non confirm/.test(t)) return 'late'
  return 'info'
}
const PERIODS = [['2/2', 'ok'], ['2/2', 'ok'], ['1/2', 'late'], ['0/2', 'late'], ['0/2', 'now']]
const BARS = [38, 52, 46, 61, 58, 70, 82]
</script>

<template>
  <div class="panel panel--ill" :data-ill="kind" aria-hidden="true">
    <!-- care plan: a plan's periods, the late one flagged -->
    <template v-if="kind === 'plan'">
      <div class="il-card il-main">
        <p class="il-title">{{ head }}</p>
        <div v-for="(row, i) in body.slice(0, 2)" :key="row[0]" class="il-plan">
          <div class="il-row"><span>{{ row[0] }}</span><span class="il-badge" :class="tone(row[1])">{{ row[1] }}</span></div>
          <div class="il-periods">
            <span v-for="(p, j) in PERIODS" :key="j" :class="i === 0 ? p[1] : 'ok'">{{ i === 0 ? p[0] : '2/2' }}</span>
          </div>
        </div>
      </div>
      <div class="il-toast il-sec il-at-br"><span class="il-icon late">!</span><span><b>{{ body[0]?.[0] }}</b><small>{{ body[0]?.[1] }}</small></span></div>
    </template>

    <!-- waitlist: the cancelled slot, offered on WhatsApp, booked -->
    <template v-else-if="kind === 'waitlist'">
      <span class="il-step il-s1">1</span>
      <div class="il-card il-slot">
        <p class="il-title">{{ head }}</p>
        <div class="il-row"><s>{{ body[0]?.[0] }}</s><span class="il-badge late">{{ body[0]?.[1] }}</span></div>
      </div>
      <span class="il-dots" />
      <span class="il-step il-s2">2</span>
      <div class="il-toast il-offer"><span class="il-icon wa" /><span><b>WhatsApp</b><small>{{ body[1]?.[0] }}</small></span><span class="il-badge ok">{{ body[1]?.[1] }}</span></div>
      <div v-if="extra" class="il-card il-sec il-list">
        <p class="il-title">{{ extra[0]?.[0] }}</p>
        <div v-for="row in extra.slice(1)" :key="row[0]" class="il-row"><span>{{ row[0] }}</span><span class="il-badge info">{{ row[1] }}</span></div>
      </div>
    </template>

    <!-- bono: sessions used on its bar, the membership charged -->
    <template v-else-if="kind === 'bono'">
      <div class="il-card il-main">
        <div class="il-row il-big"><b>{{ head }}</b><span>{{ r[0]?.[1] }}</span></div>
        <div class="il-bar"><i style="width: 30%" /></div>
        <div class="il-row"><span>{{ body[0]?.[0] }}</span><b>{{ body[0]?.[1] }}</b></div>
        <div class="il-btns"><span class="il-btn">+1</span><span class="il-btn ghost">…</span></div>
      </div>
      <div class="il-toast il-sec il-at-br"><span class="il-icon ok">✓</span><span><b>{{ body[1]?.[0] }}</b><small>{{ body[2]?.[0] }} · {{ body[2]?.[1] }}</small></span><span class="il-badge ok">{{ body[1]?.[1] }}</span></div>
    </template>

    <!-- invoice: the document with its QR, chained, accepted by the AEAT -->
    <template v-else-if="kind === 'invoice'">
      <div class="il-card il-doc">
        <div class="il-row il-big"><b>{{ head }}</b><span>{{ r[0]?.[1] }}</span></div>
        <div class="il-lines"><i /><i /><i style="width: 60%" /></div>
        <div class="il-row il-qr-row"><span class="il-qr" /><small>{{ body[0]?.[0] }}</small></div>
      </div>
      <div class="il-toast il-sec il-at-br"><span class="il-icon ok">✓</span><span><b>{{ body[1]?.[0] }}</b><small>VERI*FACTU</small></span><span class="il-badge ok">{{ body[1]?.[1] }}</span></div>
    </template>

    <!-- reports: two figures and the month's bars -->
    <template v-else-if="kind === 'reports'">
      <div class="il-card il-main">
        <p class="il-title">{{ head }}</p>
        <div class="il-kpis">
          <div v-for="row in body" :key="row[0]"><small>{{ row[0] }}</small><b>{{ row[1] }}</b></div>
        </div>
        <div class="il-chart"><i v-for="(h, j) in BARS" :key="j" :style="{ height: `${h}%` }" :class="{ on: j === BARS.length - 1 }" /></div>
      </div>
    </template>

    <!-- rooms: the day across three rooms, one patient arrived -->
    <template v-else-if="kind === 'rooms'">
      <div class="il-card il-main il-rooms">
        <p class="il-title">{{ head }}</p>
        <div class="il-cols">
          <div v-for="(row, j) in body" :key="row[0]" class="il-col">
            <span class="il-appt" :class="`c${j}`"><b>{{ row[0] }}</b><small>{{ row[1] }}</small></span>
          </div>
        </div>
      </div>
      <div class="il-toast il-sec il-at-br"><span class="il-icon ok">✓</span><span><b>{{ body[1]?.[0] }}</b><small>{{ body[1]?.[1] }}</small></span></div>
    </template>

    <!-- any other feature: its card, and its last line as the notification -->
    <template v-else>
      <div class="il-card il-main">
        <p class="il-title">{{ head }}</p>
        <div v-for="row in body.slice(0, -1)" :key="row[0]" class="il-row"><span>{{ row[0] }}</span><span v-if="row[1]" class="il-badge" :class="tone(row[1])">{{ row[1] }}</span></div>
      </div>
      <div v-if="body.length" class="il-toast il-sec il-at-br"><span class="il-icon" :class="tone(body[body.length - 1]![1])">✓</span><span><b>{{ body[body.length - 1]![0] }}</b><small v-if="body[body.length - 1]![1]">{{ body[body.length - 1]![1] }}</small></span></div>
    </template>
  </div>
</template>
