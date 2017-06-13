import Settings from '../';
import configureStore from 'redux-mock-store';
import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';

const
	instance = mount(<Settings store={configureStore()({
		settings: {
			
		}
	})} />);

describe('Settings has 4 buttons', () => {
	it('has footer bar shown across all pages', () => {
		expect(toJson(instance)).toMatchSnapshot();
		expect(instance.find('button')).toHaveLength(4);
	});
});
