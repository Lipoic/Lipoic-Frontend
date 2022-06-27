import { describe, expect, test } from 'vitest';
import { deepAssign } from '@/utils/Object';

describe('deepAssign', () => {
  test('general assign', () => {
    const source = { a: 1 };
    const target = { b: 2 };

    const result = deepAssign(source, target);

    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('assign to empty object', () => {
    const source = { a: 1 };
    const target = {};

    const result = deepAssign(source, target);

    expect(result).toEqual({ a: 1 });
  });

  test('assign multiple objects', () => {
    const source = { a: 1 };
    const target = { b: 2 };
    const target2 = { c: 3 };

    const result = deepAssign(source, target, target2);

    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('assign no target', () => {
    const source = { a: 1 };

    const result = deepAssign(source);

    expect(result).toEqual({ a: 1 });
  });

  test('assign same object', () => {
    const source = { a: 1 };
    const target = source;

    const result = deepAssign(source, target);

    expect(result).toEqual({ a: 1 });
  });

  test('deep assign', () => {
    const source = { a: { a: 1, b: 1 } };
    const target = { a: { c: 2 } };

    const result = deepAssign(source, target);

    expect(result).toEqual({ a: { a: 1, b: 1, c: 2 } });
  });
});
