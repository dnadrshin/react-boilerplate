export default (state = 0, action) => {
	switch (action.type) {
		case "INCREASE":
			return state + 1

		case "DECREASE":
			return state - 1

		case "SET":
			return action.id

		default:
			return state
	}
}