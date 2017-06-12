import React from 'react';
import renderer from 'react-test-renderer';
import CakeSearch from './CakeSearch';

it('renders a Search box for matching cakes', () => {
  const cakeFinder = () => true;
  const component = renderer.create(
    <CakeSearch onSearch={cakeFinder} />
  );
  expect(component).toMatchSnapshot();
});
