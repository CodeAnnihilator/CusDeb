import {connect} from 'react-redux';

import {RootState} from 'root/index';

import {
	getAllImagesCount,
	getBuildingImagesCount,
	getFailedImagesCount,
	getSuccededImagesCount,
} from 'common/selectors/entities';

import {setActiveImagesStatus} from 'modules/Dashboard/actions/dashboard';

import ImagesTabMenu from '../components/ImagesTabMenu/ImagesTabMenu';
import {getActiveImagesStatus} from '../selectors/dashboard';

const mapStateToProps = (state: RootState) => ({
	allImages: getAllImagesCount(state),
	buildingImagesCount: getBuildingImagesCount(state),
	succededImagesCount: getSuccededImagesCount(state),
	failedImagesCount: getFailedImagesCount(state),
	activeImagesStatus: getActiveImagesStatus(state),
});

const mapDispatchToProps = {
	setActiveImagesStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesTabMenu);
