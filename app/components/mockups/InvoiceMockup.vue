<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-3 text-xs font-semibold text-ink-faint">FACTURA #0142</p>
    <div class="flex justify-between border-b border-line-control/60 py-2 text-[13.5px] text-ink-600">
      <span>Ajuste quiropráctico x1</span>
      <span class="font-semibold">45,00 €</span>
    </div>
    <div class="flex justify-between border-b border-line-control/60 py-2 text-[13.5px] text-ink-600">
      <span>Bono 10 sesiones</span>
      <span class="font-semibold">380,00 €</span>
    </div>
    <div class="flex justify-between py-2.5 text-[14px] font-bold text-ink-900">
      <span>Total</span>
      <span>425,00 €</span>
    </div>
    <div class="mt-2.5 flex flex-wrap gap-1.5">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-success-bg px-2.5 py-[5px] text-[11.5px] font-semibold text-success-text">
        Pago recurrente activo · Stripe
      </span>
      <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-2.5 py-[5px] text-[11.5px] font-semibold text-brand-text">
        Factura legal automática
      </span>
    </div>
  </div>
</template>
