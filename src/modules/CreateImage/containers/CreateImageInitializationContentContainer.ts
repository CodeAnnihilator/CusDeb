import {connect} from 'react-redux';
import CreateImageInitializationContent from '../components/CreateImageInitializationContent';
import {getSelectItems} from '../selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	selectTypes: getSelectItems(state),
});

export default connect(mapStateToProps)(CreateImageInitializationContent as any);
