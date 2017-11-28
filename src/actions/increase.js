const increase = (value) => {
	value.currentValue++;
	return {
		type: "INCREASE",
		payload: value,
	};
};
export default increase;