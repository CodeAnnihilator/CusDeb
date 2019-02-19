import {createSelector} from 'reselect';

import React from 'react';

import BrandsLogos from 'assets/images/brandsLogos';
import DestributivesLogos from 'assets/images/distributivesLogos';

export const getStepIndex = (state: any) =>  state.createImage.currentStep;
export const getSteps = (state: any) => state.createImage.steps;
export const getProcessSteps = (state: any) => state.createImage.processSteps;

export const getDistros = (state: any) =>  state.createImage.distros;
export const getTargetDevices = (state: any) =>  state.createImage.targetDevices;
export const getBuildTypes = (state: any) =>  state.createImage.buildTypes;
export const getBrands = (state: any) =>  state.createImage.brands;

export const getSelectedItems = (state: any) =>  state.createImage.selectedItems;
export const getEntitesFilters = (state: any) =>  state.createImage.entitesFilters;

export const getSelectedItemByType = createSelector(
	getSelectedItems,
	(_: any, type: string) => type,
	(selectedItems, type) => selectedItems[type],
);

export const getCurrentStep = createSelector(
	getSteps,
	getStepIndex,
	(steps, index) => steps[index].text,
);

export const getSelectedSteps = createSelector(
	getSelectedItems,
	selectedItems => {
		const keys = Object.keys(selectedItems);
		let selectedCounter = 0;
		for (const key in keys) {
			if (selectedItems[keys[key]] !== null) {
				selectedCounter++;
			}
		}

		return selectedCounter;
	},
);

export const getSelectItems = createSelector(
	getSelectedItems,
	itemsHash => {
		const selectTypes = ['brands', 'targetDevices', 'distros', 'buildTypes'];
		const result = [];
		//tslint:disable
		for (let i = 0; i < selectTypes.length; i++) {
			if (itemsHash[selectTypes[i]]) {
				result.push(selectTypes[i]);
			} else if (!itemsHash[selectTypes[i]]) {
				result.push(selectTypes[i]);

				break;
			}
		}

		return result;
	},
);

export const getAlertTitleKey = createSelector(
	getSelectedItems,
	(selectedItems: any) => {
		let key = '';

		if (!selectedItems.brands) {
			key = 'Brands';
		} else if (!selectedItems.targetDevices) {
			key = 'Devices';
		}  else if (!selectedItems.distros) {
			key = 'Distros';
		} else if (!selectedItems.buildTypes) {
			key = 'BuildType';
		}

		return key;
	},
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

		const Logos = {...DestributivesLogos, ...BrandsLogos}

		return items.reduce((memo: any, item: {title: string; icon: any}) => {
			if (item.title.toUpperCase().includes(filter.toUpperCase())) {
				memo.push(
					{
						icon: Logos[item.icon],
						id: item.title,
						title: item.title,
						isDisabled: false,
					},
				);
			}

			return memo;
		}, []);
	},
);
