export default function createRoukaStore(reducers) {
    return combineReducers({
        ...reducers,
        routing: routerReducer
    })
}