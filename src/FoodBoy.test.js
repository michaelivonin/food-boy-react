import React from 'react';
import ReactDOM from 'react-dom';
import FoodBoy from './FoodBoy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoodBoy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
