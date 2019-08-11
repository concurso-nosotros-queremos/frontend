import { FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_ERROR } from './types'

export function facebookLoginRequest () {
  return {
    type: FACEBOOK_LOGIN_REQUEST
  }
}

export function facebookLoginSuccess (data) {
  return {
    type: FACEBOOK_LOGIN_SUCCESS,
    data
  }
}

export function facebookLoginError (error) {
  return {
    type: FACEBOOK_LOGIN_ERROR,
    error
  }
}
