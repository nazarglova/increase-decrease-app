import React from 'react';

const Result = (props) => {
	let {currentValue} = props;
	return (
		<div className="result">
			{currentValue}
		</div>
	)
};

export default Result;