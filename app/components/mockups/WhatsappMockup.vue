<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-1 text-xs font-semibold text-ink-faint">RECORDATORIO AUTOMÁTICO</p>
    <div class="mt-2 flex flex-col gap-1.5">
      <div class="max-w-[85%] self-start overflow-hidden rounded-[12px] rounded-bl-[3px] border border-line-control/60 bg-brand-tint">
        <p class="px-3.5 py-2.5 text-[13.5px] leading-[1.5] text-ink-600">Hola Ana 👋 Te recordamos tu cita mañana a las 10:00 con Marta.</p>
        <div class="border-t border-brand-tintBorder">
          <button type="button" class="w-full border-b border-brand-tintBorder px-3.5 py-2 text-center text-[12.5px] font-semibold text-brand-text">✅ Confirmar asistencia</button>
          <button type="button" class="w-full px-3.5 py-2 text-center text-[12.5px] font-semibold text-brand-text">🔁 Cambiar cita</button>
        </div>
      </div>
      <div class="max-w-[60%] self-end rounded-[12px] rounded-br-[3px] bg-brand px-3.5 py-2.5">
        <p class="text-[13.5px] leading-[1.5] text-white">Confirmado ✅</p>
      </div>
      <p class="mt-1.5 text-xs font-semibold text-ink-faint">MENSAJE ENTRANTE → BANDEJA QUIROFLOW</p>
      <div class="max-w-[85%] self-start rounded-[12px] rounded-bl-[3px] bg-surface-page px-3.5 py-2.5">
        <p class="text-[13.5px] leading-[1.5] text-ink-600">¿Puedo llevar a mi hijo a la misma cita?</p>
      </div>
    </div>
  </div>
</template>
