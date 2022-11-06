import { expect, test, vi, describe, beforeAll } from 'vitest';
import I18nHelper from '@/helper/I18nHelper';
import { USER_LOCALES } from '@/api/user/type';

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

  test('get locale with other default locale', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('unknown');
    vi.spyOn(I18nHelper, 'defaultLocale', 'get').mockReturnValue('zh-TW');

    expect(I18nHelper.locale).toEqual('zh-TW');
  });
});

describe('load i18n files', () => {
  beforeAll(async () => {
    vi.spyOn(I18nHelper, 'defaultLocale', 'get').mockReturnValue('en-US');

    await I18nHelper.load();
    expect(I18nHelper.i18n).toBeDefined();
  });

  test('check flags', async () => {
    for (const locale of USER_LOCALES) {
      expect(I18nHelper.flags[locale]).toBeDefined();
    }
  });

  test('check messages', async () => {
    for (const locale of USER_LOCALES) {
      expect(
        I18nHelper.i18n?.global.getLocaleMessage(locale).name
      ).toBeDefined();
    }
  });

  test('check document title', async () => {
    expect(document.title).toEqual(
      I18nHelper.i18n?.global.getLocaleMessage(I18nHelper.locale).app.title
    );
  });
});

test('set title', async () => {
  document.title = 'test';
  vi.spyOn(I18nHelper, 'i18n', 'get').mockReturnValue(null);
  vi.spyOn(I18nHelper, 'i18n', 'set').mockImplementation((_) => {
    // no-op
  });

  await I18nHelper.load();

  expect(document.title).toEqual('test');

  vi.clearAllMocks();
});

test('set locale', async () => {
  await I18nHelper.load();

  vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
  vi.spyOn(navigator, 'language', 'get').mockReturnValue('unknown');
  vi.spyOn(I18nHelper, 'defaultLocale', 'get').mockReturnValue('en-US');

  expect(I18nHelper.locale).toEqual('en-US');
  vi.clearAllMocks();

  vi.spyOn(localStorage, 'getItem').mockReturnValue('zh-TW');
  I18nHelper.setLocale('zh-TW');
  expect(I18nHelper.locale).toEqual('zh-TW');
});
