import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import City from '../views/City'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city/:location',
      name: 'city',
      component: City
    }
  ]
})
