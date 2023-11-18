import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'


export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: {},
    }
  },
  actions: {
    init() {
      const router = useRouter()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          router.push('/')
        } else {
          this.user = {}
          router.replace('/login')
        }
      })
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        // Signed up 
        const user = userCredential.user
        // console.log('Registered user:', user)
      }) .catch((error) => {
        alert(error.message)
      })
    },
    logoutUser() {
      signOut(auth).then(() => {
        // console.log('signed out')
      }).catch((error) => {
        console.log('Error:', error.message)
      })
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user
        // console.log('Logged in user:', user)
      }) .catch((error) => {
        console.log('Error:', error.message)
      })
    }
  }
})