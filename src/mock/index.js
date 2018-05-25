import Mock from 'mockjs';
import Login from './login';

Mock.setup({
  timeout: '350-600',
});

Mock.mock(/\/login\/login/, 'post', Login.loginByUsername);
