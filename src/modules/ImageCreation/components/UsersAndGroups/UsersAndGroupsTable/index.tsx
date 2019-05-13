import {connect} from 'react-redux';
import {changeCountOfVisible, changePaginationStep} from './actions/usersAndGroupsActions';
import UsersAndGroupsTable from './components/UsersAndGroupsTable';

import {
	getCountOfTotalPages,
	getCountOfUsersOnScreen,
	getCurrentPaginationStep,
	getPackagesOnScreen,
	getUsersAndGroups,
} from './selectors/selectors';

const mapStateToProps = (state: any) => ({
	packages: getPackagesOnScreen(state),
	currentStep: getCurrentPaginationStep(state),
	countUsersOnScreen: getCountOfUsersOnScreen(state),
	totalPages: getCountOfTotalPages(state),
	allPackagesLength: getUsersAndGroups(state).length,
});

export default connect(mapStateToProps, {changePaginationStep, changeCountOfVisible})(UsersAndGroupsTable);
