<script setup lang="ts">
import { SIGNUP_URL } from '~/utils/links'

// nav-mega (taste-skill): one fixed bar, two words open a full-width panel.
// Plain <a> links, not NuxtLink: moving between kit pages is a full load
// (plugins/kit.client.ts), so there is nothing for the router to do.
const c = useCopy()
const site = computed(() => c('site'))
const localePath = useLocalePath()
const features = (hash = '') => `${localePath('funcionalidades')}${hash ? `#${hash}` : ''}`
const home = (hash: string) => `${localePath('index')}#${hash}`
</script>

<template>
  <header class="nav">
    <div class="wrap nav__bar">
      <a class="skip-link" href="#top">{{ site.skip }}</a>
      <a class="nav__logo" :href="localePath('index')"><KitLogo />QuiroFlow</a>
      <nav class="nav__links" :aria-label="site.nav.product">
        <div class="nav__item">
          <a class="nav__link" :href="features()">{{ site.nav.product }} <svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a>
          <div class="nav__menu">
            <div class="wrap grid">
              <div class="menu-col span-3">
                <p class="t-label">{{ site.productMenu.reception }}</p>
                <a :href="features('recepcionista')">{{ site.productMenu.receptionist[0] }}<span>{{ site.productMenu.receptionist[1] }}</span></a>
                <a :href="features('consulta')">{{ site.productMenu.agenda[0] }}<span>{{ site.productMenu.agenda[1] }}</span></a>
                <a :href="features('consulta')">{{ site.productMenu.waitlist[0] }}<span>{{ site.productMenu.waitlist[1] }}</span></a>
                <a :href="localePath('automatizaciones')">{{ site.productMenu.automations[0] }}<span>{{ site.productMenu.automations[1] }}</span></a>
              </div>
              <div class="menu-col span-3">
                <p class="t-label">{{ site.productMenu.clinic }}</p>
                <a :href="features('cobros')">{{ site.productMenu.billing[0] }}<span>{{ site.productMenu.billing[1] }}</span></a>
                <a :href="features('cobros')">{{ site.productMenu.verifactu[0] }}<span>{{ site.productMenu.verifactu[1] }}</span></a>
                <a :href="features('reservas')">{{ site.productMenu.app[0] }}<span>{{ site.productMenu.app[1] }}</span></a>
                <a :href="features()">{{ site.productMenu.all[0] }}<span>{{ site.productMenu.all[1] }}</span></a>
              </div>
              <a class="menu-card span-3 start-10" :href="features('recepcionista')">
                <div class="panel">
                  <div class="mini mini--sm">
                    <div>{{ site.productMenu.cardMock[0] }}</div>
                    <div>{{ site.productMenu.cardMock[1] }}<span class="chip s2">{{ site.productMenu.cardMock[2] }}</span></div>
                    <div>{{ site.productMenu.cardMock[3] }}</div>
                  </div>
                </div>
                <span class="t-card">{{ site.productMenu.cardTitle }}</span>
                <span class="t-small muted">{{ site.productMenu.cardLine }}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="nav__item">
          <a class="nav__link" :href="home('clinicas')">{{ site.nav.clinics }} <svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a>
          <div class="nav__menu">
            <div class="wrap grid">
              <div class="menu-col span-3">
                <p class="t-label">{{ site.clinicsMenu.title }}</p>
                <a :href="localePath('software-quiropractica')">{{ site.clinicsMenu.chiro[0] }}<span>{{ site.clinicsMenu.chiro[1] }}</span></a>
                <a :href="localePath('software-fisioterapia')">{{ site.clinicsMenu.physio[0] }}<span>{{ site.clinicsMenu.physio[1] }}</span></a>
              </div>
              <div class="menu-col span-3">
                <p class="t-label" aria-hidden="true">&nbsp;</p>
                <a :href="localePath('software-osteopatia')">{{ site.clinicsMenu.osteo[0] }}<span>{{ site.clinicsMenu.osteo[1] }}</span></a>
                <a :href="localePath('software-podologia')">{{ site.clinicsMenu.podo[0] }}<span>{{ site.clinicsMenu.podo[1] }}</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="nav__item"><a class="nav__link" :href="localePath('precios')">{{ site.nav.pricing }}</a></div>
        <div class="nav__item"><a class="nav__link" :href="localePath('cambiar-de-programa')">{{ site.nav.switch }}</a></div>
        <div class="nav__item"><a class="nav__link" :href="localePath('comparativa')">{{ site.nav.compare }}</a></div>
      </nav>
      <div class="nav__actions">
        <a class="nav__link" href="https://app.quiroflow.com">{{ site.signIn }}</a>
        <a class="btn btn--primary" :href="SIGNUP_URL">{{ site.cta }}</a>
      </div>
      <button class="nav__toggle" type="button" aria-expanded="false" :aria-label="site.menu">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>
      </button>
    </div>
  </header>
</template>
