import { assert, expect, test, vi, describe } from 'vitest';
import I18nHelper from '@/helper/I18nHelper';

describe('Get locale', () => {
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
