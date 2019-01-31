import {createSelector} from 'reselect';

import React from 'react';

import {MdVerifiedUser} from 'react-icons/md';

export const getCurrentStep = (state: any) =>  'initialization'; // state.createImageCommonReducer.currentStep;

export const getDistros = (state: any) =>  state.createImage.distros;
export const getTargetDevices = (state: any) =>  state.createImage.targetDevices;
export const getBuildTypes = (state: any) =>  state.createImage.buildTypes;
export const getBrands = (state: any) =>  state.createImage.brands;

export const getSelectedItems = (state: any) =>  state.createImage.selectedItems;
export const getEntitesFilters = (state: any) =>  state.createImage.entitesFilters;

export const getEntitiesByType = createSelector(
	getCurrentStep,
	step => step,
);

export const getSelectedItemByType = createSelector(
	getSelectedItems,
	(_: any, type: string) => type,
	(selectedItems, type) => selectedItems[type],
);

export const makeGetInputValue = () => (state: any, type: string) => getEntitesFilters(state)[type];

export const makeGetImagesByType = () => createSelector(
	getDistros, getTargetDevices, getBuildTypes, getBrands, makeGetInputValue(),
	(_: any, type: string) => type,
	(distros: any, targetDevices: any, buildTypes: any, brands: any, filter: any, type: string): any => {
		let items = [];

		switch (type) {
			case 'distros':
				items = distros;
				break;
			case 'brands':
				items = brands;
				break;
			case 'targetDevices':
				items = targetDevices;
				break;
			case 'buildTypes':
				items = buildTypes;
				break;
		}

		return items.reduce((memo: any, item: string) => {
			if (item.toUpperCase().includes(filter.toUpperCase())) {
				memo.push(
					{
						icon: <MdVerifiedUser size={28} />,
						id: item,
						title: item,
						isDisabled: false,
					},
				);
			}

			return memo;
		}, []);
	},
);
