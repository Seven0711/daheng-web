import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:Hello
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/eve',
      name: 'eve',
      component: require('components/Eve'),
      children: [
        {
          path: '/word',
          name: 'word',
          component: require('components/Word')
        } 
      ]
    }
  ]
});
