import {connect} from 'react-redux';
import CreateImageProgressBar from '../components/CreateImageProgressBar/CreateImageProgressBarComponent';
import {getProcessSteps, getStepIndex} from '../selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	step: getStepIndex(state),
	steps: getProcessSteps(state),
});

export default connect(mapStateToProps)(CreateImageProgressBar);
