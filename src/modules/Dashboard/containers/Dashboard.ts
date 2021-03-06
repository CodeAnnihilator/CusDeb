import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ActionType} from 'typesafe-actions';
import * as actions from '../actions/dashboard';

import {RootState} from 'root/index';

import {requestImages} from 'common/actions/entities';

import {getImagesByStatus, getImagesWithFilteredText} from 'modules/Dashboard/selectors/dashboard';

import Dashboard from '../Dashboard';

import {getActiveImage} from '../selectors/dashboard';

export type DashboardActions =
	| ActionType<typeof actions>
	| ActionType<typeof requestImages>;

const mapStateToProps = (state: RootState) => ({
	images: getImagesWithFilteredText(state),
	activeImage: getActiveImage(state),
	imagesByActiveStatus: getImagesWithFilteredText(state),
});

const mapDispatchToProps = (dispatch: Dispatch<DashboardActions>) => ({
	requestImages: () => dispatch(requestImages()),
	selectImage: (name: string) => dispatch(actions.selectImage(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
