import {connect} from 'react-redux';

import ImagesCardView from '../components/ImagesCardView/ImagesCardView';

import {getImagesWithReplacedText} from '../selectors/dashboard';

const mapStateToProps = (state: any) => ({
	images: getImagesWithReplacedText(state),
});

export default connect(mapStateToProps)(ImagesCardView);
