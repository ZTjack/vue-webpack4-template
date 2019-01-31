import request from './request'

export function exampleApi(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

