import Mock from 'mockjs';

Mock.setup({
  timeout: '350-600',
});

Mock.mock(/\/login\/login/, 'post');
