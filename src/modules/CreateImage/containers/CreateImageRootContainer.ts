import {connect} from 'react-redux';
import CreateImageRoot from '../components/CreateImageRoot';

const mapStateToProps = () => ({
	step: '',
});

export default connect(mapStateToProps)(CreateImageRoot);
