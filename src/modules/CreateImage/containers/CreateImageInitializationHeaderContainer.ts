import {connect} from 'react-redux';
import {changeCurrentStep} from '../actions/actions';
import Header from '../components/CreateImageInitializationHeaderComponent/CreateImageInitializationHeaderComponent';

const mapDispatchToProps = {
	changeStep: changeCurrentStep,
};

export default connect(null, mapDispatchToProps)(Header as any);
