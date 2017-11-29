import React from 'react';
import {connect} from "react-redux";

const Result = (props) => {
	let {counter} = props;
	return (
		<div className="result">
			{counter.currentValue}
		</div>
	)
};

function mapStateToProps(state) {
	return {
		counter: state.counter
	};
}

export default connect(mapStateToProps)(Result);