import { I18n, createI18n, useI18n } from 'vue-i18n';

type i18nType = I18n<
  Record<string, Record<string, string>>,
  unknown,
  unknown,
  true
>;

class I18nHelper {
  static defaultLocale = 'zh_tw';
  static get locale(): string {
    return window.localStorage.getItem('locale') || this.defaultLocale;
  }

  static locales: Array<string> = [this.defaultLocale, 'en_us', 'zh_cn'];

  private static i18n: i18nType | null;

  static async load(): Promise<i18nType> {
    const messages: Record<string, Record<string, string>> = {};

    const files = import.meta.glob('@/locales/*.json');
    for (const locale of this.locales) {
      messages[locale] = (await files[`./${locale}.json`]()).default;
    }

    const i18n = createI18n({
      fallbackLocale: 'en_us',
      locale: this.locale,
      messages: messages,
    });

    this.i18n = i18n;

    return i18n;
  }

  static setLocale(locale: string) {
    if (this.i18n != null) {
      this.i18n.global.locale = locale;
    }
    window.localStorage.setItem('locale', locale);
  }
}

export default I18nHelper;
