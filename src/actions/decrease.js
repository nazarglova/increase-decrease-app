const decrease = (value) => {
	value.currentValue--;
	return {
		type: "DECREASE",
		payload: value,
	};
};
export default decrease;