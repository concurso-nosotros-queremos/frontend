import { INCREMENT, DECREMENT } from './types'

let initialState = {
  testCount: 0
}

export function testReducer (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count++
      })
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count--
      })
    default:
      break
  }
}
