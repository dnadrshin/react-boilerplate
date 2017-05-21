import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import Settings from './settings'
import Chat from './chat'
import Menu from './menu'
import Github from './github'

let someData = [1,2,3,4,5],
	GithubList = () => <Github list={someData}/>

ReactDOM.render(
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
	</BrowserRouter>,

	document.getElementById('root')
);
