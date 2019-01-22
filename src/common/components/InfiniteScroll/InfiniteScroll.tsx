import React, {PureComponent} from 'react';

interface IProps {
	children: React.ReactChild[];
}

interface IState {
	totalCount: number;
	currentCount: number;
	offset: number;
}

export default class InfiniteScroll extends PureComponent<IProps, IState> {
	private readonly scroll: any;

	constructor(props: IProps) {
		super(props);
		this.scroll = React.createRef();
	}

	public state: IState = {
		totalCount: this.props.children.length,
		currentCount: 3,
		offset: 3,
	};

	public componentDidMount() {
		window.addEventListener('scroll', this.loadOnScroll);
	}

	public componentWillUnmount() {
		window.removeEventListener('scroll', this.loadOnScroll);
	}

	private readonly loadOnScroll = (): void => {
		const {currentCount, totalCount} = this.state;
		const {innerHeight, innerWidth} = window;
		if (currentCount === totalCount) return;
		const rect = this.scroll.getBoundingClientRect();
		const isAtEnd = rect.bottom <= innerHeight && rect.right <= innerWidth;
		if (isAtEnd) this.setState(st => ({currentCount: st.currentCount + 3}));
	}

	public render() {
		const {currentCount, totalCount} = this.state;
		const {children} = this.props;

		return (
			<div ref={this.scroll}>
				{ children.filter((_, index) => index <= currentCount) }
				{ currentCount < totalCount && <div>Please wait. Loading...</div> }
			</div>
		);
	}
}
