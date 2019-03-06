import {connect} from 'react-redux';
import ImageCreationSelectedParts from '../components/ImageCreationSelectedParts/ImageCreationSelectedParts';
import {getSelectedItems, getSelectedSteps} from '../selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	steps: getSelectedItems(state),
	partsSelected: getSelectedSteps(state),
});

export default connect(mapStateToProps)(ImageCreationSelectedParts);
