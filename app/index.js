import data from './component'
import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import Settings from './settings'
import Chat from './chat'
import Menu from './menu'

let someData = [1,2,3,4,5]

let SomeComponent = props => <div>
		<h1>{props.name}</h1>
		<Menu/>
	</div>

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Menu/>
			<Switch>
				<Route exact path="/" component={Settings} />
				<Route path="/settings" component={Settings} />
				<Route path="/chat" component={Chat} />
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);