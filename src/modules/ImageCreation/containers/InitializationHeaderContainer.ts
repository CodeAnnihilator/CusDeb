import {MouseEvent} from 'react';
import {connect} from 'react-redux';
import {changeCurrentStep} from '../actions/actions';
import Header from '../components/InitializationHeader/InitializationHeader';
import {getAlertTitleKey, getCurrentStep} from '../selectors/imageCreationSelectors';

const mapStateToProps = (state: any) => ({
	step: getCurrentStep(state),
	alertTitleKey: getAlertTitleKey(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	changeStep: (event: MouseEvent<HTMLButtonElement>, value: string) => dispatch(changeCurrentStep(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header as any);
