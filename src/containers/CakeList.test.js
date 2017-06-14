import React from 'react';
import CakeList from './CakeList';
import renderer from 'react-test-renderer';
import helpers from '../helpers/api-helpers';

jest.mock('../helpers/api-helpers', () => {
    const fetchCakes = jest.fn();
    fetchCakes.mockReturnValue([{
        desc: 'some description',
        img: 'some-image-url',
        title: 'image-title'
    }]);

    return {
        fetchCakes
    }
});

it('should call the api', () => {
    renderer.create(<CakeList />);
    expect(helpers.fetchCakes).toHaveBeenCalled();
});

it('renders the list of cakes returned by the api', async() => {
  const component = await renderer.create(<CakeList />);
  expect(component).toMatchSnapshot();
});
