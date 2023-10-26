<template>
  <div class="primary-lr-container">
    <div class="login-container">
      <h1>Login</h1>
      <form>
        <input placeholder="Email" class="email-input" type="text">
        <input placeholder="Password" class="password-input" type="text">
        <button type="submit" class="login" @click="taskStore.forgotPassword">Login</button>
      </form>
      <a @click="taskStore.forgotPassword" class="forgot-password">Forgot your password?</a>
    </div>

    <div class="vl"></div>
  
    <div class="register-container">
      <h1>Register for Instant Access</h1>
      <form>
        <input placeholder="Email" class="email-input" type="text">
        <input placeholder="Password" class="password-input" type="text">
        <button type="submit" class="login" @click="taskStore.forgotPassword">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script setup>
/*
  Imports
*/

import { useTaskStore } from '@/stores/taskStore.js'

/*
  store
*/

const taskStore = useTaskStore()

</script>


<style>
.primary-lr-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

.login-container, .register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 4em;
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
  font-size: 24px;
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
}

.vl {
  border-left: 2px solid #e0e0e0;
  height: 303px;
}

</style>