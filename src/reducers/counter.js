const defaultCounter = {
	currentValue: 0
};

export default function (state = defaultCounter, action) {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case "INCREASE":
			newState.currentValue++;
			return newState;
		case "DECREASE":
			newState.currentValue--;
			return newState;
		case "SET_CURRENT_VALUE":
			newState.currentValue = (action.value) ? action.value : 0;
			return newState;
		default:
			return state;
	}
}