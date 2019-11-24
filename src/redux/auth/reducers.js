import {
  AUTH_CONVERT_TOKEN_REQUEST,
  AUTH_CONVERT_TOKEN_SUCCESS,
  AUTH_CONVERT_TOKEN_ERROR,
  AUTH_CHECK_TOKEN_REQUEST,
  AUTH_CHECK_TOKEN_SUCCESS,
  AUTH_CHECK_TOKEN_ERROR
} from './types'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  convertedToken: {},
  provider: null,
  error: null,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CONVERT_TOKEN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: false,
        convertedToken: {
          accessToken: null
        },
        provider: action.provider,
        error: null,
        user: {}
      })
    case AUTH_CONVERT_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: false,
        convertedToken: {
          accessToken: action.convertedToken.access_token,
          refreshToken: action.convertedToken.refresh_token,
          tokenType: action.convertedToken.token_type,
          expiresIn: action.convertedToken.expires_in,
          scope: action.convertedToken.scope
        },
        provider: state.provider,
        error: null,
        user: {}
      })
    case AUTH_CONVERT_TOKEN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        convertedToken: {},
        provider: action.provider,
        error: action.error.message,
        user: {}
      })
    case AUTH_CHECK_TOKEN_REQUEST:
      return Object.assign({}, state, {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: null,
        user: {}
      })
    case AUTH_CHECK_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null,
        user: action.user
      })
    case AUTH_CHECK_TOKEN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        convertedToken: {},
        provider: action.provider,
        error: action.error.message,
        user: {}
      })
    default:
      return state
  }
}
