<template>
  <footer id="contacto" class="border-t border-line py-14">
    <div class="mx-auto flex max-w-[1120px] flex-col gap-8 px-8">
      <div class="flex flex-wrap items-center justify-between gap-8">
        <div class="flex items-center gap-2.5">
          <LogoMark :size="22" />
          <span class="text-[15px] font-bold text-ink-900">QuiroFlow</span>
        </div>
        <nav class="flex flex-wrap gap-7">
          <a href="#funcionalidades" class="text-[13.5px] text-ink-muted hover:text-ink-900">Funcionalidades</a>
          <a href="#precios" class="text-[13.5px] text-ink-muted hover:text-ink-900">Precios</a>
          <a href="#practicehub" class="text-[13.5px] text-ink-muted hover:text-ink-900">Cambiar desde PracticeHub</a>
          <span class="text-[13.5px] italic text-ink-faint">[email de contacto]</span>
        </nav>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-line-control/60 pt-6">
        <p class="text-[12.5px] text-ink-faint">© 2026 QuiroFlow. Todos los derechos reservados.</p>
        <div class="flex gap-[18px]">
          <span class="text-[12.5px] italic text-ink-faint">[Política de privacidad]</span>
          <span class="text-[12.5px] italic text-ink-faint">[Términos y condiciones]</span>
        </div>
      </div>
    </div>
  </footer>
</template>
