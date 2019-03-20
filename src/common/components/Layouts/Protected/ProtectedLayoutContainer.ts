import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {checkUserLogged, login} from 'common/actions/user';

import {getInterfaceIsPreloading} from 'common/selectors/interface';
import {getIsAuthenticated} from 'common/selectors/user';
import ProtectedLayout from './ProtectedLayout';

const mapStateToProps = (state: any) => ({
	isAuthenticated: getIsAuthenticated(state),
	isPreloading: getInterfaceIsPreloading(state),
});

const mapDispatchToProps = {
	checkUserLogged,
	login,
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout) as any);
