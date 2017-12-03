export const increase = () => {
	return {
		type: 'INCREASE'
	}
};
export const decrease = () => {
	return {
		type: 'DECREASE'
	}
};
export const setStep = (value) => {
	return {
		type: 'SET_STEP',
		value
	}
};