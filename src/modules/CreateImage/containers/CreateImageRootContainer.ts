import {connect} from 'react-redux';
import CreateImageRoot from '../components/CreateImageRoot';
import {getCurrentStep, getSteps} from '../selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	step: getCurrentStep(state),
	steps: getSteps(state),
});

export default connect(mapStateToProps)(CreateImageRoot);
