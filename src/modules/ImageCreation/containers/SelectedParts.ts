import {connect} from 'react-redux';
import SelectedParts from '../components/SelectedParts/SelectedParts';
import {getSelectedItems, getSelectedSteps} from '../selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	steps: getSelectedItems(state),
	partsSelected: getSelectedSteps(state),
});

export default connect(mapStateToProps)(SelectedParts);
