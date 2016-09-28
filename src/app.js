import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory as fromHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import useBasename from 'history/lib/useBasename'
import App from './container/App'
import Index from './container/Index'
import Presentation from './container/Presentation'
import Blog from './container/Blog'

function withExampleBasename(history, dirname) {
	return useBasename(() => history)({ basename: `/${dirname}` })
}

const reducers = {
	main: function(state = {}, action) {
		return state;
	}
};

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
);

const history = syncHistoryWithStore(withExampleBasename(fromHistory, 'content'), store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Index}/>
				<Route path="index" component={Index}/>
				<Route path="pt" component={Presentation}/>
				<Route path="blog" component={Blog}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);