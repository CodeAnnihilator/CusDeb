import {connect} from 'react-redux';

import {requestImages} from 'common/actions/entities';
import {getFilteredImages} from 'common/selectors/entities';

import {getImagesByStatus} from 'modules/Dashboard/selectors/dashboard';

import {selectImage} from '../actions/dashboard';
import Dashboard from '../Dashboard';
import {getActiveImage, getImagesTextFilter} from '../selectors/dashboard';

const mapStateToProps = (state: any) => ({
	images: getFilteredImages(state),
	activeImage: getActiveImage(state),
	imagesByActiveStatus: getImagesByStatus(state),
	textFilter: getImagesTextFilter(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	requestImages: () => dispatch(requestImages()),
	selectImage: (name: any) => dispatch(selectImage(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
