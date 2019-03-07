import {connect} from 'react-redux';

import Slider from './Slider';

import {changeImageCreationPart} from 'modules/ImageCreation/actions/actions';

import {getImageInitializationSlide} from 'modules/ImageCreation/selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	currentSlide: getImageInitializationSlide(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onSlide: (index: number) => dispatch(changeImageCreationPart(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
