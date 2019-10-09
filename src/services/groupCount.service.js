import fetchResource from './apiHandler'

export async function getGroupCount (token) {
  const response = await fetchResource('rest/group_info/total', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}
