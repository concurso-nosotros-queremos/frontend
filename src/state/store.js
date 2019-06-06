import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { testReducer } from './test_counter/reducers'
import googleLoginReducer from './googleLogin/reducers'

const rootReducer = combineReducers({ testReducer, googleLoginReducer })

const logger = createLogger({
  // TODO: implement custom logger
})

export function buildStore () {
  return createStore(
    rootReducer,
    applyMiddleware(logger)
  )
}
