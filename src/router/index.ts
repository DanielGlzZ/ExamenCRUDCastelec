import { createRouter, createWebHistory } from 'vue-router'
import enumRouteNames from '@/enums/enumRouteNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: `${enumRouteNames.VIEW_USER}`,
      component: () => import('../views/catalog/user/UsersView.vue')
    },
    {
      path: '/create-user',
      name: `${enumRouteNames.CREATE_USER}`,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/catalog/user/CreateUser.vue')
    },
    {
      path: '/update-user/:id',
      name: `${enumRouteNames.UPDATE_USER}`,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/catalog/user/UpdateUser.vue')
    },
    {
      path: '/careers',
      name: `${enumRouteNames.VIEW_CAREER}`,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/catalog/career/CareersView.vue')
    },
    {
      path: '/create-career',
      name: `${enumRouteNames.CREATE_CAREER}`,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/catalog/career/CreateCareer.vue')
    },
  ]
})

export default router
