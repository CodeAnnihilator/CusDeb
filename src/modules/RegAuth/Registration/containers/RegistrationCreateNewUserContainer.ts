import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {sendData} from '../actions/RegistrationActions';

import RegistrationCreateNewUser from '../components/RegistrationCreateNewUser';
import {isFetching} from '../selectors/selectors';

export default reduxForm({form: 'registration'})(connect(
	(state: any) => ({
		isFetching: isFetching(state),
	}),
	{sendData},
)(RegistrationCreateNewUser) as any);
