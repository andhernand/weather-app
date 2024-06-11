import './App.css';
import CurrentWeather from './components/CurrentWeather';
import DayList from './components/DayList';
import HourList from './components/HourList';
import useAxios from './hooks/useAxios';

function App() {
  const [forecast, loading, error] = useAxios();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error Occured</div>}
      {forecast && (
        <>
          <CurrentWeather current={forecast.current} />
          <DayList daily={forecast.daily} />
          <HourList hourly={forecast.hourly} />
        </>
      )}
    </>
  );
}

export default App;
