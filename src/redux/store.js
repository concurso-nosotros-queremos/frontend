import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import googleLogin from './googleLogin/reducers'
import facebookLogin from './facebookLogin/reducers'
import auth from './auth/reducers'
import { googleLoginMiddleware, facebookLoginMiddleware, authMiddleware } from './middleware'

const rootReducer = combineReducers({ googleLogin, facebookLogin, auth })

const logger = createLogger({
  // TODO: implement custom logger
})

export function buildStore () {
  return createStore(
    rootReducer,
    applyMiddleware(logger, googleLoginMiddleware, facebookLoginMiddleware, authMiddleware)
  )
}
