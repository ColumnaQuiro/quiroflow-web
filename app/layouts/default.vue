<template>
  <!-- tw-legacy: the scope of the Tailwind reset (assets/css/legacy-preflight.css)
       for the pages not yet moved to the kit layout. -->
  <div class="tw-legacy bg-white">
    <TheHeader />
    <slot />
    <TheFooter />
    <!-- ClientOnly because whether the banner shows depends on localStorage,
         which the server cannot know. The layout is loaded asynchronously, so
         it hydrates after app:mounted has already read the stored choice --
         leaving the client expecting a banner the server never rendered.
         Excluding it from hydration entirely is timing-independent; deferring
         the read was not. -->
    <ClientOnly>
      <ConsentBanner />
    </ClientOnly>
  </div>
</template>
