import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import Result from "./Result";
import Controls from "./Controls";
import {increase, decrease, setStep} from "../actions/"


const IncDecApp = (props) => {
	let {currentValue, increase, decrease, setStep} = props;
	return (
		<div className="inc-dec-app">
			<h1>Supper App</h1>
			<Result
				currentValue={currentValue}
			/>
			<Controls
				increase={increase}
				decrease={decrease}
				setStep={setStep}
			/>
		</div>
	)
};
const mapStateToProps = (state) => {
	return ({
		currentValue: state.counter.currentValue
	})
};
const mapDispatchToProps = (dispatch) => {
	return {
		increase: bindActionCreators(increase, dispatch),
		decrease: bindActionCreators(decrease, dispatch),
		setStep: bindActionCreators(setStep, dispatch),
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(IncDecApp);