import React from 'react';

const Controls = (props) => {
	let {setStep, increase, decrease} = props;
	let handleChange = () => {
		setStep(this.input.value);
	};
	return (
		<div className="controls">
			<button onClick={increase}>+</button>
			<button onClick={decrease}>-</button>
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
