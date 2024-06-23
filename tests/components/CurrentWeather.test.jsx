import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CurrentWeather from '../../src/components/CurrentWeather';

describe('Current Weather', () => {
  const current = {
    icon: 'icons/sun.svg',
    currentTemp: '99',
    highTemp: '106',
    highFeelsLike: '112',
    windSpeed: '2',
    lowTemp: '77',
    lowFeelsLike: '79',
    precip: '0',
  };

  beforeEach(() => {
    render(<CurrentWeather current={current} />);
  });

  it('displays icon', () => {
    const icon = screen.getByAltText('weather icon');

    expect(icon).toBeInTheDocument();

    const src = icon.attributes.getNamedItem('src').value;
    expect(src).toBe(current.icon);
  });

  it('displays current temperature', () => {
    const temp = screen.getByText(current.currentTemp);

    expect(temp).toBeInTheDocument();
  });

  it('displays high temperature', () => {
    const highTemp = screen.getByText(current.highTemp);

    expect(highTemp).toBeInTheDocument();
  });

  it('displays high feels like', () => {
    const highFellsLike = screen.getByText(current.highFeelsLike);

    expect(highFellsLike).toBeInTheDocument();
  });

  it('displays wind speed', () => {
    const windSpeed = screen.getByText(current.windSpeed);

    expect(windSpeed).toBeInTheDocument();
  });

  it('displays low temperature', () => {
    const lowTemp = screen.getByText(current.lowTemp);

    expect(lowTemp).toBeInTheDocument();
  });

  it('displays low feels like temperature', () => {
    const lowFeelsLike = screen.getByText(current.lowFeelsLike);

    expect(lowFeelsLike).toBeInTheDocument();
  });

  it('displays precipitation', () => {
    const precipitation = screen.getByText(current.precip);

    expect(precipitation).toBeInTheDocument();
  });
});
