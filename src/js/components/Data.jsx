import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Data extends React.Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		const { data, signOutData } = this.props;
		console.log('this is the data', this.props.data);
		return (
			<div>
				<div className="button">
					<button onClick={signOutData}>Sign out</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data
	};
}

export default connect(mapStateToProps, {
	getData: actions.getData,
	signOutData: actions.signOutData
})(Data);
