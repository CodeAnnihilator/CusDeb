import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {checkUserLogged, login} from 'common/actions/user';

import {getInterfaceIsPreloading} from 'common/selectors/interface';
import {getIsAuthenticated} from 'common/selectors/user';
import ProtectedLayout from './ProtectedLayout';

import {IInterfaceState} from 'common/types/interface.d';
import {IUserState} from 'common/types/user.d';

interface IMappedState extends IInterfaceState, IUserState {}

const mapStateToProps = (state: IMappedState) => ({
	isAuthenticated: getIsAuthenticated(state),
	isPreloading: getInterfaceIsPreloading(state),
});

const mapDispatchToProps = {
	checkUserLogged,
	login,
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout));
