import React from 'react';
import renderer from 'react-test-renderer';
import CakeCard from './CakeCard';

it('renders a Search box for matching cakes', () => {
  const cake = {
      desc: 'some description',
      img: 'some-image-url',
      title: 'image-title'
  };
  const component = renderer.create(
    <CakeCard cake={cake} />
  );
  expect(component).toMatchSnapshot();
});
