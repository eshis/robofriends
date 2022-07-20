import	React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor (props) {
		super(props);
		this.state = {
			hasError: false
		}

	}

	compenentDidCatch(error, info) {
		this.setState({ hasError: true })

	}

	render() {
		if (this.state.hasError) {
			return <h1>Opppps. Dang. </h1>

		}
		return this.props.children
	}
}

export default ErrorBoundary;