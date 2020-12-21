import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: () => import('./components/views/Todos.vue')
    }
  ]
})
