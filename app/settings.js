import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Settings extends React.Component {
	constructor() {
		super()
	}
	render(){
		return <div>
			<h1>Settings {this.props.state}</h1>
			<button onClick={this.props.increase}>+</button>
			<button onClick={this.props.decrease}>-</button>
		</div>
	}
}

export default connect(
	state => ({
		state: state
	}),
	dispatch => ({
		increase: () => {dispatch({type:'INCREASE'})},
		decrease: () => {dispatch({type:'DECREASE'})}
	})
)(Settings)
