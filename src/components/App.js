import React from 'react';
import { Grommet } from 'grommet';
import Header from './Header';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme}>
      <Header>Weather App</Header>
    </Grommet>
  );
};

export default App;
