import { AUTH_CONVERT_TOKEN_REQUEST, AUTH_CONVERT_TOKEN_SUCCESS, AUTH_CONVERT_TOKEN_ERROR } from './types'

const initialState = {
  isLoading: false,
  convertedToken: {},
  provider: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CONVERT_TOKEN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        convertedToken: {},
        provider: action.provider,
        error: null
      })
    case AUTH_CONVERT_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        convertedToken: action.data,
        provider: state.provider,
        error: null
      })
    case AUTH_CONVERT_TOKEN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        convertedToken: {},
        provider: action.provider,
        error: action.error
      })
    default:
      return state
  }
}
