import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger'
import googleLogin from './googleLogin/reducers'
import facebookLogin from './facebookLogin/reducers'
import auth from './auth/reducers'
import { googleLoginMiddleware, facebookLoginMiddleware, authMiddleware } from './middleware'

const rootReducer = combineReducers({ googleLogin, facebookLogin, auth })

const logger = createLogger({
  // TODO: implement custom logger
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function buildStore () {
  return createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(logger, googleLoginMiddleware, facebookLoginMiddleware, authMiddleware)),
  )
}
