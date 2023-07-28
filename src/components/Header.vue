<template>
    <header>
      <div class="wrapper">
        <div class="logo">
          <font-awesome-icon icon="fa-solid fa-frog" />
          <div class="logo-text">
            <div>Eat That Frog!</div>
            <span>Heping you do what matters first</span>
          </div>
        </div>
        <div class="links">
          <nav>
            <RouterLink to="/" active-class="is-active" v-show="taskStore.auth">My Tasks</RouterLink>
            <RouterLink to="#" v-show="taskStore.auth">Logout</RouterLink>
            <RouterLink to="/login" active-class="is-active" v-show="!taskStore.auth">Login</RouterLink>
          </nav>
        </div>
      </div>
    </header>
</template>

<script setup>
/*
  imports
*/

import { RouterLink } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore.js'

const taskStore = useTaskStore()

</script>

<style>
header {
  width: 90%;
  display: flex;
  position: sticky;
  top: 1.5em;
  margin: 0 auto 4em auto;
  background-color: #36726b;
  border-radius: 20px;
  z-index: 99;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  justify-content: flex-start;
  width: 70%;
  padding: 20px 0;
}

.logo svg {
  color: #73c4b7;
  font-size: 47px;
  float: left;
  line-height: 16em;
  position: relative;
  top: -1px;
  padding-right: 10px;
}

.logo-text div {
  color: #bcfbf3;
  font-family: 'Freckle Face', cursive;
  font-size: 30px;
  line-height: 0.8em;
}

.logo-text span {
  color: #fff;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 13px;
  line-height: 1em;
  padding-top: 7px;
}

.links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
}

.links a {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 26px;
}

.is-active {
  color: red;
}

a.is-active, .is-active:hover {
    background-color: #bcfbf315;
    color: #bcfbf3;
  }
</style>