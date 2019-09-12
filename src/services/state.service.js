export async function getStates () {
  const response = await window.fetch(process.env.REACT_APP_API_URL + '/rest/state', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())

  return response
}
