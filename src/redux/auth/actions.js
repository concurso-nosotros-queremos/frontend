import {
  AUTH_CONVERT_TOKEN_REQUEST,
  AUTH_CONVERT_TOKEN_SUCCESS,
  AUTH_CONVERT_TOKEN_ERROR,
  AUTH_CHECK_TOKEN_REQUEST,
  AUTH_CHECK_TOKEN_SUCCESS,
  AUTH_CHECK_TOKEN_ERROR
} from './types'

export function authConvertTokenRequest (provider, accessToken) {
  return {
    type: AUTH_CONVERT_TOKEN_REQUEST,
    provider: provider,
    accessToken: accessToken
  }
}

export function authConvertTokenSuccess (convertedToken) {
  return {
    type: AUTH_CONVERT_TOKEN_SUCCESS,
    convertedToken: convertedToken
  }
}

export function authConvertTokenError (error) {
  return {
    type: AUTH_CONVERT_TOKEN_ERROR,
    error
  }
}

export function authCheckTokenRequest (token) {
  return {
    type: AUTH_CHECK_TOKEN_REQUEST,
    token: token
  }
}

export function authCheckTokenSuccess (user) {
  return {
    type: AUTH_CHECK_TOKEN_SUCCESS,
    user: user
  }
}

export function authCheckTokenError (error) {
  return {
    type: AUTH_CHECK_TOKEN_ERROR,
    error
  }
}
