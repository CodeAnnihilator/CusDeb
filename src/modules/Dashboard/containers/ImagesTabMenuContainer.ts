import {connect} from 'react-redux';

import {
		getAllImagesCount,
		getBuildingImagesCount,
		getFailedImagesCount,
		getSuccededImagesCount,
		} from 'common/selectors/entities';

import ImagesTabMenu from '../components/ImagesTabMenu/ImagesTabMenu';

const mapStateToProps = (state: any) => ({
		allImages: getAllImagesCount(state),
		buildingImages: getBuildingImagesCount(state),
		succededImages: getSuccededImagesCount(state),
		failedImages: getFailedImagesCount(state),
});

export default connect(mapStateToProps)(ImagesTabMenu);
