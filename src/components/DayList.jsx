import DayItem from './DayItem';

export default function DayList({ daily }) {
  return (
    <section className="day-section">
      {daily.map((day) => (
        <DayItem day={day} key={day.timestamp} />
      ))}
    </section>
  );
}
