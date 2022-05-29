import { I18n, createI18n, Composer } from 'vue-i18n';

import defaultLanguage from '@/locales/zh-TW.json';

export type i18nType = I18n<
  Record<string, typeof defaultLanguage>,
  unknown,
  unknown
>;
export type useI18nType = Composer<Record<string, typeof defaultLanguage>>;

export default class I18nHelper {
  static defaultLocale = 'en-US';
  static get locale(): string {
    /// get locale from localStorage or the browser's language
    const storageLocal = localStorage.getItem('locale') || navigator.language;

    // If user has set the locale in localStorage, use it
    if (
      this.locales.some((_) => _.toLowerCase() === storageLocal.toLowerCase())
    ) {
      return storageLocal;
    }

    return this.defaultLocale;
  }

  static locales: string[] = [this.defaultLocale, 'zh-TW', 'zh-CN'];
  static flags: Record<string, string> = {};
  private static i18n: i18nType | null;

  static async load(): Promise<i18nType> {
    const messages: Record<string | string, typeof defaultLanguage> = {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const files: Record<string, () => Promise<any>> = import.meta.glob(
      '@/locales/*.json'
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const flagsFiles: Record<string, () => Promise<any>> = import.meta.glob(
      '@/assets/svg/flags/*.svg'
    );
    for (const locale of this.locales) {
      messages[locale] = (await files[`../locales/${locale}.json`]()).default;

      this.flags[locale] = (
        await flagsFiles[`../assets/svg/flags/${locale}.svg`]()
      ).default;
    }

    const i18n: i18nType = createI18n({
      fallbackLocale: this.defaultLocale,
      locale: this.locale,
      messages,
    });

    this.i18n = i18n;

    this.setTitle();

    return i18n;
  }

  private static setTitle() {
    if (!this.i18n) return;
    document.title = this.i18n.global.t('app.title');
  }

  static setLocale(locale: string) {
    if (this.i18n) this.i18n.global.locale = locale;

    localStorage.setItem('locale', locale);
    this.setTitle();
  }
}
