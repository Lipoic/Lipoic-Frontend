import { I18n, createI18n } from 'vue-i18n';

class i18nLoader {
  static defaultLocale = 'en_us';
  static locales: Array<string> = [this.defaultLocale, 'zh_cn', 'zh_tw'];

  static load(): I18n<
    Record<string, Record<string, string>>,
    unknown,
    unknown,
    true
  > {
    const i18nMessages: Record<string, Record<string, string>> = {};

    const i18nFiles = import.meta.glob('./*.json');
    for (const locale of this.locales) {
      i18nFiles[locale]().then((data) => (i18nMessages[locale] = data));
    }

    return createI18n({
      fallbackLocale: this.defaultLocale,
      locale: this.defaultLocale,
      messages: i18nMessages,
    });
  }
}

export default i18nLoader;
