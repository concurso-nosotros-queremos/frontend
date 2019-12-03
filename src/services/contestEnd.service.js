import fetchResource from './apiHandler'

export async function getContestEnd (token) {
  const response = await fetchResource('rest/contest_end', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}
