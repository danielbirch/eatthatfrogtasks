import { createRouter, createWebHistory } from 'vue-router'
import MyTasksView from '../views/MyTasksView.vue'
import Login from '../views/Login.vue'
import Privacy from '../views/Privacy.vue'
import { useAuthStore } from '../stores/authStore'

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

/*
  navigation guards
*/

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  if (!authStore.user.id && to.name !== 'login') {
    return { name: 'login' }
  }
  if (authStore.user.id && to.name === 'login') {
    return false
  }
})

export default router
