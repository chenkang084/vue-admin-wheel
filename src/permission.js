import NProgress from 'nprogress';
import router from './router';
import { getToken } from './util/auth';

const whiteList = ['/login'];

NProgress.start();

router.beforeEach((to, from, next) => {
  const token = getToken();

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
  NProgress.done();
});
