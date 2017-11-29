import React from 'react';
import {connect} from "react-redux";

const Controls = (props) => {
	let {dispatch} = props;
	return (
		<div className="controls">
			<button onClick={() => dispatch({type: 'INCREASE'})}>+</button>
			<button onClick={() => dispatch({type: 'DECREASE'})}>-</button>
			<input
				type="number"
				onChange={(e) => {
					dispatch({type: 'SET_CURRENT_VALUE', value: e.target.value})
				}}
				placeholder="Enter number"
			/>
		</div>
	)
};
function mapStateToProps(state) {
	return ({
		counter: state.counter
	})
}
export default connect(mapStateToProps)(Controls);
