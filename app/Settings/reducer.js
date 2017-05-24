export default (state = {counter: 5}, action) => {
	switch (action.type) {
		case "INCREASE":
			return {
				...state,
				counter: state.counter+1
			}

		case "DECREASE":
			return {
				...state,
				counter: state.counter-1
			}

		case "SET":
			return {
				...state,
				counter: action.id
			}

		default:
			return state
	}
}
