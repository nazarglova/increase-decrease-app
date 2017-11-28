import React from "react";
const Button = (props) => {
	let {type, id, disabled, onClick, value} = props;
	return (
		<button
			type={type}
			id={id}
			disabled={disabled}
			onClick={onClick}
		>
			{value}
		</button>
	);
};
export default Button;