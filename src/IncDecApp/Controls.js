import React from 'react';

const Controls = (props) => {
	let handleChange=()=>{
		props.setStep(this.input.value);
	};
	return (
		<div className="controls">
			<button onClick={props.increase}>+</button>
			<button onClick={props.decrease}>-</button>
			<input
				ref={(input) => this.input = input}
				type="number"
				onChange={handleChange}
				placeholder="Enter number"
			/>
		</div>
	)
};
export default Controls;
