import { AUTH_GOOGLE_PROVIDER } from '../state/auth/types'

export async function convertToken (token) {
  let body = {
    grant_type: 'convert_token',
    client_id: process.env.REACT_APP_AUTH_GOOGLE_CLIENT_ID,
    client_secret: process.env.REACT_APP_AUTH_GOOGLE_CLIENT_SECRET,
    backend: AUTH_GOOGLE_PROVIDER,
    token: token
  }

  let response = await window.fetch('http://localhost:8000/auth/convert-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())

  return response
}
