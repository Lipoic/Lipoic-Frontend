import { I18n, createI18n } from 'vue-i18n';

import en_us from './en_us.json';
import zh_cn from './zh_cn.json';
import zh_tw from './zh_tw.json';

class i18nLoader {
  static defaultLocale = 'en_us';
  static i18nFileValues = {
    en_us,
    zh_cn,
    zh_tw,
  };
  static locales: Array<string> = Object.keys(this.i18nFileValues);

  static async load(): Promise<
    I18n<Record<string, Record<string, string>>, unknown, unknown, true>
  > {
    const i18nMessages: Record<string, Record<string, string>> = {};

    for (const [language, i18nData] of Object.entries(this.i18nFileValues)) {
      i18nMessages[language] = i18nData;
    }

    return createI18n({
      fallbackLocale: this.defaultLocale,
      locale: this.defaultLocale,
      messages: i18nMessages,
    });
  }
}

export default i18nLoader;
