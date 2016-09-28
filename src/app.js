import './css/css.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory as fromHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import withExampleBasename from './etc/withExampleBasename'
import createAppStore from './store/createMyStore'
import baseRoute from './routes/base'

const store = createAppStore();
const history = syncHistoryWithStore(withExampleBasename(fromHistory, 'content'), store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={baseRoute} />
	</Provider>,
	document.getElementById('app')
);