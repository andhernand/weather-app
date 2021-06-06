import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

test('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  const unmounted = ReactDOM.unmountComponentAtNode(div);
  expect(unmounted).toBe(true);
});
