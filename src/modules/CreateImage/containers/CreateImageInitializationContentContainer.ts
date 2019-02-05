import {connect} from 'react-redux';
import InitializationContent from '../components/CreateImageInitializationContent/CreateImageInitializationContent';
import {getSelectedSteps, getSelectItems} from '../selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	selectTypes: getSelectItems(state),
	selectedItems: getSelectedSteps(state),
});

export default connect(mapStateToProps)(InitializationContent as any);
