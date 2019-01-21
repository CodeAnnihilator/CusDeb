import axios from 'axios';

import {backendURI} from 'config/main';

export const fetch = axios.create({
	baseURL: backendURI,
});

fetch.interceptors.response.use(
	response => response,
	error => Promise.reject(error.response),
);
