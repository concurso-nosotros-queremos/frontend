import { GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from './types'

const initialState = {
  isLoading: false,
  googToken: {
    token: null,
    refreshToken: null,
    expiresAt: null,
    expiresIn: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        googToken: {
          token: null,
          refreshToken: null,
          expiresAt: null,
          expiresIn: null
        }
      })
    case GOOGLE_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        googToken: {
          token: action.data.tokenObj.access_token,
          refreshToken: action.data.tokenObj.refresh_token,
          expiresAt: action.data.tokenObj.expires_at,
          expiresIn: action.data.tokenObj.expires_in
        }
      })
    case GOOGLE_LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        googToken: {
          token: null,
          refreshToken: null,
          expiresAt: null,
          expiresIn: null
        },
        error: action.error.error
      })
    default:
      return state
  }
}
/*
{
  'googleId': '105083160045976799823',
  'tokenObj': {
    'token_type': 'Bearer',
    'access_token': 'ya29.GlwiB-CLI69wZXuqMMcXHuOEjiwlaZKvyx1gvcWashhYd9l_f5EPP0rh-2PAv_FHKTSQxD7Pw0IOQueuML8OfKKY7gK-Fm5JdNNsIaiUdtCUT3o4h4RW_1AY_ycxGg',
    'scope': 'email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
    'login_hint': 'AJDLj6JUa8yxXrhHdWRHIV0S13cASAZW6i-AQcBmLd7skea-zfTgOWsJ6fqMNA4c3A0yiWPDcs4t8KM4lmkDPAxePTUA5INJlw',
    'expires_in': 3600,
    'id_token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0NmRkYWY4OGNjMTkyMzUyMjFjOGVlMGRmYTNiYjQ2YWUyN2JmZmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjU0NDcyNzQ3MzU1LTZ1bXRya2NlZHFuMDB0ZzdlYzE3bDcwNWZ0dHRhbTByLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjU0NDcyNzQ3MzU1LTZ1bXRya2NlZHFuMDB0ZzdlYzE3bDcwNWZ0dHRhbTByLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MDgzMTYwMDQ1OTc2Nzk5ODIzIiwiZW1haWwiOiJmcmFuY2VzY29zaWx2ZXR0aThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJsTGVDY0tySVRqT0JvRDg1Yk9vYU93IiwibmFtZSI6IkZyYW5jZXNjbyBTaWx2ZXR0aSIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLV9ZN1FZd1ZJMzVNL0FBQUFBQUFBQUFJL0FBQUFBQUFBRlQwL0tJUGFZLVNjWExRL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJGcmFuY2VzY28iLCJmYW1pbHlfbmFtZSI6IlNpbHZldHRpIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1NjAwMjM2OTksImV4cCI6MTU2MDAyNzI5OSwianRpIjoiMGNmZDI0NTEwOWMxOTNjYzQwNWFiYTE4MzEzMmFmZGNlODI0YjcwOCJ9.nynpUHYGVkfrOwK7SMh47HJpS1kS_Y2-B4cBl6yDQ1p3szr46qojXkqjk534IOEXq5WQ6JOopfjaDCO7l_6_QxukTpDcnqnlvSvAXSDRFcWA6iG0rC_5z5CcIq2UAJXzfiCnoN9U2KZdQi6HOGxrNkTPwcY1ZM6McIpoPANCIQThgN7aZZ8EAFXBaWF7SCiAU0MckQGE57nS2swZaOa0IBNqYNTkSqOhJwRQ22QgWGZ3zgdjigVXTs_yIsyKjXo7o9PwjsnL_apAIkNN-9quFHoOOh0suEDj-IIbMc-nb7LBBi-cuBM48AW9tBBVTEMZEqUSK3PFDFydR-kWzs039A',
    'session_state': {
      'extraQueryParams': {
        'authuser': '0'
      }
    },
    'first_issued_at': 1560023702129,
    'expires_at': 1560027302129,
    'idpId': 'google'
  },
  'profileObj': {
    'googleId': '105083160045976799823',
    'imageUrl': 'https://lh5.googleusercontent.com/-_Y7QYwVI35M/AAAAAAAAAAI/AAAAAAAAFT0/KIPaY-ScXLQ/s96-c/photo.jpg',
    'email': 'francescosilvetti8@gmail.com',
    'name': 'Francesco Silvetti',
    'givenName': 'Francesco',
    'familyName': 'Silvetti'
  }
}
*/
