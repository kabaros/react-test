import React from 'react';
import ReactDOM from 'react-dom';
import CakeCard from './CakeCard';

it('renders a card with a cake', () => {
  const div = document.createElement('div');
  const cake = {
      desc: 'some description',
      img: 'some-image-url',
      title: 'image-title'
  };
  ReactDOM.render(<CakeCard cake={cake} />, div);
  expect(div).toMatchSnapshot();
});
