import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'

class Settings extends React.Component {
	constructor(props) {
		super(props)
	}

	doSet(id) {
		this.props.set(10)
	}

	render(){
		return <div>
			<h1>Settings {this.props.state.settings.counter}</h1>
			<button onClick={this.props.increase}>+</button>
			<button onClick={this.props.decrease}>-</button>
			<button onClick={() => this.doSet()}>set</button>
		</div>
	}
}

export default connect(
	state => ({
		state: state
	}),

	(dispatch, props) => ({
		set     : id => dispatch(actions.dataSet(id)),
		increase: () => dispatch({type:'INCREASE'}),
		decrease: () => dispatch({type:'DECREASE'})
	})
)(Settings)
