import {fetch} from 'utils/fetch';

export const setBearerToken = (token: string | null) => {
	fetch.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
