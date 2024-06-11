import WeatherInfo from './WeatherInfo';

export default function CurrentWeather({ current }) {
  return (
    <header className="header">
      <div className="header-left">
        <img
          className="weather-icon large"
          src={current.icon}
          alt="weather icon"
        />
        <div className="header-current-temp">
          <span>{current.currentTemp}</span>
          <span>°</span>
        </div>
      </div>

      <div className="header-right">
        <WeatherInfo name={'High'} data={current.highTemp} />
        <WeatherInfo name={'FL High'} data={current.highFeelsLike} />
        <WeatherInfo
          name={'Wind'}
          data={current.windSpeed}
          measurement={' mph'}
        />
        <WeatherInfo name={'Low'} data={current.lowTemp} />
        <WeatherInfo name={'FL Low'} data={current.lowFeelsLike} />
        <WeatherInfo
          name={'Precip'}
          data={current.precip}
          measurement={' in'}
        />
      </div>
    </header>
  );
}
