import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import increase from "./actions/increase";
import decrease from "./actions/decrease";

import Button from "./Button"
const Controls = (props) => {
	return (
		<div className="controls">
			<Button onClick={() => props.increase(props.counter)} value="+"/>
			<Button onClick={() => props.decrease(props.counter)} value="-"/>
		</div>
	)
};
function mapStateToProps(state) {
	return ({
		counter: state.counter
	})
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		increase: increase,
		decrease: decrease
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
