import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import root_reducer from './reducers/root_reducer'
import thunk from 'redux-thunk'

const middlewares = [thunk]
let allStoreEnhancers

if (process.env.NODE_ENV === 'development') {
  allStoreEnhancers = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  allStoreEnhancers = compose(applyMiddleware(...middlewares))
}

const store = createStore(root_reducer, allStoreEnhancers)

export default store