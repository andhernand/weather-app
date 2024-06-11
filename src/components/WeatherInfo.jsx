export default function WeatherInfo({ name, data, measurement = '°' }) {
  return (
    <div className="info-group">
      <div className="label">{name}</div>
      <div>
        <span>{data}</span>
        <span className={measurement === '°' ? '' : 'value-sub-info'}>
          {measurement}
        </span>
      </div>
    </div>
  );
}
