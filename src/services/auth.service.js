export async function convertToken (provider, token) {
  const body = {
    grant_type: 'convert_token',
    client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
    client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    backend: provider,
    token: token
  }

  const response = await window.fetch(process.env.REACT_APP_API_URL + '/auth/convert-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())

  return response
}

export async function checkToken (token) {
  const response = await window.fetch(process.env.REACT_APP_API_URL + `/rest/user_info/${token}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())

  return response
}
