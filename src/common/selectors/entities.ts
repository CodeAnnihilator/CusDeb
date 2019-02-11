import moment, {Moment} from 'moment';
import {createSelector} from 'reselect';

export const getImages = (state: any) => state.entities.images;
export const getRoute = (state: any) => state.router.pathname;

export const getBuildingImages = createSelector(
	getImages,
	images => images.filter((item: any) => item.build.status === 'building'),
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
