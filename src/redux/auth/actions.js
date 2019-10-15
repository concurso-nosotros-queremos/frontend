import {
  AUTH_CONVERT_TOKEN_REQUEST,
  AUTH_CONVERT_TOKEN_SUCCESS,
  AUTH_CONVERT_TOKEN_ERROR,
  AUTH_SAVE_CONVERTED_TOKEN,
  AUTH_GET_PERSISTED_TOKEN_REQUEST,
  AUTH_GET_PERSISTED_TOKEN_SUCCESS,
  AUTH_GET_PERSISTED_TOKEN_ERROR
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

export function authSaveConvertedToken (convertedToken) {
  return {
    type: AUTH_SAVE_CONVERTED_TOKEN,
    convertedToken
  }
}

export function authGetPersistedTokenRequest () {
  return {
    type: AUTH_GET_PERSISTED_TOKEN_REQUEST
  }
}

export function authGetPersistedTokenSuccess (convertedToken) {
  return {
    type: AUTH_GET_PERSISTED_TOKEN_SUCCESS,
    convertedToken
  }
}

export function authGetPersistedTokenError (error) {
  return {
    type: AUTH_GET_PERSISTED_TOKEN_ERROR,
    error
  }
}
