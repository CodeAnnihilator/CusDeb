import {connect} from 'react-redux';
import CreateImageRoot from '../components/CreateImageRoot';
import {getCurrentStep} from '../selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	step: getCurrentStep(state),
});

export default connect(mapStateToProps)(CreateImageRoot);
