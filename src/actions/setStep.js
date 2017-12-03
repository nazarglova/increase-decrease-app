export default (value) => {
	value = (value) ? parseInt(value, 10) : 1;
	return {
		type: 'SET_STEP',
		payload: {step: value}
	}
};