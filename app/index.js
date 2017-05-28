import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import Settings from './Settings'
import Chat from './chat'
import Menu from './menu'
import Github from './github'
import reducer from './reducer'
import mySaga from './sagas'

const 
	sagaMiddleware = createSagaMiddleware(),
	someData = [1,2,3,4,5],
	GithubList = () => <Github list={someData} />

let store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(mySaga);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Menu />
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
