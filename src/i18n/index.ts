import en from './en'
import fr from './fr'

export type Lang = 'en' | 'fr'

export function useTranslations(lang: Lang) {
  return lang === 'fr' ? fr : en
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en'
}

export function localePath(lang: Lang, path: string): string {
  return `/${lang}${path}`
}
