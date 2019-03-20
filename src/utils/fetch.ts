import axios from 'axios';

import {logOut} from 'common/actions/user';
import {backendURI} from 'config/main';
import {setBearerToken} from 'utils/token';

export const fetch = axios.create({
	baseURL: backendURI,
});

setBearerToken(localStorage.getItem('access_token'));

export const axiosInstance = {
	createAxiosResponseInterceptor: (store?: any) => {
		const interceptor = fetch.interceptors.response.use(
			response => response,
			error => {
				if (error.response.status !== 401) {
					return Promise.reject(error);
				}

				fetch.interceptors.response.eject(interceptor);

				return fetch.post('auth/token/refresh/', {
					refresh: localStorage.getItem('refresh_token'),
				}).then(response => {
					localStorage.setItem('access_token', response.data.access);
					error.response.config.headers['Authorization'] = `Bearer ${response.data.access}`;

					return axios(error.response.config);
				}).catch(refreshError => {

					store.dispatch(logOut());

					return Promise.reject(refreshError);
				}).finally(axiosInstance.createAxiosResponseInterceptor);
			},
		);
	},
};
