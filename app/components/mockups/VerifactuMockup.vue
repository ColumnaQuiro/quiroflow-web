<script setup lang="ts">
const t = useT()

// A QR-shaped pattern, not a real code: the three finder squares plus a fixed
// scatter of modules. Scanning it must not lead anywhere, so it is drawn from
// a hard-coded bit string rather than encoded from a URL.
const SIZE = 21
const NOISE = '0110100101101001110100101100101011010010110100101011010010110100101101001011010011010110100101101001011010010110'
function inFinder(x: number, y: number) {
  const corner = (cx: number, cy: number) => x >= cx && x < cx + 7 && y >= cy && y < cy + 7
  return corner(0, 0) || corner(SIZE - 7, 0) || corner(0, SIZE - 7)
}
function finderOn(x: number, y: number) {
  const lx = x >= SIZE - 7 ? x - (SIZE - 7) : x
  const ly = y >= SIZE - 7 ? y - (SIZE - 7) : y
  const ring = lx === 0 || lx === 6 || ly === 0 || ly === 6
  const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4
  return ring || core
}
const modules = computed(() => {
  const cells: { x: number; y: number }[] = []
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const on = inFinder(x, y) ? finderOn(x, y) : NOISE[(x * 7 + y * 13) % NOISE.length] === '1'
      if (on) cells.push({ x, y })
    }
  }
  return cells
})
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-3 text-xs font-semibold text-ink-faint">{{ t('verifactu.visual.header') }}</p>
    <div class="flex justify-between border-b border-line-control/60 py-2 text-[13.5px] text-ink-600">
      <span>{{ t('verifactu.visual.item') }}</span>
      <span class="font-semibold">{{ t('verifactu.visual.itemPrice') }}</span>
    </div>
    <div class="flex justify-between py-2.5 text-[14px] font-bold text-ink-900">
      <span>{{ t('verifactu.visual.total') }}</span>
      <span>{{ t('verifactu.visual.totalPrice') }}</span>
    </div>
    <div class="mt-2 flex items-center gap-4 rounded-ctl border border-line-control/60 p-3">
      <svg :viewBox="`0 0 ${SIZE} ${SIZE}`" class="h-[72px] w-[72px] shrink-0" shape-rendering="crispEdges" aria-hidden="true">
        <rect v-for="m in modules" :key="`${m.x}-${m.y}`" :x="m.x" :y="m.y" width="1" height="1" class="fill-ink-900" />
      </svg>
      <div class="flex flex-col gap-1.5">
        <p class="text-[12px] font-semibold text-ink-600">{{ t('verifactu.visual.qrLabel') }}</p>
        <p class="text-[12px] text-ink-faint">{{ t('verifactu.visual.chained') }}</p>
        <span class="w-fit rounded-full bg-success-bg px-2.5 py-[4px] text-[11.5px] font-semibold text-success-text">
          {{ t('verifactu.visual.sent') }}
        </span>
      </div>
    </div>
  </div>
</template>
