import CounterReducer from "./counter";

export default function (state = CounterReducer(), action) {
	switch (action.type) {
		case "INCREASE":
			return  action.payload;
			// break;
		default:
			return state;
	}
}
