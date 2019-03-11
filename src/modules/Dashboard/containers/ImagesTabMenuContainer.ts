import {connect} from 'react-redux';

import {
	getAllImagesCount,
	getBuildingImagesCount,
	getFailedImagesCount,
	getSuccededImagesCount,
} from 'common/selectors/entities';

import {setActiveImagesStatus} from 'modules/Dashboard/actions/dashboard';

import ImagesTabMenu from '../components/ImagesTabMenu/ImagesTabMenu';

const mapStateToProps = (state: any) => ({
		allImages: getAllImagesCount(state),
		buildingImages: getBuildingImagesCount(state),
		succededImages: getSuccededImagesCount(state),
		failedImages: getFailedImagesCount(state),
		activeImagesStatus: state.dashboard.activeImagesStatus,
});

const mapDispatchToProps = (dispatch: any) => ({
	setActiveImagesStatus: (status: any) => dispatch(setActiveImagesStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesTabMenu as any);
