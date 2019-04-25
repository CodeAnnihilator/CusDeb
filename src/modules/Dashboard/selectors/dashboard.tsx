import React from 'react';
import reactStringReplace from 'react-string-replace';
import {createSelector} from 'reselect';

import {getImages} from 'common/selectors/entities';

import styles from '../components/ImagesCardView/ImageCard/imageCard.scss';

export const getActiveImageId = (state: any) => (state.dashboard || {}).activeImageId;
export const getActiveImagesStatus = (state: any) => state.dashboard.activeImagesStatus;

export const getImagesTextFilter = (state: any) => state.dashboard.displaying.textFilter;

export const getActiveImage = createSelector(
	[getImages, getActiveImageId],
	(images, activeImageId) => images.find((image: any) => image.name === activeImageId),
);

export const getFilteredImages = createSelector(
	[getImages, getActiveImagesStatus, getImagesTextFilter],
	(gettedImages, activeImagesStatus, substr) => {
		let images = gettedImages.slice();

		if (activeImagesStatus && activeImagesStatus !== 'all') {
			images = images.filter((image: any) => image.build.status === activeImagesStatus);
		}

		if (substr) {
			images = images.filter((image: any) => (
				image.notes.toLowerCase().includes(substr.toLowerCase())
				|| image.distro.full_name.toLowerCase().includes(substr.toLowerCase())
				|| image.targetdevice.title.toLowerCase().includes(substr.toLowerCase())
			));
		}

		return images;
	},
);

export const getImagesWithReplacedText = (state: any) => {
	const substr = state.dashboard.displaying.textFilter;
	let images = state.entities.images.slice();

	const findInText = (text: string) => substr ? (
		reactStringReplace(
			text,
			substr,
			(match: string, i: number) => (
				<span key={i} className={styles.highlighted}>{match}</span>
		))
	) : text;

	images = images.map((image: any) => {
		image.distro.full_name = findInText(image.distro.full_name);
		image.targetdevice.full_name = findInText(image.targetdevice.full_name);
		image.notes = findInText(image.notes);

		return image;
	});

	console.log(images);

	return [];
};
