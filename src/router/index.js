import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue')
      },
      {
        path: 'bookList',
        component: () => import(/* webpackChunkName: "BookList" */ '../views/BookList.vue')
      },
      {
        path: 'addBook',
        component: () => import(/* webpackChunkName: "AddBook" */ '../views/AddBook.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
