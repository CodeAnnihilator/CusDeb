import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {isSubmitting, reduxForm} from 'redux-form';

import {checkUserLogged} from 'common/actions/user';
import {getIsAuthenticated} from 'common/selectors/user';

import {RootState} from 'root/index';

import Auth from '../Auth';

import {sendAuthData} from '../actions/authActions';
import {getValidationError} from '../selectors/selectors';

const mapStateToProps = (state: RootState) => ({
	isSubmitting: isSubmitting('auth')(state),
	isAuthenticated: getIsAuthenticated(state),
	validationError: getValidationError(state),
});

const mapDispatchToProps = {
	checkUserLogged,
	sendAuthData,
};

export default withRouter<any>(reduxForm({form: 'auth'})(connect(
	mapStateToProps,
	mapDispatchToProps,
)(Auth) as any));
