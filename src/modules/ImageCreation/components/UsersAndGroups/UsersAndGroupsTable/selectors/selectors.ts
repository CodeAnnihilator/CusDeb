import {createSelector} from 'reselect';

export const getUsersAndGroups = (state: any) => state.usersAndGroups.usersAndGroups;
export const getCurrentPaginationStep = (state: any) => state.usersAndGroups.currentStep;
export const getCountOfUsersOnScreen = (state: any) => state.usersAndGroups.usersOnScreen;

export const getPackagesOnScreen = createSelector(
	getUsersAndGroups,
	getCurrentPaginationStep,
	getCountOfUsersOnScreen,
	(packages, step, countOnUsersOnScreen) => {
		const initialIndex = step * countOnUsersOnScreen - countOnUsersOnScreen;
		const lastIndex = step * countOnUsersOnScreen - 1;

		return packages.filter((_: any, index: number) => index >= initialIndex && index <= lastIndex);
	},
);

export const getCountOfTotalPages = createSelector(
	getUsersAndGroups,
	getCountOfUsersOnScreen,
	(usersAndGroups, countOnUsersOnScreen) => Math.ceil(usersAndGroups.length / countOnUsersOnScreen),
);
