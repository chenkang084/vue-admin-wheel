import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/dashboard';
import Login from '@/views/login';
import Layout from '@/views/layout/layout';
// import Test from '@/views/login/test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [{ path: '', name: 'dashboard', component: Dashboard }],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      // children: [{ path: 'test', name: 'test', component: Test }],
    },
  ],
});
