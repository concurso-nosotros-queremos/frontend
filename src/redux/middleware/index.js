import { GOOGLE_LOGIN_SUCCESS } from '../googleLogin/types'
import { FACEBOOK_LOGIN_SUCCESS } from '../facebookLogin/types'
import { AUTH_CONVERT_TOKEN_REQUEST, AUTH_GOOGLE_PROVIDER, AUTH_FACEBOOK_PROVIDER, AUTH_CONVERT_TOKEN_SUCCESS, AUTH_SAVE_CONVERTED_TOKEN, AUTH_GET_PERSISTED_TOKEN_REQUEST } from '../auth/types'
import { authConvertTokenRequest, authConvertTokenSuccess, authConvertTokenError, authSaveConvertedToken, authGetPersistedTokenSuccess, authGetPersistedTokenError } from '../auth/actions'
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
    case AUTH_CONVERT_TOKEN_SUCCESS:
      store.dispatch(authSaveConvertedToken(action.convertedToken))
      break
    case AUTH_SAVE_CONVERTED_TOKEN:
      window.localStorage.setItem('convertedToken', JSON.stringify(action.convertedToken))
      break
    case AUTH_GET_PERSISTED_TOKEN_REQUEST: {
      const token = window.localStorage.getItem('convertedToken')
      console.log(token)
      store.dispatch(token !== 'undefined' && token !== null ? authGetPersistedTokenSuccess(JSON.parse(token)) : authGetPersistedTokenError('Not found...'))
      break
    }
    default:
      break
  }
  next(action)
}
