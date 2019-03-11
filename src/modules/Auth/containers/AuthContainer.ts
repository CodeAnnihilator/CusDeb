import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {sendAuthData} from '../actions/authActions';

import Auth from '../Auth';
import {isFetching} from '../selectors/selectors';

export default reduxForm({form: 'auth'})(connect(
	(state: any) => ({isFetching: isFetching(state)}),
	{sendAuthData},
)(Auth) as any);