import { GOOGLE_LOGIN_SUCCESS } from '../googleLogin/types'
import { AUTH_CONVERT_TOKEN_REQUEST } from '../auth/types'
import { authConvertTokenRequest, authConvertTokenSuccess } from '../auth/actions'
import { convertToken } from '../../api/googleLogin'

export const googleLoginMiddleware = store => next => action => {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      store.dispatch(authConvertTokenRequest('google', action.data.Zi.access_token))
      break
    case AUTH_CONVERT_TOKEN_REQUEST:
      convertToken(action.accessToken).then((json) => { store.dispatch(authConvertTokenSuccess(json)) })
      break
    default:
      break
  }
  next(action)
}
