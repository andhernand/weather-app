import HourItem from './HourItem';

export default function HourList({ hourly }) {
  return (
    <table className="hour-section">
      <tbody>
        {hourly.map((hour) => (
          <HourItem hour={hour} key={hour.timestamp} />
        ))}
      </tbody>
    </table>
  );
}
