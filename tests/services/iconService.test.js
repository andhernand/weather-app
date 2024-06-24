import { describe, it, expect } from 'vitest';
import getIcon from '../../src/services/iconService';

describe('Get Icon', () => {
  it('returns sun icon', () => {
    const zero = getIcon(0);
    const one = getIcon(1);

    expect(zero).toBe('icons/sun.svg');
    expect(one).toBe('icons/sun.svg');
  });

  it('returns cloud sun icon', () => {
    const two = getIcon(2);

    expect(two).toBe('icons/cloud-sun.svg');
  });

  it('returns cloud icon', () => {
    const three = getIcon(3);

    expect(three).toBe('icons/cloud.svg');
  });

  it('returns smog icon', () => {
    const fortyFive = getIcon(45);
    const fortyEight = getIcon(48);

    expect(fortyFive).toBe('icons/smog.svg');
    expect(fortyEight).toBe('icons/smog.svg');
  });

  it('returns cloud shouwers heavy icon', () => {
    const codes = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82];

    codes.forEach((code) => {
      const icon = getIcon(code);
      expect(icon).toBe('icons/cloud-showers-heavy.svg');
    });
  });

  it('return snowflake icon', () => {
    const codes = [71, 73, 75, 77, 85, 86];

    codes.forEach((code) => {
      const icon = getIcon(code);
      expect(icon).toBe('icons/snowflake.svg');
    });
  });

  it('return cloud bolt icon', () => {
    const codes = [95, 96, 99];

    codes.forEach((code) => {
      const icon = getIcon(code);
      expect(icon).toBe('icons/cloud-bolt.svg');
    });
  });
});
