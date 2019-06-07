export function convertToken (token) {
  let body = {
    grant_type: 'convert_token',
    client_id: 'IZguQdg9VNl1vhyywnONQjqpRSDQhEo5GRPbi5EK',
    client_secret: 'teYOH5fhVCSel8PXOPGTqMthpcx6f2lde4iaPv5JsFoA3rMV5he2k7MAWcUIxbe2qrgykE8c7sDvYsePb0k17OcFcdfYLffii28yewnYrztS27bLm5NdUG5R1KngOxcD',
    backend: 'google-oauth2',
    token: token
  }

  window.fetch('http://localhost:8000/auth/convert-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json()).then((json) => { console.log(json) })
}
