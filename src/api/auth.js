export async function convertToken (provider, token) {
  let body = {
    grant_type: 'convert_token',
    client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
    client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    backend: provider,
    token: token
  }

  let response = await window.fetch(process.env.REACT_APP_API_URL + '/auth/convert-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())

  return response
}
