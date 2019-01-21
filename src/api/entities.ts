import {fetch} from 'utils/fetch';

export const requestLounches = () => fetch.get('launches');
