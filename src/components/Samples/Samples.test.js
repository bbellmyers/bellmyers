import React from 'react';
import ReactDOM from 'react-dom';
import Samples from './Samples.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Samples />, div);
  ReactDOM.unmountComponentAtNode(div);
});
