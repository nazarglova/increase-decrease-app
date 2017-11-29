import {combineReducers} from "redux";
import Counter from "./counter";

const allReducers = combineReducers({
	counter: Counter,
});
export default allReducers;