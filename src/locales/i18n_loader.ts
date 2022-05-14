import { I18n, createI18n } from 'vue-i18n';

class i18nLoader {
  static defaultLocale = 'en_us';
  static locales: Array<string> = [this.defaultLocale, 'zh_tw', 'zh_cn'];

  static async load(): Promise<
    I18n<Record<string, Record<string, string>>, unknown, unknown, true>
  > {
    const messages: Record<string, Record<string, string>> = {};

    const files = import.meta.glob('@/locales/*.json');
    for (const locale of this.locales) {
      messages[locale] = (await files[`./${locale}.json`]()).default;
    }

    return createI18n({
      fallbackLocale: this.defaultLocale,
      locale: this.defaultLocale,
      messages: messages,
    });
  }
}

export default i18nLoader;
