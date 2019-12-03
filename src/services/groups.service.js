import fetchResource from './apiHandler'

export async function getGroup (token) {
  const response = await fetchResource('rest/group/', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}

export async function getOneGroup (token, id) {
  const response = await fetchResource(`rest/group/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}
