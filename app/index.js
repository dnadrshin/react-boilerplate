import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import Settings from './settings'
import Chat from './chat'
import Menu from './menu'
import Github from './github'

let someData = [1,2,3,4,5],
	GithubList = () => <Github list={someData}/>


var reducer = (state = 1, action) => {
	switch (action.type) {
		case "INCREASE":
			return state + 1
		case "DECREASE":
			return state - 1
		default:
			return state
	}
}

var store = createStore(reducer, applyMiddleware(logger))


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Menu/>
				<Switch>
					<Route exact path="/" component={Settings} />
					<Route path="/settings" component={Settings} />
					<Route path="/chat" component={Chat} />
					<Route path="/github" component={GithubList} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);
