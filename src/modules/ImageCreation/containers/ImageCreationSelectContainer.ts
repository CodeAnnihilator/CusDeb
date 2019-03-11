import Select from 'common/components/Select/Select';
import {SyntheticEvent} from 'react';
import {connect} from 'react-redux';

import {getImagesByType, getInputValue, getSelectedItemByType} from '../selectors/imageCreationSelectors';

import {selectEntity, setFilterByType} from '../actions/actions';

const makeMapStateToProps = () => {
	const getInputValueByType = getInputValue();

	return (state: any, {type}: any) => ({
		selected: getSelectedItemByType(state, type),
		items: getImagesByType()(state, type),
		headerTitle: `Select ${type}`,
		placeholder: `find ${type}...`,
		width: 286,
		height: 400,
		inputValue: getInputValueByType(state, type),
	});
};

const mapDispatchToProps = (dispatch: any, {type}: any) => ({
	onClick: (event: SyntheticEvent, entity: any) => dispatch(selectEntity({entity, type})),
	dropSelected: (event: SyntheticEvent) => dispatch(selectEntity({entity: null, type, isSelected: true})),
	onInputChange: (event: SyntheticEvent, filter: string) => dispatch(setFilterByType({filter, type})),
	onInputCloseBtnClick: (event: SyntheticEvent) => dispatch(setFilterByType({filter: '', type})),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Select as any);
