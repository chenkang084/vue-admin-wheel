import request from '../request';

export function loginByUsername(userInfo) {
  return request({
    url: '/login/login',
    method: 'post',
    data: userInfo,
  });
}
