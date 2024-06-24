import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WeatherInfo from '../../src/components/WeatherInfo';

describe('Weather Info', () => {
  it('renders proper temp', () => {
    const data = 99;
    const name = 'Temp';
    const measurement = '°';

    render(<WeatherInfo data={data} name={name} measurement={measurement} />);

    const temp = screen.getByText(name);
    expect(temp).toBeInTheDocument();

    const number = screen.getByText(data);
    expect(number).toBeInTheDocument();

    const meas = screen.getByText(measurement);
    expect(meas).toBeInTheDocument();
  });

  it('renders proper feels like', () => {
    const data = 77;
    const name = 'FL Temp';
    const measurement = '°';

    render(<WeatherInfo data={data} name={name} measurement={measurement} />);

    const temp = screen.getByText(name);
    expect(temp).toBeInTheDocument();

    const number = screen.getByText(data);
    expect(number).toBeInTheDocument();

    const meas = screen.getByText(measurement);
    expect(meas).toBeInTheDocument();
  });

  it('renders proper wind', () => {
    const data = 7;
    const name = 'Wind';
    const measurement = 'mph';

    render(<WeatherInfo data={data} name={name} measurement={measurement} />);

    const temp = screen.getByText(name);
    expect(temp).toBeInTheDocument();

    const number = screen.getByText(data);
    expect(number).toBeInTheDocument();

    const meas = screen.getByText(measurement);
    expect(meas).toBeInTheDocument();
  });

  it('renders proper precipitation', () => {
    const data = 7;
    const name = 'Wind';
    const measurement = 'in';

    render(<WeatherInfo data={data} name={name} measurement={measurement} />);

    const temp = screen.getByText(name);
    expect(temp).toBeInTheDocument();

    const number = screen.getByText(data);
    expect(number).toBeInTheDocument();

    const meas = screen.getByText(measurement);
    expect(meas).toBeInTheDocument();
  });
});
