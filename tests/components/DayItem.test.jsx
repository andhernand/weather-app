import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import DayItem from '../../src/components/DayItem';

describe('Day Item', () => {
  const day = {
    timestamp: 1719122400000,
    icon: 'icons/cloud.svg',
    maxTemp: 99,
  };

  beforeEach(() => {
    render(<DayItem day={day} />);
  });

  it('displays the icon', () => {
    const icon = screen.getByAltText('day icon');

    expect(icon).toBeInTheDocument();

    const src = icon.attributes.getNamedItem('src').value;
    expect(src).toBe(day.icon);
  });

  it('displays the weekday', () => {
    const weekday = screen.getByText(/Sunday/i);

    expect(weekday).toBeInTheDocument();
  });

  it('displays the max temp', () => {
    const maxTemp = screen.getByText(day.maxTemp);

    expect(maxTemp).toBeInTheDocument();
  });
});
