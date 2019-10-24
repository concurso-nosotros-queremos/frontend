import { GOOGLE_LOGIN_SUCCESS } from '../googleLogin/types'
import { AUTH_CONVERT_TOKEN_REQUEST, AUTH_GOOGLE_PROVIDER } from '../auth/types'
import { authConvertTokenRequest, authConvertTokenSuccess, authConvertTokenError } from '../auth/actions'
import { convertToken } from '../../services/auth.service'

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
