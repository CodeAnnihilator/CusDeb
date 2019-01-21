import {connect} from 'react-redux';

import {requestImages} from 'common/actions/entities';
import {getImages} from 'common/selectors/entities';

import Dashboard from '../Dashboard';
import {selectImage} from '../actions/dashboard';
import {getActiveImage} from '../selectors/dashboard';

const mapStateToProps = state => ({
	images: getImages(state),
	activeImage: getActiveImage(state),
});

const mapDispatchToProps = dispatch => ({
	requestImages: () => dispatch(requestImages()),
	selectImage: name => dispatch(selectImage(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
