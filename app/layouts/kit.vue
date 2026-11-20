<script setup lang="ts">
// Layout of the redesigned pages: the plain CSS and JS kit in public/kit
// (taste-skill), with QuiroFlow's brand layer (public/kit/brand.css) last.
// The kit's scripts are started by plugins/kit.client.ts after hydration.
// The <html> data-* attributes are the kit's dealt look: software page,
// soft radius, the lit ground behind UI, buttons with the drawn arrow.
const KIT_CSS = [
  '/kit/system.css',
  '/kit/ui/cards.css',
  '/kit/motion/motion.css',
  '/kit/backgrounds/backgrounds.css',
  '/kit/layout/layout.css',
  '/kit/icons/icon.css',
  '/kit/ui/base.css',
  '/kit/ui/window/fragment.css',
  '/kit/ui/chat/fragment.css',
  '/kit/diagrams/diagram.css',
  '/kit/brand.css',
]

useHead({
  htmlAttrs: {
    'data-type': 'software',
    'data-radius': 'soft',
    'data-ground': 'sky',
    'data-buttons': 'arrow',
    'data-motion': '',
  },
  meta: [
    { name: 'site-kind', content: 'software' },
    { name: 'page-type', content: 'software' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  link: [
    ...KIT_CSS.map(href => ({ rel: 'stylesheet', href })),
    { rel: 'modulepreload', href: '/kit/system.js' },
    { rel: 'modulepreload', href: '/kit/moments/moments.js' },
    { rel: 'modulepreload', href: '/kit/moments/lib.js' },
  ],
  script: [
    // The hero's words wait for motion.js to fade them in; the 700 ms mark
    // shows them anyway if the script is late. mo-js / mo-safe do the same
    // for the dealt scroll moments.
    { innerHTML: "document.documentElement.classList.add('m-enter');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700)" },
    { innerHTML: "document.documentElement.classList.add('mo-js');setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500)" },
  ],
})
</script>

<template>
  <div class="kit-root">
    <KitHeader />
    <slot />
    <KitFooter />
    <!-- The consent banner is still built with Tailwind, so it keeps the
         legacy reset around it. ClientOnly for the reason given in
         layouts/default.vue. -->
    <ClientOnly>
      <div class="tw-legacy">
        <ConsentBanner />
      </div>
    </ClientOnly>
  </div>
</template>
