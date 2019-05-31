import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { rootReducer } from './reducers'

const logger = createLogger({
  // TODO: implement custom logger
})

export function buildStore () {
  return createStore(
    rootReducer,
    applyMiddleware(logger)
  )
}
