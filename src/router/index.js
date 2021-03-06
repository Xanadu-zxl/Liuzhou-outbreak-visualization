import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Analyze from '@/pages/analyze/analyze'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/analyze',
      name: 'Analyze',
      component: Analyze
    }
  ]
})
