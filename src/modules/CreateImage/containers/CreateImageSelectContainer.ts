import Select from 'common/components/Select/Select';
import {SyntheticEvent} from 'react';
import {connect} from 'react-redux';

import {getSelectedItemByType, makeGetImagesByType, makeGetInputValue} from '../selectors/createImageSelectors';

import {selectEntity, setFilterByType} from '../actions/actions';

const makeMapStateToProps = () => {
	const getImagesByType = makeGetImagesByType();
	const getInputValueByType = makeGetInputValue();

	return (state: any, {type}: any) => ({
		selected: getSelectedItemByType(state, type),
		items: getImagesByType(state, type),
		headerTitle: `Select ${type}`,
		placeholder: `type a ${type}`,
		width: 300,
		height: 440,
		inputValue: getInputValueByType(state, type),
	});
};

const mapDispatchToProps = (dispatch: any, {type}: any) => ({
	onClick: (event: SyntheticEvent, entity: any) => dispatch(selectEntity({entity, type})),
	dropSelected: (event: SyntheticEvent) => dispatch(selectEntity({entity: null, type, isDrop: true})),
	onInputChange: (event: SyntheticEvent, filter: string) => dispatch(setFilterByType({filter, type})),
	onInputCloseBtnClick: (event: SyntheticEvent, filter: string) => dispatch(setFilterByType({filter: '', type})),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(Select as any);
