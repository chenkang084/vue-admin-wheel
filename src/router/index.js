import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/views/login';
import Test from '@/views/login/test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: Login,
      children: [{ path: 'test', name: 'test', component: Test }],
    },
  ],
});
