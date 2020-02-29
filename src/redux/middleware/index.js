import { GOOGLE_LOGIN_SUCCESS } from '../googleLogin/types'
import { AUTH_CONVERT_TOKEN_REQUEST, AUTH_GOOGLE_PROVIDER, AUTH_CHECK_TOKEN_REQUEST, AUTH_CONVERT_TOKEN_SUCCESS } from '../auth/types'
import { authConvertTokenRequest, authConvertTokenSuccess, authConvertTokenError, authCheckTokenRequest, authCheckTokenSuccess, authCheckTokenError } from '../auth/actions'
import { convertToken, checkToken } from '../../services/auth.service'

export const googleLoginMiddleware = store => next => action => {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      store.dispatch(authConvertTokenRequest(AUTH_GOOGLE_PROVIDER, action.data.tokenObj.access_token))
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
    case 'persist/REHYDRATE':
      try {
        const token = action.payload.auth.convertedToken.accessToken
        if (token) {
          store.dispatch(authCheckTokenRequest(token))
        }
      } catch (e) {
        console.log(e)
      }
      break
    case AUTH_CONVERT_TOKEN_SUCCESS:
      try {
        store.dispatch(authCheckTokenRequest(action.convertedToken.access_token))
      } catch (e) {
        console.log(e)
      }
      break
    case AUTH_CHECK_TOKEN_REQUEST:
      checkToken(action.token)
        .then((json) => { store.dispatch(authCheckTokenSuccess(json)) })
        .catch((err) => { store.dispatch(authCheckTokenError(err)) })
      break
    default:
      break
  }
  next(action)
}
