import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import OrganizationIndex from '../views/Organization/OrganizationIndex.vue'
import {TokenService} from "../services/TokenService";
import OrganizationShow from "../views/Organization/OrganizationShow";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: '/organizations',
    name: 'OrganizationIndex',
    component: () => OrganizationIndex
  },
  {
    path: '/organizations/show',
    name: 'OrganizationShow',
    component: () => OrganizationShow
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
      return next({
          name: 'Login',
          query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
      });
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next({path: '/organizations'})
  }

  next();
})

export default router
