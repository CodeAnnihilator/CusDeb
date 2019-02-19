import {connect} from 'react-redux';
import CreateImageSelectedParts from '../components/CreateImageSelectedParts/CreateImageSelectedParts';
import {getSelectedItems, getSelectedSteps} from '../selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	steps: getSelectedItems(state),
	partsSelected: getSelectedSteps(state),
});

export default connect(mapStateToProps)(CreateImageSelectedParts);
