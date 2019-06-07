import { GOOGLE_LOGIN_SUCCESS } from '../googleLogin/types'
import { convertToken } from '../api/googleLogin'

export const googleLoginMiddleware = store => next => action => {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      convertToken(action.data.Zi.access_token)
      break
    default:
      break
  }
  next(action)
}
