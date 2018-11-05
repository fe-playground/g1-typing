import Vue from 'vue'
import Router from 'vue-router'
import Typing from './views/Typing'
import Login from './views/Login'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'typing', component: Typing },
      { path: '/login', name: 'login', component: Login },
      { path: '*', name: 'notfound', component: NotFound },
    ]
  })