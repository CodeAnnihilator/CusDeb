import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {requestImages} from 'common/actions/entities';

import {selectImage} from '../actions/dashboard';
import Dashboard from '../Dashboard';
import {getActiveImage, getFilteredImages, getImagesTextFilter} from '../selectors/dashboard';

const mapStateToProps = (state: any) => ({
	images: getFilteredImages(state),
	activeImage: getActiveImage(state),
	textFilter: getImagesTextFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	requestImages: () => dispatch(requestImages()),
	selectImage: (name: any) => dispatch(selectImage(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
