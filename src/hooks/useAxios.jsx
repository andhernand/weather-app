import { useEffect, useState } from 'react';
import { getWeather } from '../services/weatherService';

const useAxios = () => {
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

    function positionSuccess({ coords }) {
      getWeather(
        coords.latitude,
        coords.longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      )
        .then((forecast) => setForecast(forecast))
        .catch((e) => {
          console.error(e);
          setError(true);
        })
        .finally(() => setLoading(false));
    }

    function positionError() {
      setError(true);
      alert(
        'There was an error getting your location. Please allow us to use your location and refresh the page.',
      );
    }
  }, []);

  return [forecast, loading, error];
};

export default useAxios;
