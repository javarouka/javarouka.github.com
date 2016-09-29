import { applyMiddleware, createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleWare from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'
import app from '../reducers/root'

export default function createMyStore(defaultState = {}) {

    const middleware = [
        thunkMiddleWare,
        loggerMiddleware
    ];

    return createStore(combineReducers({
        app,
        routing: routerReducer
    }), defaultState, applyMiddleware(...middleware))
}