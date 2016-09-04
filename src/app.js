import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Index from './container/Index'

// Add the reducer to your store on the `routing` key
const reducers = {
	main: function(s){ return s; }
};

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Index} />
		</Router>
	</Provider>,
	document.getElementById('app')
);