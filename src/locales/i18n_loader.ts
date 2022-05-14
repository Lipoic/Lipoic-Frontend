import { I18n, createI18n } from 'vue-i18n';

class i18nLoader {
  static defaultLocale = 'en_us';
  static locales: Array<string> = [this.defaultLocale, 'zh_cn', 'zh_tw'];

  static async load(): Promise<
    I18n<Record<string, Record<string, string>>, unknown, unknown, true>
  > {
    const i18nMessages: Record<string, Record<string, string>> = {};
    for (const locale of this.locales) {
      i18nMessages[locale] = (
        await import(`/src/locales/${locale}.json`)
      ).default;
    }

    return createI18n({
      fallbackLocale: this.defaultLocale,
      locale: this.defaultLocale,
      messages: i18nMessages,
    });
  }
}

export default i18nLoader;
