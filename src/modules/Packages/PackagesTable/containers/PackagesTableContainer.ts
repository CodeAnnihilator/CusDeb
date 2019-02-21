import {connect} from 'react-redux';
import {changeCountOfVisible, changePaginationStep} from '../actions/packagesActions';
import PackagesTable from '../components/PackagesTable';
import {
	getCountOfPackagesOnScreen,
	getCountOfTotalPages,
	getCurrentPaginationStep,
	getPackages,
	getPackagesOnScreen,
} from '../selectors/selectors';

const mapStateToProps = (state: any) => ({
	packages: getPackagesOnScreen(state),
	currentStep: getCurrentPaginationStep(state),
	countPackagesOnScreen: getCountOfPackagesOnScreen(state),
	totalPages: getCountOfTotalPages(state),
	allPackagesLength: getPackages(state).length,
});

export default connect(mapStateToProps, {changePaginationStep, changeCountOfVisible})(PackagesTable);
