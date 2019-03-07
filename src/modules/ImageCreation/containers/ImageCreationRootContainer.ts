import {connect} from 'react-redux';
import ImageCreationRoot from '../components/ImageCreationRoot';
import {getCurrentStep, getSteps} from '../selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	step: getCurrentStep(state),
	steps: getSteps(state),
});

export default connect(mapStateToProps)(ImageCreationRoot);
