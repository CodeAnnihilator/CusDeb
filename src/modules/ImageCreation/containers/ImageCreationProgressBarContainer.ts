import {connect} from 'react-redux';
import ImageCreationProgressBar from '../components/ImageCreationProgressBar/ImageCreationProgressBarComponent';
import {getProcessSteps, getStepIndex} from '../selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	step: getStepIndex(state),
	steps: getProcessSteps(state),
});

export default connect(mapStateToProps)(ImageCreationProgressBar);
