import {connect} from 'react-redux';

import {requestImages} from 'common/actions/entities';
import {getImages} from 'common/selectors/entities';

import {getImagesByStatus} from 'modules/Dashboard/selectors/dashboard';

import {selectImage} from '../actions/dashboard';
import Dashboard from '../Dashboard';
import {getActiveImage} from '../selectors/dashboard';

const mapStateToProps = (state: any) => ({
	images: getImages(state),
	activeImage: getActiveImage(state),
	imagesByActiveStatus: getImagesByStatus(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	requestImages: () => dispatch(requestImages()),
	selectImage: (name: any) => dispatch(selectImage(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
