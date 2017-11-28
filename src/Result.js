import React from 'react';
// import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Result extends React.Component {
	render() {
		return (
			<div className="result">
				{this.props.counter.currentValue}
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		counter: state.counter
	};
}


export default connect(mapStateToProps)(Result);