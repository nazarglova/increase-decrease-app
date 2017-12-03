const initialState = {
	currentValue: 0,
	step: 1,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case "INCREASE":
			return Object.assign({}, state, {currentValue: action.payload});
		case "DECREASE":
			return Object.assign({}, state, {currentValue: action.payload});
		case "SET_STEP":
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}