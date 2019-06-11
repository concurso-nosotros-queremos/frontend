export async function convertToken (provider, token) {
  console.log(process.env)
  let body = {
    grant_type: 'convert_token',
    client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
    client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    backend: provider,
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
