import fetchResource from './apiHandler'

export async function getParticipantCount (token) {
  const response = await fetchResource('rest/participant_info/total', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}
