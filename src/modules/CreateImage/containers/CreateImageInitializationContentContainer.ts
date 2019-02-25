import {connect} from 'react-redux';

import {changeImageCreationPart} from 'modules/CreateImage/actions/actions';

import InitializationContent from '../components/CreateImageInitializationContent/CreateImageInitializationContent';
import {getImageInitializationSlide, getSelectedSteps, getSelectItems} from '../selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	selectTypes: getSelectItems(state),
	selectedItems: getSelectedSteps(state),
	currentSlide: getImageInitializationSlide(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	moveSlider: (index: number) => dispatch(changeImageCreationPart(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitializationContent as any);
