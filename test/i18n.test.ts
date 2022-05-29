import { expect, test, vi, describe, beforeAll } from 'vitest';
import I18nHelper from '@/helper/I18nHelper';

describe('get locale', () => {
  test('get locale', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue('en-US');
    expect(I18nHelper.locale).toEqual('en-US');
  });

  test('get locale with unknown locale', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('unknown');

    expect(I18nHelper.locale).toEqual(I18nHelper.defaultLocale);
  });

  test('get locale with unknown default locale', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('unknown');
    vi.spyOn(I18nHelper, 'defaultLocale', 'get').mockReturnValue('unknown');

    expect(I18nHelper.locale).toEqual('unknown');
  });
});

describe('load i18n files', () => {
  beforeAll(async () => {
    vi.spyOn(I18nHelper, 'defaultLocale', 'get').mockReturnValue('en-US');

    await I18nHelper.load();
    expect(I18nHelper.i18n).toBeDefined();
  });

  test('check flags', async () => {
    for (const locale of I18nHelper.locales) {
      expect(I18nHelper.flags[locale]).toBeDefined();
    }
  });

  test('check messages', async () => {
    for (const locale of I18nHelper.locales) {
      expect(
        I18nHelper.i18n?.global.getLocaleMessage(locale).name
      ).toBeDefined();
    }
  });

  test('check document title', async () => {
    expect(document.title).toEqual(I18nHelper.i18n?.global.t('app.title'));
  });
});

test('set locale', async () => {
  await I18nHelper.load();

  vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
  vi.spyOn(navigator, 'language', 'get').mockReturnValue('unknown');
  vi.spyOn(I18nHelper, 'defaultLocale', 'get').mockReturnValue('unknown');

  expect(I18nHelper.locale).toEqual('unknown');
  vi.restoreAllMocks();

  I18nHelper.setLocale('zh-TW');
  expect(I18nHelper.locale).toEqual('zh-TW');
  expect(document.title).toEqual(
    I18nHelper.i18n?.global.getLocaleMessage('zh-TW')['app.title']
  );
});
