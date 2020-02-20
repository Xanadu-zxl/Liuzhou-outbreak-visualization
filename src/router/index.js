import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Work from '../pages/home/re_work'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'work',
      name: 'work',
      component: Work
    }
  ]
})
