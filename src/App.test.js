import React from 'react';
import App from './App';
import ReactShallowRenderer from 'react-test-renderer/shallow';

it('renders without crashing', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<App />);
});
