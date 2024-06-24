import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HourItem from '../../src/components/HourItem';

describe('Hour Item', () => {
  const hour = {
    timestamp: 1719190800000,
    icon: 'icons/sun.svg',
    temp: 97,
    feelsLike: 90,
    windSpeed: 5,
    precip: 0,
  };

  beforeEach(() => {
    render(<HourItem hour={hour} />);
  });

  it('displays weekday', () => {
    const weekday = screen.getByText(/Sunday/i);

    expect(weekday).toBeInTheDocument();
  });

  it('displays hour', () => {
    const time = screen.getByText(/7 PM/i);

    expect(time).toBeInTheDocument();
  });

  it('displays icon', () => {
    const icon = screen.getByAltText('hour icon');

    expect(icon).toBeInTheDocument();

    const src = icon.attributes.getNamedItem('src').value;
    expect(src).toBe(hour.icon);
  });
});
