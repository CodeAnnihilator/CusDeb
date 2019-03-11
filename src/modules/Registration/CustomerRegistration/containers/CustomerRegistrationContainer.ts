import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {sendData} from '../actions/registrationActions';

import CustomerRegistration from '../CustomerRegistration';
import {isFetching} from '../selectors/selectors';

export default reduxForm({form: 'registration'})(connect(
	(state: any) => ({
		isFetching: isFetching(state),
	}),
	{sendData},
)(CustomerRegistration) as any);
