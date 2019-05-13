import {connect} from 'react-redux';

import {changeImageCreationPart} from 'modules/ImageCreation/actions/actions';

import InitializationContent from '../components/InitializationContent/InitializationContent';
import {getImageInitializationSlide, getSelectedSteps, getSelectItems} from '../selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	selectTypes: getSelectItems(state),
	selectedItems: getSelectedSteps(state),
	currentSlide: getImageInitializationSlide(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	moveSlider: (index: number) => dispatch(changeImageCreationPart(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitializationContent as any);
