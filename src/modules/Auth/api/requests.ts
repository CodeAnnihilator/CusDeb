import {fetch} from 'utils/fetch';

export const loginRequest = (authData: any) => fetch.post('/auth/token', authData);
