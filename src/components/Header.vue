<template>
    <header>
      <div class="wrapper">
        <div class="logo">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNi42NzYgOS4xOGMtMS40MjYtLjAwOS0zLjIxNy43NjQtNC41ODMgMi4xMy0uNTIxLjUyMS0uOTc5IDEuMTI5LTEuMzMzIDEuODEyIDEuMjMyLS45MzMgMi41NDctMS4yMjUgNC4wODYtLjM2MS40NTMtMS4xOTkgMS4wNTYtMi40MTggMS44My0zLjU4MXptOC4xNTQgOC4xNDNjLTEuMjY0LjgyNi0yLjUwNiAxLjQyMi0zLjU4MSAxLjg0Mi44NjMgMS41NC41NzEgMi44NTMtLjM2MSA0LjA4NS42ODQtLjM1MyAxLjI5MS0uODEyIDEuODEyLTEuMzM0IDEuMzctMS4zNjkgMi4xNDQtMy4xNjUgMi4xMy00LjU5M3ptNS4xMjctMTMuMjg4Yy0uMzQ0LS4wMjQtLjY4MS0uMDM1LTEuMDExLS4wMzUtNy4xNjkgMC0xMS4yNDkgNS40NjUtMTIuNzMzIDkuODZsMy45MzkgMy45NGM0LjUyNS0xLjYyIDkuODQ4LTUuNTQ5IDkuODQ4LTEyLjY0MiAwLS4zNjYtLjAxNC0uNzQtLjA0My0xLjEyM3ptLTguMjQgOC4yNThjLS4zMjYtLjMyNS0uMzI2LS44NTMgMC0xLjE3OC4zMjUtLjMyNi44NTMtLjMyNiAxLjE3OCAwIC4zMjYuMzI2LjMyNi44NTMgMCAxLjE3OC0uMzI2LjMyNi0uODUzLjMyNi0xLjE3OCAwem0yLjM1Ni0yLjM1NmMtLjY1MS0uNjUtLjY1MS0xLjcwNiAwLTIuMzU3czEuNzA2LS42NTEgMi4zNTYgMGMuNjUxLjY1MS42NTEgMS43MDYgMCAyLjM1Ny0uNjUuNjUtMS43MDQuNjUtMi4zNTYgMHptLTEyLjQzMiAxMC4zNzhsLS43NTUtLjc1NSA0LjM0LTQuMzIzLjc1NS43NTUtNC4zNCA0LjMyM3ptNC4xNDkgMS41NDdsLS43NTUtLjc1NSAzLjAyOS0zLjA1NC43NTUuNzU1LTMuMDI5IDMuMDU0em0tNS4wMzUgMi4xMzhsLS43NTUtLjc1NSA1LjM3My01LjM2NC43NTYuNzU1LTUuMzc0IDUuMzY0em0yMS4wODMtMTQuMjkxYy0uMTg4LjYxOC0uNjczIDEuMTAyLTEuMjkxIDEuMjkxLjYxOC4xODggMS4xMDMuNjcyIDEuMjkxIDEuMjkxLjE4OS0uNjE5LjY3My0xLjEwMyAxLjI5MS0xLjI5MS0uNjE4LS4xODgtMS4xMDItLjY3Mi0xLjI5MS0xLjI5MXptLTE0LjY1NS02LjUwNGMtLjI0Ny44MS0uODgxIDEuNDQzLTEuNjkgMS42OS44MS4yNDcgMS40NDMuODgxIDEuNjkgMS42OS4yNDgtLjgwOS44ODEtMS40NDMgMS42OS0xLjY5LS44MS0uMjQ3LTEuNDQyLS44OC0xLjY5LTEuNjl6bS0xLjgyNy0zLjIwNWMtLjE5OS42NDktLjcwNiAxLjE1Ny0xLjM1NiAxLjM1NS42NS4xOTkgMS4xNTcuNzA3IDEuMzU2IDEuMzU1LjE5OC0uNjQ5LjcwNi0xLjE1NyAxLjM1NC0xLjM1NS0uNjQ4LS4xOTgtMS4xNTUtLjcwNi0xLjM1NC0xLjM1NXptNS4zODcgMGMtLjMxNiAxLjAzNS0xLjEyNyAxLjg0Ni0yLjE2MyAyLjE2MyAxLjAzNi4zMTYgMS44NDcgMS4xMjYgMi4xNjMgMi4xNjMuMzE2LTEuMDM2IDEuMTI3LTEuODQ2IDIuMTYyLTIuMTYzLTEuMDM1LS4zMTctMS44NDUtMS4xMjgtMi4xNjItMi4xNjN6bTExLjA5NSAxMy42NGMtLjMxNiAxLjAzNi0xLjEyNyAxLjg0Ni0yLjE2MyAyLjE2MyAxLjAzNi4zMTYgMS44NDcgMS4xNjIgMi4xNjMgMi4xOTcuMzE2LTEuMDM2IDEuMTI3LTEuODgxIDIuMTYyLTIuMTk3LTEuMDM1LS4zMTctMS44NDYtMS4xMjctMi4xNjItMi4xNjN6Ii8+PC9zdmc+">
          <div class="logo-text">
            <div>Rocket Tasks</div>
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
  top: 2em;
  margin: 0 auto 6em auto;
  background-color: #36726b;
  border-radius: 20px;
  z-index: 99;
  overflow: hidden;
  border: 3px solid transparent;
}

header .wrapper {
  width: 1200px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: -4px;
}

.logo {
  display: flex;
  justify-content: flex-start;
  width: 70%;
  padding: 20px 0 20px 0;
  gap: 1em;
}

.logo img {
  width: 55px;
  color: #ededed;
  float: left;
  rotate: -10deg;
  filter: invert(1);
  margin-top: -5px;
}

.logo-text div {
  color: #FFF;
  font-family: 'Paytone One', sans-serif;
  font-size: 34px;
  line-height: 0.8em;
}

.logo-text span {
  color: #fff;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 13px;
  line-height: 1em;
  padding-top: 7px;
  /* display: none; */
}

.links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
}

.links a {
  font-family: 'BlinkMacSystemFont', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 16px 25px;
  border-radius: 10px;
}

.is-active {
  color: red;
}

a.is-active, .is-active:hover {
    background-color: #bcfbf315;
    color: #bcfbf3;
  }

@media (max-width: 768px) {
  header {
    margin: 0 auto 4em auto;
  }
}
</style>