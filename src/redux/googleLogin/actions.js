import { GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from './types'

export function googleLoginRequest () {
  return {
    type: GOOGLE_LOGIN_REQUEST
  }
}

export function googleLoginSuccess (data) {
  return {
    type: GOOGLE_LOGIN_SUCCESS,
    data
  }
}

export function googleLoginError (error) {
  return {
    type: GOOGLE_LOGIN_ERROR,
    error
  }
}
