import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {sendAuthData} from '../actions/AuthActions';

import Auth from '../components/Auth';

export default reduxForm({form: 'auth'})(connect(null, {sendAuthData})(Auth) as any);
