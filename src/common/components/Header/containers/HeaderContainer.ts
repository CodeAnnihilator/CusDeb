import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from '../Header';

import {login} from 'common/actions/user';
import {getIsAuthenticated} from 'common/selectors/user';

const mapStateToProps = (state: any) => ({
	isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	proceedLogin: () => {
		localStorage.setItem('isDeveloper', 'true');
		dispatch(login());
	},
});

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Header));
