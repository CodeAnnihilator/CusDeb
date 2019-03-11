import {SyntheticEvent} from 'react';
import {connect} from 'react-redux';

import SearchOptionsSection from '../components/SearchOptionsSection/SearchOptionsSection';

import {setImagesTextFilter} from '../actions/dashboard';
import {getImagesTextFilter} from '../selectors/dashboard';

const mapStateToProps = (state: any) => ({
	imagesTextFilter: getImagesTextFilter(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onInputChange: (event: SyntheticEvent, text: string) =>  dispatch(setImagesTextFilter(text)),
	onInputCloseBtnClick: () => dispatch(setImagesTextFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptionsSection as any);
