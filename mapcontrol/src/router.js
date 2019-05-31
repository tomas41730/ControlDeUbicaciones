import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegistroConductor from './components/RegistroConductor.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
//  base: procces.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/registroconductor',
      name: 'RegistroConductor',
      component: RegistroConductor
    }

  ]
})
