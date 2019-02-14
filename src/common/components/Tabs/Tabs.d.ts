import {ReactChildren, ReactNode, ReactText} from 'react';

interface ITab {
	title: ReactText | ReactNode;
	content: ReactText | ReactNode;
}

export default interface ITabsProps {
	tabStyle?: object;
	activeTabStyle?: object;
	contentStyle?: object;
	tabs: ITab[];
}
