import { GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from './types'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  googToken: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: false,
        googToken: {},
        error: null
      })
    case GOOGLE_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true,
        googToken: {
          accessToken: action.data.tokenObj.access_token,
          idToken: action.data.tokenObj.id_token,
          tokenType: action.data.tokenObj.token_type,
          expiresAt: action.data.tokenObj.expires_at,
          expiresIn: action.data.tokenObj.expires_in,
          loginHint: action.data.tokenObj.login_hint,
          scope: action.data.tokenObj.scope
        },
        error: null
      })
    case GOOGLE_LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        googToken: {},
        error: action.error.error
      })
    default:
      return state
  }
}
