import Vue from "vue";
import Router from "vue-router";
import Typing from "@/views/Typing";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Board from "@/views/Board";
import Card from "@/components/Card";
import { store } from "@/store/store";

Vue.use(Router);

// const requireAuth = (to, from, next) => {
//   const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
//   store.getters.isAuth ? next() : next(loginPath);
// };

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Typing },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/typing",
      name: "typing",
      component: Typing,
      meta: { requiresAuth: true }
      // beforeEnter: requireAuth
    },
    {
      path: "/board",
      name: "board",
      component: Board,
      children: [{ path: "card/:cardId", component: Card }]
    },
    { path: "*", name: "notfound", component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  // to : 이동할 url
  // from : 현재 url
  // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
    // 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
    if (!store.getters.isAuth) {
      next({
        path: `/login`,
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // 반드시 next()를 호출하십시오!
  }
});

export default router;
