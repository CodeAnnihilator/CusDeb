import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {sendData} from '../actions/RegistrationActions';

import RegistrationCreateNewUser from '../components/RegistrationCreateNewUser';

export default reduxForm({form: 'registration'})(connect(null, {sendData})(RegistrationCreateNewUser) as any);
