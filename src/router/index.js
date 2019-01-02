import Vue from 'vue';
import Router from 'vue-router';

import PageMain from '../components/PageMain.vue';
import PageTeam from '../components/PageTeam.vue';
import PageRick from '../components/PageRick.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: PageMain
    },
    {
      path: '/team',
      component: PageTeam
    },
    {
      path: '/rick',
      component: PageRcik
    }
  ]
});
