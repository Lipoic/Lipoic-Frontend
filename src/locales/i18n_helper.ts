import { I18n, createI18n } from 'vue-i18n';

type i18nType = I18n<
  Record<string, Record<string, string>>,
  unknown,
  unknown,
  true
>;

class I18nHelper {
  static defaultLocale = 'zh-TW';
  static get locale(): string {
    const storageLocal = window.localStorage.getItem('locale');

    // If user has set the locale in localStorage, use it
    if (storageLocal != null && this.locales.includes(storageLocal)) {
      return storageLocal;
    } else {
      const browserLocale = navigator.language;

      // Set the locale by the browser's language
      if (this.locales.includes(browserLocale)) {
        return browserLocale;
      } else {
        return this.defaultLocale;
      }
    }
  }

  static locales: Array<string> = [this.defaultLocale, 'en-US', 'zh-CN'];

  private static i18n: i18nType | null;

  static async load(): Promise<i18nType> {
    const messages: Record<string, Record<string, string>> = {};

    const files = import.meta.glob('@/locales/*.json');
    for (const locale of this.locales) {
      messages[locale] = (await files[`./${locale}.json`]()).default;
    }

    const i18n = createI18n({
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
    if (this.i18n != null) {
      this.i18n.global.locale = locale;
    }
    window.localStorage.setItem('locale', locale);
    this.setTitle();
  }
}

export default I18nHelper;
