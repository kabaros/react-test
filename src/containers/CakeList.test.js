import React from 'react';
import CakeList from './CakeList';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import helpers from '../helpers/api-helpers';

jest.mock('../helpers/api-helpers', () => {
    const fetchCakes = jest.fn();
    fetchCakes.mockReturnValue([{
        desc: 'some description',
        img: 'some-image-url',
        title: 'awesome-cake'
    }, {
        desc: 'bad cake description',
        img: 'bad-image-url',
        title: 'bad-cake'
    }]);

    return {
        fetchCakes
    }
});

it('should call the api', () => {
    renderer.create(<CakeList />);
    expect(helpers.fetchCakes).toHaveBeenCalled();
});

it('should render the list of cakes returned by the api', async() => {
  const component = await renderer.create(<CakeList />);
  expect(component).toMatchSnapshot();
});

describe('searching cakes', () => {
    it('should update based on search criteria', async () => {
        const component = await mount(<CakeList />);
        const input = component.find('input');
        input.simulate('change',  {target: {value: 'bad'}});

        const state = component.state();
        expect(state.cakes.length).toEqual(1);
        expect(state.cakes[0].desc).toEqual('bad cake description');
    });

    it('should show all cakes after deleting the search criteria', async () => {
        const component = await mount(<CakeList />);

        // searching for bad cake
        const input = component.find('input');
        input.simulate('change',  {target: {value: 'bad'}});
        expect(component.state().cakes.length).toEqual(1);

        // deleting search criteria
        input.simulate('change',  {target: {value: ''}});
        expect(component.state().cakes.length).toEqual(2);
    });
});
