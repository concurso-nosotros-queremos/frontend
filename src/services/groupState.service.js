import fetchResource from './apiHandler'

export async function getState (token) {
  const response = await fetchResource('rest/state', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}
