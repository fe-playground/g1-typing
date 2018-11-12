import Vue from 'vue'
import Router from 'vue-router'
import Typing from '@/views/Typing'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Board from '@/views/Board'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

export default new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Typing },
      { path: '/login', name: 'login', component: Login },
      { path: '/typing', name: 'typing', component: Typing },
      { path: '/board', name: 'board', component: Board, beforeEnter: requireAuth },
      { path: '*', name: 'notfound', component: NotFound },
    ]
  })