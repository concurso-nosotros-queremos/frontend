import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import googleLoginReducer from './googleLogin/reducers'

const rootReducer = combineReducers({ googleLoginReducer })

const logger = createLogger({
  // TODO: implement custom logger
})

export function buildStore () {
  return createStore(
    rootReducer,
    applyMiddleware(logger)
  )
}
