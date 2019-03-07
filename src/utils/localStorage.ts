export const loadState = () => {
	try {
		const serializeState = localStorage.getItem('state');
		if (serializeState === null) {
			return undefined;
		}

		return JSON.parse(serializeState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (state: any) => {
	try {
		const serializeState = JSON.stringify(state);
		localStorage.setItem('state', serializeState);
	} catch (err) {
		console.log(err);
	}
};
