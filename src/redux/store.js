import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger'
import googleLogin from './googleLogin/reducers'
import auth from './auth/reducers'
import { googleLoginMiddleware, authMiddleware } from './middleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ googleLogin, auth })

const logger = createLogger({
  // TODO: implement custom logger
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function buildStore () {
  const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(logger, googleLoginMiddleware, authMiddleware))
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
