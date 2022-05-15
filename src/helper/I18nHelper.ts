import { I18n, createI18n, Composer } from 'vue-i18n';

import defaultLanguage from '@/locales/zh-TW.json';
import enUsSvg from '@/assets/svg/country-flags/en-US.svg';
import twUsSvg from '@/assets/svg/country-flags/zh-TW.svg';
import cnUsSvg from '@/assets/svg/country-flags/zh-CN.svg';

export type LanguagesType = 'zh-TW' | 'en-US' | 'zh-CN';

export type i18nType = I18n<
  Record<LanguagesType, typeof defaultLanguage>,
  unknown,
  unknown
>;
export type useI18nType = Composer<
  Record<LanguagesType, typeof defaultLanguage>
>;

export class I18nHelper {
  static countryFlags: Record<LanguagesType | string, string> = {
    'zh-TW': twUsSvg,
    'en-US': enUsSvg,
    'zh-CN': cnUsSvg,
  };
  static defaultLocale: LanguagesType = 'zh-TW';
  static get locale(): LanguagesType {
    const storageLocal = <LanguagesType>localStorage.getItem('locale');

    // If user has set the locale in localStorage, use it
    if (storageLocal && this.locales.includes(storageLocal))
      return storageLocal;

    const browserLocale = <LanguagesType>navigator.language;

    // Set the locale by the browser's language
    if (this.locales.includes(browserLocale as LanguagesType))
      return browserLocale;

    return this.defaultLocale;
  }

  static locales: LanguagesType[] = [this.defaultLocale, 'en-US', 'zh-CN'];

  private static i18n: i18nType | null;

  static async load(): Promise<i18nType> {
    const messages: Record<LanguagesType | string, typeof defaultLanguage> = {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const files: Record<string, () => Promise<any>> = import.meta.glob(
      '@/locales/*.json'
    );
    for (const locale of this.locales) {
      messages[locale] = (await files[`../locales/${locale}.json`]()).default;
    }

    const i18n: i18nType = createI18n({
      fallbackLocale: 'en-US',
      locale: this.locale,
      messages,
    });

    this.i18n = i18n;

    this.setTitle();

    return i18n;
  }

  private static setTitle() {
    if (this.i18n == null) return;
    document.title = this.i18n.global.t('app.title');
  }

  static setLocale(locale: string) {
    if (this.i18n) this.i18n.global.locale = locale;
    window.localStorage.setItem('locale', locale);
    this.setTitle();
  }
}

export default I18nHelper;
