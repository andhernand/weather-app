import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HourList from '../../src/components/HourList';

describe('Hour List', () => {
  const hourly = [
    {
      timestamp: 1719190800000,
      icon: 'icons/sun.svg',
      temp: 97,
      feelsLike: 90,
      windSpeed: 5,
      precip: 0,
    },
    {
      timestamp: 1719194400000,
      icon: 'icons/sun.svg',
      temp: 95,
      feelsLike: 89,
      windSpeed: 4,
      precip: 0,
    },
    {
      timestamp: 1719198000000,
      icon: 'icons/sun.svg',
      temp: 88,
      feelsLike: 83,
      windSpeed: 1,
      precip: 0,
    },
  ];

  beforeEach(() => {
    render(<HourList hourly={hourly} />);
  });

  it('renders sunday 7 pm', () => {
    const weekday = screen.getAllByText('Sunday');
    weekday.forEach((day) => {
      expect(day).toBeInTheDocument();
    });

    const time = screen.getByText(/7 PM/i);
    expect(time).toBeInTheDocument();

    const icon = screen.getAllByAltText('hour icon');
    icon.forEach((i) => {
      expect(i).toBeInTheDocument();
    });

    const src = icon[0].attributes.getNamedItem('src').value;
    expect(src).toBe(hourly[0].icon);
  });

  it('renders sunday 8 pm', () => {
    const weekday = screen.getAllByText('Sunday');

    weekday.forEach((day) => {
      expect(day).toBeInTheDocument();
    });

    const time = screen.getByText(/8 PM/i);

    expect(time).toBeInTheDocument();

    const icon = screen.getAllByAltText('hour icon');
    icon.forEach((i) => {
      expect(i).toBeInTheDocument();
    });

    const src = icon[1].attributes.getNamedItem('src').value;
    expect(src).toBe(hourly[1].icon);
  });

  it('renders sunday 9 pm', () => {
    const weekday = screen.getAllByText('Sunday');

    weekday.forEach((day) => {
      expect(day).toBeInTheDocument();
    });

    const time = screen.getByText(/9 PM/i);

    expect(time).toBeInTheDocument();

    const icon = screen.getAllByAltText('hour icon');
    icon.forEach((i) => {
      expect(i).toBeInTheDocument();
    });

    const src = icon[2].attributes.getNamedItem('src').value;
    expect(src).toBe(hourly[2].icon);
  });
});
