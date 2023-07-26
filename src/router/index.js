import { createRouter, createWebHistory } from 'vue-router'
import MyTasksView from '../views/MyTasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'my-tasks',
      component: MyTasksView
    }
  ]
})

export default router
