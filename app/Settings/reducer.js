import { createReducer } from '../helpers'

const
	increase = (state, action) => ({
		...state,
		counter: state.counter+1
	}),

	decrease = (state, action) => ({
		...state,
		counter: state.counter-1
	}),

	set = (state, action) => ({
		...state,
		counter: action.id
	}),

	actions = {
		'INCREASE': increase,
		'DECREASE': decrease,
		'SET'     : set
	},

	initialState = {counter: 5};

export default (state = initialState, action = {}) => createReducer(state, action, actions)