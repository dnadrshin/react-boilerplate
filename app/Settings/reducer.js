import {createReducer} from '../helpers'
import actions from './actions'

const
	initialState = {counter: 5};

export default (state = initialState, action = {}) => createReducer(state, action, {
	[actions.types.SET]: () => ({
		...state,
		counter: action.id,
	}),

	[actions.types.INCREASE]: () => ({
		...state,
		counter: state.counter+1,
	}),

	[actions.types.DECREASE]: () => ({
		...state,
		counter: state.counter-1,
	}),
});
