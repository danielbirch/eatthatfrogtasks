import { createRouter, createWebHistory } from 'vue-router'
import MyTasksView from '../views/MyTasksView.vue'
import Login from '../views/Login.vue'
import Privacy from '../views/Privacy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'my-tasks',
      component: MyTasksView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    }
  ]
})

export default router
