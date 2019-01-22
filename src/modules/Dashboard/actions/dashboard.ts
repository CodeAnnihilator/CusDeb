import types from '../constants/dashboard';

export const selectImage = (id: string | number) => ({
	type: types.SELECT_IMAGE,
	payload: id,
});
