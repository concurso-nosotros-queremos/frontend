import { GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from '../googleLogin/types'

const initialState = {
  isLoading: false,
  token_data: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        token_data: {}
      })
    case GOOGLE_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        token_data: action.data
      })
    case GOOGLE_LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        token_data: {},
        error: action.error
      })
    default:
      return state
  }
}
