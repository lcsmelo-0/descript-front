import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import persistReducers from './persistReducers'

import sagas from './sagas'
import reducers from './ducks'

const middlewares = []

const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

const store = createStore(persistReducers(reducers), compose(applyMiddleware(...middlewares)))
const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export default { store, persistor }
