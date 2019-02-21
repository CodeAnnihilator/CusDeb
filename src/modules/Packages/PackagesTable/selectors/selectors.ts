import {createSelector} from 'reselect';

export const getPackages = (state: any) => state.packagesStep.packages;
export const getCurrentPaginationStep = (state: any) => state.packagesStep.currentStep;
export const getCountOfPackagesOnScreen = (state: any) => state.packagesStep.packagesOnScreen;

export const getPackagesOnScreen = createSelector(
	getPackages,
	getCurrentPaginationStep,
	getCountOfPackagesOnScreen,
	(packages, step, countOnPackagesOnScreen) => {
		const initialIndex = step * countOnPackagesOnScreen - countOnPackagesOnScreen;
		const lastIndex = step * countOnPackagesOnScreen - 1;

		return packages.filter((_: any, index: number) => index >= initialIndex && index <= lastIndex);
	},
);

export const getCountOfTotalPages = createSelector(
	getPackages,
	getCountOfPackagesOnScreen,
	(packages, countOnPackagesOnScreen) => Math.ceil(packages.length / countOnPackagesOnScreen),
);
