import { GOOGLE_LOGIN_SUCCESS } from '../googleLogin/types'
import { FACEBOOK_LOGIN_SUCCESS } from '../facebookLogin/types'
import { AUTH_CONVERT_TOKEN_REQUEST, AUTH_GOOGLE_PROVIDER, AUTH_FACEBOOK_PROVIDER } from '../auth/types'
import { authConvertTokenRequest, authConvertTokenSuccess, authConvertTokenError } from '../auth/actions'
import { convertToken } from '../../api/auth'

export const googleLoginMiddleware = store => next => action => {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      store.dispatch(authConvertTokenRequest(AUTH_GOOGLE_PROVIDER, action.data.Zi.access_token))
      break
    default:
      break
  }
  next(action)
}

export const facebookLoginMiddleware = store => next => action => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      store.dispatch(authConvertTokenRequest(AUTH_FACEBOOK_PROVIDER, action.data.accessToken))
      break
    default:
      break
  }
  next(action)
}

export const authMiddleware = store => next => action => {
  switch (action.type) {
    case AUTH_CONVERT_TOKEN_REQUEST:
      convertToken(action.provider, action.accessToken)
        .then((json) => { store.dispatch(authConvertTokenSuccess(json)) })
        .catch((err) => { store.dispatch(authConvertTokenError(err)) })
      break
    default:
      break
  }
  next(action)
}
