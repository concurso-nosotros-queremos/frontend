import {
  AUTH_CONVERT_TOKEN_REQUEST,
  AUTH_CONVERT_TOKEN_SUCCESS,
  AUTH_CONVERT_TOKEN_ERROR
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
