// Runs the plain-JS kit (public/kit) on the pages that use the "kit" layout.
//
// The kit's scripts start themselves when they load and change the DOM
// (menus, fragments, loops, the hero's entrance). They are loaded here only
// after Vue has hydrated the page, so Vue never finds nodes it did not
// render and removes them. They cannot be started twice without doubling
// their listeners, so moving to or from a kit page is a full page load
// instead of a client-side route change: each kit page boots the kit once.
const KIT_SCRIPTS = ['/kit/system.js', '/kit/motion/motion.js', '/kit/layout/layout.js', '/kit/diagrams/mount.js']

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const isKit = (layout: unknown) => layout === 'kit'

  router.beforeEach((to, from) => {
    if (!from.matched.length || to.path === from.path) return
    if (isKit(to.meta.layout) || isKit(from.meta.layout)) {
      window.location.assign(to.fullPath)
      return false
    }
  })

  let booted = false
  nuxtApp.hook('app:suspense:resolve', async () => {
    if (booted || !isKit(router.currentRoute.value.meta.layout)) return
    booted = true
    for (const src of KIT_SCRIPTS) {
      try {
        await import(/* @vite-ignore */ src)
      }
      catch (e) {
        console.warn('kit: could not load', src, e)
      }
    }
  })
})
