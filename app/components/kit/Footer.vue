<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { Locale } from '~/composables/useLocale'

// footer.closing (taste-skill): row 1 the close (close-type, the main action
// once more, word for word), row 2 the links on the dark ground.
const c = useCopy()
const site = computed(() => c('site'))
const { locale } = useLocale()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { reopen } = useConsent()

// Same constants and reasons as TheFooter.vue: the declaración responsable
// has to be reachable before a clinic buys (Orden HAC/1177/2024, art. 15.3),
// and an address with @ cannot live in a vue-i18n message.
const CONTACT_EMAIL = 'hola@quiroflow.com'
const DECLARATION_URL = 'https://app.quiroflow.com/legal/declaracion-responsable'

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
]
const localeHref = (l: Locale) => switchLocalePath(l) || localePath('index', l)
</script>

<template>
  <footer id="contact" class="footer closing footer--dark ground-inverse" aria-labelledby="close-h">
    <div class="wrap">
      <div class="closing__cta close--type">
        <div class="section-head">
          <h2 id="close-h">{{ site.close.title }}</h2>
          <p>{{ site.close.line }} <a class="link" :href="BOOKING_URL">{{ site.demoLong }}</a></p>
        </div>
        <a class="btn btn--primary btn--xl btn--wide" :href="SIGNUP_URL">{{ site.cta }}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8" /><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg></a>
      </div>
      <div class="closing__links">
        <div class="grid">
          <div class="span-4 stack-4">
            <a class="footer__mark" :href="localePath('index')"><KitLogo />QuiroFlow</a>
            <p class="footer__lede">{{ site.footer.lede }}</p>
          </div>
          <div class="span-2 footer__col">
            <h3>{{ site.footer.product }}</h3>
            <ul>
              <li><a :href="localePath('funcionalidades')">{{ site.footer.features }}</a></li>
              <li><a :href="localePath('automatizaciones')">{{ site.footer.automations }}</a></li>
              <li><a :href="localePath('precios')">{{ site.footer.pricing }}</a></li>
              <li><a :href="localePath('comparativa')">{{ site.footer.compare }}</a></li>
            </ul>
          </div>
          <div class="span-2 footer__col">
            <h3>{{ site.footer.clinics }}</h3>
            <ul>
              <li><a :href="localePath('software-quiropractica')">{{ site.clinicsMenu.chiro[0] }}</a></li>
              <li><a :href="localePath('software-fisioterapia')">{{ site.clinicsMenu.physio[0] }}</a></li>
              <li><a :href="localePath('software-osteopatia')">{{ site.clinicsMenu.osteo[0] }}</a></li>
              <li><a :href="localePath('software-podologia')">{{ site.clinicsMenu.podo[0] }}</a></li>
            </ul>
          </div>
          <div class="span-2 footer__col">
            <h3>{{ site.footer.switch }}</h3>
            <ul>
              <li><a :href="localePath('cambiar-de-programa')">{{ site.footer.migrate }}</a></li>
              <li><a :href="`${localePath('cambiar-de-programa')}#datos`">{{ site.footer.data }}</a></li>
              <li v-if="locale === 'es'"><a :href="localePath('verifactu-clinicas')">{{ site.footer.verifactuGuide }}</a></li>
            </ul>
          </div>
          <div class="span-2 footer__col">
            <h3>{{ site.footer.company }}</h3>
            <ul>
              <li><a :href="localePath('recursos')">{{ site.footer.resources }}</a></li>
              <li><a :href="BOOKING_URL">{{ site.footer.demo }}</a></li>
              <li><a :href="`mailto:${CONTACT_EMAIL}`">{{ site.footer.write }}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__legal">
          <span>&copy; 2026 QuiroFlow</span>
          <nav class="footer__legal-links" :aria-label="site.footer.terms">
            <a :href="localePath('politica-de-privacidad')">{{ site.footer.privacy }}</a>
            <a :href="localePath('aviso-legal')">{{ site.footer.terms }}</a>
            <a :href="DECLARATION_URL">{{ site.footer.declaration }}</a>
            <button type="button" class="footer__cookies" @click="reopen">{{ site.footer.cookies }}</button>
          </nav>
          <nav class="footer__langs" :aria-label="site.footer.language">
            <a
              v-for="l in LOCALES"
              :key="l.code"
              :href="localeHref(l.code)"
              :hreflang="l.code"
              :lang="l.code"
              :aria-current="l.code === locale ? 'true' : undefined"
            >{{ l.label }}</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
