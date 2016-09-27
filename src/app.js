import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './container/App'
import Index from './container/Index'
import Presentation from './container/Presentation'

const reducers = {
	main: function(state = {}, action){ return state; }
};

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Index}/>
				<Route path="pt" component={Presentation}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);