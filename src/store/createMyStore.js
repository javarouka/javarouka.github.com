import reducers from '../reducers/root'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleWare from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'

export default function createMyStore(defaultState = {}) {

    const middleware = [
        thunkMiddleWare,
        loggerMiddleware
    ];

    return createStore(combineReducers({
        ...reducers,
        routing: routerReducer
    }), defaultState, applyMiddleware(...middleware))
}