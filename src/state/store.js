import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import googleLogin from './googleLogin/reducers'
import auth from './auth/reducers'
import { googleLoginMiddleware } from './middleware'

const rootReducer = combineReducers({ googleLogin, auth })

const logger = createLogger({
  // TODO: implement custom logger
})

export function buildStore () {
  return createStore(
    rootReducer,
    applyMiddleware(logger, googleLoginMiddleware)
  )
}
