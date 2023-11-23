<template>
  <div class="primary-lr-container">

    <div class="tabs">
      <ul>
        <li :class="{ 'is-active' : !register }"><a @click.prevent="register = false">Login</a></li>
        <li :class="{ 'is-active' : register }"><a @click.prevent="register = true">Register</a></li>
      </ul>
    </div>

    <div class="login-container">
      <h1>{{ formTitle }}</h1>
      <form @submit.prevent="onSubmit">
        <input placeholder="Email" class="email-input" type="text" v-model="credentials.email">
        <input placeholder="Password" class="password-input" type="password" v-model="credentials.password">
        <button type="submit" class="login">{{ formTitle }}</button>
      </form>
      <a @click="taskStore.forgotPassword" class="forgot-password">Forgot your password?</a>
    </div>

  </div>
</template>

<script setup>
/*
  imports
*/

// import { useTaskStore } from '@/stores/taskStore.js'
import { ref, computed, reactive } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'

/*
  store
*/

const authStore = useAuthStore()

/*
  register / login
*/

const register = ref(false)

const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login'
})

/*
  credentials
*/

const credentials = reactive({
  email: '',
  password: ''
})

/*
  submit
*/

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert('Please enter your email and password to continue.')
  }
  else {
    if (register.value) {
      authStore.registerUser(credentials)
      authStore.auth = true
    }
    else {
      authStore.loginUser(credentials)
      authStore.auth = true
    }
  }
}

</script>


<style>
.primary-lr-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs ul {
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 20px;
}

.tabs li {
  list-style: none;
}

.tabs li a {
  padding: 0 10px;
  font-size: 18px;
  font-weight: 600;
}

.tabs li a:hover {
  border-bottom: none;
  cursor: pointer;
}

.tabs .is-active {
  border-bottom: 2px solid #73c4b7;
}

.login-container, .register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  font-size: 22px;
}

form {
  display: flex;
  width: 420px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.email-input, .password-input {
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  line-height: 1em;
  height: 60px;
  padding: 10px 15px;
  font-family: 'Arial', sans-serif;
  color: #686d6d;
  margin: 10px 0;
}

button.login {
  width: 100%;
  font-family: 'BlinkMacSystemFont', sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: #36726b;
  color: #fff;
  padding: 16px 25px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

button.login:hover {
  background-color: #417E76;
}

.forgot-password {
  margin-top: 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.vl {
  border-left: 2px solid #e0e0e0;
  height: 303px;
}

</style>