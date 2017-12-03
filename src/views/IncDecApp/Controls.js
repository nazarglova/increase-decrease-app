import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import increase from "../../actions/increase";
import decrease from "../../actions/decrease";
import setStep from "../../actions/setStep";

const Controls = ({setStep, increase, decrease, currentValue, step}) => {
	return (
		<div className="controls">
			<button onClick={() => increase(currentValue, step)}>+</button>
			<button onClick={() => decrease(currentValue, step)}>-</button>
			<input
				type="number"
				onChange={(e) => setStep(e.target.value)}
				placeholder="Enter number"
			/>
		</div>
	)
};
const mapStateToProps = (state) => {
	let {currentValue, step} = state.counter;
	return {currentValue, step}
};
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		increase,
		decrease,
		setStep
	}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
