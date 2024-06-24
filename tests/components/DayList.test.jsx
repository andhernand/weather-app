import { describe, it, expect, beforeEach } from 'vitest';
import {
  getByAltText,
  getByText,
  render,
  screen,
} from '@testing-library/react';
import DayList from '../../src/components/DayList';

describe('Day List', () => {
  const daily = [
    {
      timestamp: 1719122400000,
      icon: 'icons/cloud.svg',
      maxTemp: 99,
    },
    {
      timestamp: 1719208800000,
      icon: 'icons/cloud.svg',
      maxTemp: 97,
    },
    {
      timestamp: 1719295200000,
      icon: 'icons/cloud.svg',
      maxTemp: 98,
    },
    {
      timestamp: 1719381600000,
      icon: 'icons/cloud-showers-heavy.svg',
      maxTemp: 95,
    },
    {
      timestamp: 1719468000000,
      icon: 'icons/cloud-showers-heavy.svg',
      maxTemp: 91,
    },
    {
      timestamp: 1719554400000,
      icon: 'icons/sun.svg',
      maxTemp: 83,
    },
    {
      timestamp: 1719640800000,
      icon: 'icons/sun.svg',
      maxTemp: 98,
    },
  ];

  beforeEach(() => {
    render(<DayList daily={daily} />);
  });

  it('displays sunday', () => {
    const sunday = screen.getByText(/Sunday/i);
    expect(sunday).toBeInTheDocument();

    const parent = sunday.parentElement;

    const maxTemp = getByText(parent, daily[0].maxTemp);
    expect(maxTemp).toBeInTheDocument();

    const src = getByAltText(parent, 'day icon');
    const srcValue = src.attributes.getNamedItem('src').value;
    expect(srcValue).toBe(daily[0].icon);
  });

  it('displays monday', () => {
    const monday = screen.getByText(/Monday/i);
    expect(monday).toBeInTheDocument();

    const parent = monday.parentElement;

    const maxTemp = getByText(parent, daily[1].maxTemp);
    expect(maxTemp).toBeInTheDocument();

    const src = getByAltText(parent, 'day icon');
    const srcValue = src.attributes.getNamedItem('src').value;
    expect(srcValue).toBe(daily[1].icon);
  });

  it('displays tuesday', () => {
    const tuesday = screen.getByText(/Tuesday/i);
    expect(tuesday).toBeInTheDocument();

    const parent = tuesday.parentElement;

    const maxTemp = getByText(parent, daily[2].maxTemp);
    expect(maxTemp).toBeInTheDocument();

    const src = getByAltText(parent, 'day icon');
    const srcValue = src.attributes.getNamedItem('src').value;
    expect(srcValue).toBe(daily[2].icon);
  });

  it('displays wednesday', () => {
    const wednesday = screen.getByText(/Wednesday/i);
    expect(wednesday).toBeInTheDocument();

    const parent = wednesday.parentElement;

    const maxTemp = getByText(parent, daily[3].maxTemp);
    expect(maxTemp).toBeInTheDocument();

    const src = getByAltText(parent, 'day icon');
    const srcValue = src.attributes.getNamedItem('src').value;
    expect(srcValue).toBe(daily[3].icon);
  });

  it('displays thursday', () => {
    const thursday = screen.getByText(/Thursday/i);
    expect(thursday).toBeInTheDocument();

    const parent = thursday.parentElement;

    const maxTemp = getByText(parent, daily[4].maxTemp);
    expect(maxTemp).toBeInTheDocument();

    const src = getByAltText(parent, 'day icon');
    const srcValue = src.attributes.getNamedItem('src').value;
    expect(srcValue).toBe(daily[4].icon);
  });

  it('displays friday', () => {
    const friday = screen.getByText(/Friday/i);
    expect(friday).toBeInTheDocument();

    const parent = friday.parentElement;

    const maxTemp = getByText(parent, daily[5].maxTemp);
    expect(maxTemp).toBeInTheDocument();

    const src = getByAltText(parent, 'day icon');
    const srcValue = src.attributes.getNamedItem('src').value;
    expect(srcValue).toBe(daily[5].icon);
  });

  it('displays saturday', () => {
    const saturday = screen.getByText(/Saturday/i);
    expect(saturday).toBeInTheDocument();

    const parent = saturday.parentElement;

    const maxTemp = getByText(parent, daily[6].maxTemp);
    expect(maxTemp).toBeInTheDocument();

    const src = getByAltText(parent, 'day icon');
    const srcValue = src.attributes.getNamedItem('src').value;
    expect(srcValue).toBe(daily[6].icon);
  });
});
