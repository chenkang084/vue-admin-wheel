import request from '../request';

export function loginByUsername(userInfo) {
  return request({
    url: '/login/login',
    method: 'post',
    data: userInfo,
  });
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'put',
  });
}
