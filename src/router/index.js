import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/dashboard';
import Login from '@/views/login';
import Layout from '@/views/layout/layout';
import Page404 from '@/views/errorPage/404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      children: [
        { path: '/', name: 'dashboard', component: Dashboard },
        // { path: '*', name: '404', component: Page404 },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/404',
      name: '404',
      component: Page404,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
