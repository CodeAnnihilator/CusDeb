import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from '../Header';

import {login} from 'common/actions/user';
import {getIsAuthenticated} from 'common/selectors/user';
import {Dispatch} from 'redux';

import {IState} from 'common/types/entities.d';

const mapStateToProps = (state: IState) => ({
	isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	proceedLogin: () => {
		localStorage.setItem('isDeveloper', 'true');
		dispatch(login());
	},
});

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Header));
