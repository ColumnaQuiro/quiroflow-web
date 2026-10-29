<script setup lang="ts">
const t = useT()
const { tm, rt } = useI18n()
const verbs = computed(() => (tm('hero.verbs') as unknown[]).map(v => rt(v as never)))

// The traveller dot is the one moving part; held still for anyone who asked
// for less motion.
const svg = ref<SVGSVGElement | null>(null)
onMounted(() => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) svg.value?.pauseAnimations?.()
})

const star = 'M18 30 l3 6 6.5 1 -4.7 4.6 1.1 6.4 -5.9 -3.1 -5.9 3.1 1.1 -6.4 -4.7 -4.6 6.5 -1z'
</script>

<template>
  <!-- The hero's argument drawn: one patient going round the five steps, with
       the one app in the middle. Each card is a step as the product shows it,
       with an invented patient and invented numbers. -->
  <svg ref="svg" viewBox="0 0 560 490" role="img" :aria-label="t('journey.aria')" class="h-auto w-full">
    <circle cx="280" cy="250" r="185" fill="none" stroke="#D8DCFB" stroke-width="2" stroke-dasharray="2 7" stroke-linecap="round" />
    <path id="journey-loop" d="M280,65 a185,185 0 1,1 -0.01,0" fill="none" />
    <circle r="6" fill="#4F46E5">
      <animateMotion dur="14s" repeatCount="indefinite"><mpath href="#journey-loop" /></animateMotion>
    </circle>

    <g transform="translate(205 190)">
      <rect width="150" height="120" rx="16" fill="#fff" stroke="#E8E9ED" />
      <rect x="53" y="16" width="44" height="44" rx="11" fill="#4F46E5" />
      <path d="M66 46 L72 30 L78 42 L84 34" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <text x="75" y="82" text-anchor="middle" fill="#15171E" font-size="15" font-weight="700">QuiroFlow</text>
      <text x="75" y="100" text-anchor="middle" fill="#4A4F60" font-size="10">{{ t('journey.center') }}</text>
    </g>

    <!-- Captar -->
    <g transform="translate(190 18)">
      <rect width="180" height="88" rx="11" fill="#fff" stroke="#E8E9ED" />
      <text x="12" y="20" fill="#3B32C9" font-size="10.5" font-weight="700" letter-spacing=".08em">{{ verbs[0]?.toUpperCase() }}</text>
      <rect x="12" y="30" width="156" height="46" rx="8" fill="#EEF0FE" />
      <circle cx="30" cy="53" r="10" fill="#4F46E5" />
      <text x="30" y="57" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">LG</text>
      <text x="46" y="49" fill="#15171E" font-size="11.5" font-weight="500">{{ t('journey.lead') }}</text>
      <text x="46" y="64" fill="#4A4F60" font-size="10">{{ t('journey.leadFrom') }}</text>
    </g>

    <!-- Atender -->
    <g transform="translate(386 132)">
      <rect width="166" height="104" rx="11" fill="#fff" stroke="#E8E9ED" />
      <text x="12" y="20" fill="#3B32C9" font-size="10.5" font-weight="700" letter-spacing=".08em">{{ verbs[1]?.toUpperCase() }}</text>
      <rect x="12" y="29" width="122" height="24" rx="9" fill="#EEF0FE" />
      <text x="20" y="45" fill="#2B3040" font-size="10">{{ t('journey.ask') }}</text>
      <rect x="22" y="59" width="136" height="34" rx="9" fill="#4F46E5" />
      <text x="30" y="73" fill="#fff" font-size="10" font-weight="600">{{ t('journey.reply') }}</text>
      <text x="30" y="86" fill="#fff" font-size="10" opacity=".8">{{ t('journey.replyBy') }}</text>
    </g>

    <!-- Tratar: posture -->
    <g transform="translate(336 340)">
      <rect width="176" height="132" rx="11" fill="#fff" stroke="#E8E9ED" />
      <text x="12" y="20" fill="#3B32C9" font-size="10.5" font-weight="700" letter-spacing=".08em">{{ verbs[2]?.toUpperCase() }}</text>
      <line x1="52" y1="30" x2="52" y2="122" stroke="#8A8FA0" stroke-dasharray="3 3" />
      <g stroke="#2B3040" stroke-width="2" fill="none">
        <circle cx="54" cy="40" r="8" />
        <line x1="54" y1="48" x2="51" y2="94" />
        <line x1="44" y1="94" x2="42" y2="122" />
        <line x1="60" y1="93" x2="62" y2="122" />
      </g>
      <g stroke="#4F46E5" stroke-width="2.5" stroke-linecap="round">
        <line x1="34" y1="58" x2="72" y2="64" />
        <line x1="38" y1="94" x2="66" y2="91" />
      </g>
      <text x="86" y="52" fill="#4A4F60" font-size="10">{{ t('journey.shoulders') }}</text>
      <text x="86" y="66" fill="#15171E" font-size="9.5" font-family="ui-monospace, Menlo, monospace">{{ t('journey.shouldersValue') }}</text>
      <text x="86" y="88" fill="#4A4F60" font-size="10">{{ t('journey.pelvis') }}</text>
      <text x="86" y="102" fill="#15171E" font-size="9.5" font-family="ui-monospace, Menlo, monospace">{{ t('journey.pelvisValue') }}</text>
      <text x="86" y="120" fill="#8A8FA0" font-size="10">{{ t('journey.plan') }}</text>
    </g>

    <!-- Cobrar: a VeriFactu invoice -->
    <g transform="translate(48 340)">
      <rect width="160" height="132" rx="11" fill="#fff" stroke="#E8E9ED" />
      <text x="12" y="20" fill="#3B32C9" font-size="10.5" font-weight="700" letter-spacing=".08em">{{ verbs[3]?.toUpperCase() }}</text>
      <text x="12" y="40" fill="#15171E" font-size="9.5" font-family="ui-monospace, Menlo, monospace">F2027-0142</text>
      <text x="12" y="56" fill="#4A4F60" font-size="10">{{ t('journey.invoiceItem') }}</text>
      <text x="12" y="74" fill="#15171E" font-size="15" font-weight="700">{{ t('journey.amount') }}</text>
      <g transform="translate(104 30)" fill="#15171E">
        <rect width="12" height="12" /><rect x="2.5" y="2.5" width="7" height="7" fill="#fff" /><rect x="4.5" y="4.5" width="3" height="3" />
        <rect x="30" width="12" height="12" /><rect x="32.5" y="2.5" width="7" height="7" fill="#fff" /><rect x="34.5" y="4.5" width="3" height="3" />
        <rect y="30" width="12" height="12" /><rect x="2.5" y="32.5" width="7" height="7" fill="#fff" /><rect x="4.5" y="34.5" width="3" height="3" />
        <rect x="16" y="2" width="4" height="4" /><rect x="22" y="8" width="4" height="4" /><rect x="16" y="16" width="4" height="4" />
        <rect x="26" y="18" width="4" height="4" /><rect x="34" y="20" width="4" height="4" /><rect x="18" y="26" width="4" height="4" />
        <rect x="30" y="30" width="4" height="4" /><rect x="38" y="36" width="4" height="4" /><rect x="22" y="36" width="4" height="4" />
      </g>
      <text x="104" y="86" fill="#8A8FA0" font-size="7.5" font-weight="700" letter-spacing=".04em">VERI*FACTU</text>
      <rect x="12" y="98" width="136" height="22" rx="6" fill="#E9F6EF" />
      <text x="20" y="113" fill="#157F52" font-size="10" font-weight="600">{{ t('journey.accepted') }}</text>
    </g>

    <!-- Fidelizar -->
    <g transform="translate(8 132)">
      <rect width="166" height="104" rx="11" fill="#fff" stroke="#E8E9ED" />
      <text x="12" y="20" fill="#3B32C9" font-size="10.5" font-weight="700" letter-spacing=".08em">{{ verbs[4]?.toUpperCase() }}</text>
      <g fill="#E8A317">
        <path v-for="i in 5" :key="i" :d="star" :transform="`translate(${4 + (i - 1) * 18} 0)`" />
      </g>
      <text x="110" y="45" fill="#4A4F60" font-size="10">Google</text>
      <text x="12" y="70" fill="#2B3040" font-size="10">{{ t('journey.review') }}</text>
      <text x="12" y="88" fill="#2B3040" font-size="10">{{ t('journey.recall') }}</text>
    </g>
  </svg>
</template>
