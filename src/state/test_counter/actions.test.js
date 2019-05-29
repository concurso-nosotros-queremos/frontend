import * as actions from './actions'
import * as types from './types'

describe('actions', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: types.INCREMENT
    }
    expect(actions.increment()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to decrement counter', () => {
    const expectedAction = {
      type: types.DECREMENT
    }
    expect(actions.decrement()).toEqual(expectedAction)
  })
})
