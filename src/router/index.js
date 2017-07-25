import Vue from 'vue';
import Router from 'vue-router';
import main from 'components/main';
import login from 'components/login';
Vue.use(Router);

export default new Router({
  // mode: 'history',//地址栏的#号
  routes: [
    {
      path: '/',
      redirect: login
    },
    // {
    //   path: '*',
    //   component: require('components/404')
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: require('components/main'),
      children: [
        {
          path: '/evidencia',
          name: 'evidencia',
          component: require('components/evidencia')
        }
      ]
    }
  ]
});
