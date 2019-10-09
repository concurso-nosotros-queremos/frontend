import fetchResource from './apiHandler'

export async function getGroup (token) {
  const response = await fetchResource('rest/group', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}
