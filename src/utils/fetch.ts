import axios from 'axios';
import {push} from 'connected-react-router';

import {backendURI} from 'config/main';

export const fetch = axios.create({
	baseURL: backendURI,
});

export const createAxiosResponseInterceptor = () => {
	const interceptor = axios.interceptors.response.use(
		response => response,
		error => {
			if (error.response.status !== 401) {
				return Promise.reject(error);
			}

			axios.interceptors.response.eject(interceptor);

			return axios.post(`${backendURI}/auth/token/refresh/`, {
				refresh_token: localStorage.getItem('refresh_token'),
			}).then(response => {
				localStorage.setItem('access_token', response.data);
				error.response.config.headers['Authorization'] = `Bearer ${response.data.access}`;

				return axios(error.response.config);
			}).catch(refreshError => {
				localStorage.clear();
				push('/login');

				return Promise.reject(refreshError);
			}).finally(createAxiosResponseInterceptor);
		},
	);
};
