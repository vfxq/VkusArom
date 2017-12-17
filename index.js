import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reduser from './reducer'
import thunk from 'redux-thunk'
import history from '../history'
//import logger from 'redux-logger' 

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(routerMiddleware(history), sagaMiddleware, thunk)

const store = createStore(reduser, {}, enhancer)
sagaMiddleware.run(saga)

window.store = store

export default store