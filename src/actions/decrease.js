export default (value, step = 1) => (
	{
		type: 'INCREASE',
		payload: value - step
	}
);