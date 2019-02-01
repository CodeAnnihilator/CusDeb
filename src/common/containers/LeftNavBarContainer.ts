import {RouteComponentProps, withRouter} from 'react-router';

import LeftNavBar from 'common/components/LeftNavBar/LeftNavBar';

interface IProps extends RouteComponentProps {
	isCollapsed: boolean;
}

export default withRouter<IProps>(LeftNavBar as any);
