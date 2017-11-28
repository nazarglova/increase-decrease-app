import {combineReducers} from "redux";
import ChangeCounter from "./change-counter";

const allReducers = combineReducers({
	counter: ChangeCounter
});
export default allReducers;
