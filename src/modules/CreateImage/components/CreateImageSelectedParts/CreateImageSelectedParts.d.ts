interface IStep {
	icon?: string;
	id: string;
	title: string;
	isDisabled: boolean;
}

interface ISteps {
	brands: {
		brands: IStep;
		targetDevices: IStep;
		distros: IStep;
		buildTypes: IStep;
	};
}

export default ISteps;
