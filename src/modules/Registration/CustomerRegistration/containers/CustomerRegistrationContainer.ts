import {connect} from 'react-redux';
import {isSubmitting, reduxForm} from 'redux-form';

import {sendData} from '../actions/registrationActions';
import {getValidationError} from '../selectors/selectors';

import CustomerRegistration from '../CustomerRegistration';

export default reduxForm({form: 'registration'})(connect(
	(state: any) => ({
		isSubmitting: isSubmitting('registration')(state),
		validationError: getValidationError(state),
	}),
	{sendData},
)(CustomerRegistration) as any);
