import {
  AUTH_CONVERT_TOKEN_REQUEST,
  AUTH_CONVERT_TOKEN_SUCCESS,
  AUTH_CONVERT_TOKEN_ERROR,
  AUTH_GET_PERSISTED_TOKEN_REQUEST,
  AUTH_GET_PERSISTED_TOKEN_SUCCESS,
  AUTH_GET_PERSISTED_TOKEN_ERROR
} from './types'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  convertedToken: {},
  provider: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CONVERT_TOKEN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: false,
        convertedToken: {},
        provider: action.provider,
        error: null
      })
    case AUTH_CONVERT_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true,
        convertedToken: {
          accessToken: action.convertedToken.access_token,
          refreshToken: action.convertedToken.refresh_token,
          tokenType: action.convertedToken.token_type,
          expiresIn: action.convertedToken.expires_in,
          scope: action.convertedToken.scope
        },
        provider: state.provider,
        error: null
      })
    case AUTH_CONVERT_TOKEN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        convertedToken: {},
        provider: action.provider,
        error: action.error.message
      })
    case AUTH_GET_PERSISTED_TOKEN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: state.isLoggedIn,
        convertedToken: state.convertedToken,
        provider: state.provider,
        error: null
      })
    case AUTH_GET_PERSISTED_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true,
        convertedToken: {
          accessToken: action.convertedToken.access_token,
          refreshToken: action.convertedToken.refresh_token,
          tokenType: action.convertedToken.token_type,
          expiresIn: action.convertedToken.expires_in,
          scope: action.convertedToken.scope
        },
        provider: state.provider,
        error: null
      })
    case AUTH_GET_PERSISTED_TOKEN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        convertedToken: {},
        provider: state.provider,
        error: action.error
      })
    default:
      return state
  }
}
