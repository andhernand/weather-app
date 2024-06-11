import WeatherInfo from './WeatherInfo';

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long' });
const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: 'numeric' });

export default function HourItem({ hour }) {
  return (
    <tr className="hour-row">
      <td>
        <div>
          <div>{DAY_FORMATTER.format(hour.timestamp)}</div>
          <div>{HOUR_FORMATTER.format(hour.timestamp)}</div>
        </div>
      </td>
      <td>
        <img className="weather-icon" src={hour.icon} alt="hour icon" />
      </td>
      <td>
        <WeatherInfo name={'Temp'} data={hour.temp} />
      </td>
      <td>
        <WeatherInfo name={'FL Temp'} data={hour.feelsLike} />
      </td>
      <td>
        <WeatherInfo name={'Wind'} data={hour.windSpeed} measurement={' mph'} />
      </td>
      <td>
        <WeatherInfo name={'Precip'} data={hour.precip} measurement={' in'} />
      </td>
    </tr>
  );
}
