import {connect} from 'react-redux';
import CreateImageInitializationContent from '../components/CreateImageInitializationContent';

const mapStateToProps = () => ({
	device: [],
	distros: [],
	types: [],
});

export default connect(mapStateToProps)(CreateImageInitializationContent);
