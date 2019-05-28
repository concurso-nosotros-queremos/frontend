import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // TODO: implement custom logger
})

export function buildStore () {
  return createStore(
    applyMiddleware(logger)
  )
}
