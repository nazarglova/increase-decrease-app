const defaultCounter = {
	currentValue: 0,
	step: 1,
};
export default (state = defaultCounter, action) => {
	switch (action.type) {
		case "INCREASE":
			state.currentValue += state.step;
			return Object.assign({}, state);
		case "DECREASE":
			state.currentValue -= state.step;
			return Object.assign({}, state);
		case "SET_STEP":
			state.step = (action.value) ? parseInt(action.value, 10) : 1;
			return Object.assign({}, state);
		default:
			return state;
	}
}