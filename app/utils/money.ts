import type { Locale } from '~/composables/useLocale'

/** A whole-euro price as each locale writes it: 45 €, €45, 45 €. */
export function eur(amount: number, locale: Locale): string {
  return locale === 'en' ? `€${amount}` : `${amount} €`
}
