import axios from 'axios';
import getIcon from './iconService';

const client = axios.create({
  baseURL: 'https://api.open-meteo.com',
});

export const getWeather = (lat, lon, timezone) => {
  return client
    .get('/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        current: 'temperature_2m,weather_code,wind_speed_10m',
        hourly:
          'temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m',
        daily:
          'weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum',
        temperature_unit: 'fahrenheit',
        wind_speed_unit: 'mph',
        precipitation_unit: 'inch',
        timeformat: 'unixtime',
        timezone: timezone,
        forecast_hours: '12',
      },
    })
    .then(({ data }) => {
      return {
        current: parseCurrentWeather(data),
        daily: parseDailyWeather(data),
        hourly: parseHourlyWeather(data),
      };
    });
};

const parseCurrentWeather = ({ current, daily }) => {
  const {
    temperature_2m: currentTemp,
    wind_speed_10m: windSpeed,
    weather_code: iconCode,
  } = current;

  const {
    temperature_2m_max: [highTemp],
    temperature_2m_min: [lowTemp],
    apparent_temperature_max: [highFeelsLike],
    apparent_temperature_min: [lowFeelsLike],
    precipitation_sum: [precip],
  } = daily;

  return {
    currentTemp: Math.round(currentTemp),
    highTemp: Math.round(highTemp),
    lowTemp: Math.round(lowTemp),
    highFeelsLike: Math.round(highFeelsLike),
    lowFeelsLike: Math.round(lowFeelsLike),
    windSpeed: Math.round(windSpeed),
    precip: Math.round(precip * 100) / 100,
    icon: getIcon(iconCode),
  };
};

const parseDailyWeather = ({ daily }) => {
  return daily.time.map((time, index) => {
    return {
      timestamp: time * 1000,
      icon: getIcon(daily.weather_code[index]),
      maxTemp: Math.round(daily.temperature_2m_max[index]),
    };
  });
};

const parseHourlyWeather = ({ hourly }) => {
  return hourly.time.map((time, index) => {
    return {
      timestamp: time * 1000,
      icon: getIcon(hourly.weather_code[index]),
      temp: Math.round(hourly.temperature_2m[index]),
      feelsLike: Math.round(hourly.apparent_temperature[index]),
      windSpeed: Math.round(hourly.wind_speed_10m[index]),
      precip: Math.round(hourly.precipitation[index] * 100) / 100,
    };
  });
};
