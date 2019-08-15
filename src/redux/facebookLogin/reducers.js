import { FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_ERROR } from './types'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  facebToken: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: false,
        facebToken: {},
        error: null
      })
    case FACEBOOK_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true,
        facebToken: {
          accessToken: action.accessToken,
          id: action.id,
          signedRequest: action.signedRequest,
          userID: action.userID,
          expiresAt: action.data_access_expiration_time,
          expiresIn: action.expiresIn,
          reauthorizeRequiredIn: action.reauthorize_required_in
        },
        error: null
      })
    case FACEBOOK_LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        facebToken: {},
        error: action.error.message
      })
    default:
      return state
  }
}

/*
{
  "name": "Francesco Silvetti",
  "email": "francescosilvetti@outlook.com",
  "picture": {
    "data": {
      "height": 50,
      "is_silhouette": false,
      "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1913343992105444&height=50&width=50&ext=1562852176&hash=AeT7ui-6HPqqJ8aZ",
      "width": 50
    }
  },
  "id": "1913343992105444",
  "accessToken": "EAAkAMdDJq1IBADIZCEozi9PzgfAZAEEZChvI6VxCkfYTMXt9ZBMCE6Dn9APX8fyTF5WoFGzHtKLuuuxHdPkpQMiSscZA3iuLxI9JsQusHjpBuCrDs2xGDaoqTjqAUnSfBctWlzDTHCtG1u4KSQpT6hpoKkyrzLMUeUMQWInHFWGoXBFLVpO9aZCfY8ozLGBKEyPAWKZBooFdQZDZD",
  "userID": "1913343992105444",
  "expiresIn": 5025,
  "signedRequest": "EiQT9Kebp1yJHaCmC4XClvl1vmVajAy9Tb44vFiGlIc.eyJ1c2VyX2lkIjoiMTkxMzM0Mzk5MjEwNTQ0NCIsImNvZGUiOiJBUURDS0pnWlc1b2xhaXpuME5KVzNiN3lXbE1DLThxQ3ktVjNWRWVBUU0wS0VVdVVXdWhJN2RHQ1JpclNGOVlNbnhMVWxQbENSUWNGazBrdHBmV2wxQ0RhaW45NS1RMFVXSzAyRWJFNTdac2hKMk9TdTVCd1RCS2hlU3BIYTA5cnQzZFc5b1VMWjB2Qkh5YUZXdVdvbUp1STRqSUtZVkw5dzlrNEg4TnBJdWF2YXJXaU1WWk4tb2JHa0NIaG81X283TmVKclN1UFd2Zm1XaXdSZFFGdFYyOW0wUGtlTHhmVEZoOVphNEtueDRoclFybURFQ2FBZzVZQVQxTWtndlpiV2tCV0FuSzEtN3NsYWJ1NU5RSGFmNmxTcU0yVUFPeUNzTDlQSTVWQzVHUW9pZ3VZa1hndS0yQm5udUtQSFBGa1dSNDJERVJnTk5VcWI3djhvR00xbGNNNiIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNTYwMjYwMTc1fQ",
  "reauthorize_required_in": 7776000,
  "data_access_expiration_time": 1568036175
}
*/
