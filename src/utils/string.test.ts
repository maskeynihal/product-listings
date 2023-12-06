import interpolate from './string';
import { describe, expect, test } from 'vitest';

describe('interpolate', () => {
  test('should replace placeholders with values from params', () => {
    const result = interpolate(':name is here.', { name: 'Joe' });
    expect(result).toBe('Joe is here.');
  });

  test('should handle multiple placeholders in the string', () => {
    const result = interpolate(':name is here, and :age years old.', { name: 'Joe', age: 25 });
    expect(result).toBe('Joe is here, and 25 years old.');
  });

  test('should handle empty string and empty params', () => {
    const result = interpolate('', {});
    expect(result).toBe('');

    const result2 = interpolate(':name is here.', {});
    expect(result2).toBe(':name is here.');
  });

  test('should replace placeholders with string representations of numbers', () => {
    const result = interpolate(':number is a number.', { number: 42 });
    expect(result).toBe('42 is a number.');
  });

  test('should replace placeholders with default empty string if corresponding param is undefined or null', () => {
    const result = interpolate(':name is here.', { name: undefined });
    expect(result).toBe(' is here.');

    const result2 = interpolate(':name is here.', { name: null });
    expect(result2).toBe(' is here.');
  });

  test('should handle case-insensitive placeholders', () => {
    const result = interpolate(':Name is here.', { name: 'Joe' });
    expect(result).toBe('Joe is here.');
  });
});
