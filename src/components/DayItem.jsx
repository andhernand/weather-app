const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long' });

export default function DayItem({ day }) {
  return (
    <div className="day-card">
      <img className="weather-icon" src={day.icon} alt="day icon" />
      <div className="day-card-day">{DAY_FORMATTER.format(day.timestamp)}</div>
      <div>
        <span>{day.maxTemp}</span>
        <span>°</span>
      </div>
    </div>
  );
}
