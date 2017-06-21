import Settings from '../';
import configureStore from 'redux-mock-store';
import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';

const
	instance = mount(<Settings store={configureStore()({
		settings: {
			
		},
	})} />);

describe('Settings module', () => {
	it('has four buttons', () => {
		expect(toJson(instance)).toMatchSnapshot();
		expect(instance.find('button')).toHaveLength(4);
	});
});
