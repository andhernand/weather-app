import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CurrentWeather from '../../src/components/CurrentWeather';

describe('Current Weather', () => {
  it('displays current temperature', () => {
    const current = {
      icon: 'icons/sun.svg',
      currentTemp: '99',
      highTemp: '106',
      highFellsLike: '112',
      windSpeed: '2',
      lowTemp: '77',
      lowFeelsLike: '79',
      precip: '0',
    };

    render(<CurrentWeather current={current} />);

    const temp = screen.getByText(current.currentTemp);

    expect(temp).toBeInTheDocument();
  });
});
