import {connect} from 'react-redux';
import ProgressBar from '../components/ProgressBar/ProgressBarComponent';
import {getProcessSteps, getStepIndex} from '../selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	step: getStepIndex(state),
	steps: getProcessSteps(state),
});

export default connect(mapStateToProps)(ProgressBar);
