import { es } from '~/i18n/es'
import { en } from '~/i18n/en'

const dictionaries = { es, en }

export function useT() {
  const { locale } = useLocale()

  function t(path: string): any {
    return path.split('.').reduce<any>((acc, key) => acc?.[key], dictionaries[locale.value]) ?? path
  }

  return t
}
