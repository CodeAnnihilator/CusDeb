import {connect} from 'react-redux';

import Slider from './Slider';

import {changeImageCreationPart} from 'modules/CreateImage/actions/actions';

import {getImageInitializationSlide} from 'modules/CreateImage/selectors/createImageSelectors';

const mapStateToProps = (state: any) => ({
	currentSlide: getImageInitializationSlide(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onSlide: (index: number) => dispatch(changeImageCreationPart(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
