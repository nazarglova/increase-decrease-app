import React from 'react';
import {connect} from "react-redux";

const Result = ({currentValue}) => {
	return (
		<div className="result">
			<span>{currentValue}</span>
		</div>
	)
};
const mapStateToProps = (state) => {
	return {
		currentValue: state.counter.currentValue
	}
};
export default connect(mapStateToProps)(Result);