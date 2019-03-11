import moment, {Moment} from 'moment';
import {createSelector} from 'reselect';

export const getImages = (state: any) => state.entities.images;
export const getImagesTextFilter = (state: any) => state.dashboard.displaying.textFilter;
export const getRoute = (state: any) => state.router.pathname;
export const getAllImagesCount = (state: any) => state.entities.images.length;

export const getBuildingImages = createSelector(
	getImages,
	images => images.filter((item: any) => item.build.status === 'building'),
);

export const getFilteredImages = createSelector(
	getImages,
	getImagesTextFilter,
	(images, substr) => {
		if (images.length && substr) {
			return images.filter((image: any) => {
				if (
					image.notes.toLowerCase().indexOf(substr.toLowerCase()) !== -1
					|| image.distro.full_name.toLowerCase().indexOf(substr.toLowerCase()) !== -1
					|| image.targetdevice.title.toLowerCase().indexOf(substr.toLowerCase()) !== -1
				) { return true; }
			});
		}

		return images;
	},
);

export const getBuildingImagesCount = createSelector(
	getBuildingImages,
	images => images.length,
);

export const getSuccededImagesCount = createSelector(
	getImages,
	images => images.filter((item: any) => item.build.status === 'ready').length,
);

export const getFailedImagesCount = createSelector(
	getImages,
	images => images.filter((item: any) => item.build.status === 'error').length,
);

export const getItemsIDAndDate = createSelector(
	getImages,
	images => images.map(({name, started_at}: {name: string; started_at: string}) => ({
		name,
		started_at: moment(started_at).fromNow()}),
	),
);

export const getItemsDateAndID = createSelector(
	getImages,
	images => images.reduce((memo: any[], {name, started_at}: {name: string; started_at: string}) => {

		if (moment().fromNow() !== moment(started_at).fromNow()) {
			memo.push(({name, started_at}));
		}

		return memo;
	}, []),
);
