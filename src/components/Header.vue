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
            <RouterLink to="/" active-class="is-active">Home</RouterLink>
            <RouterLink to="/about" active-class="is-active">About</RouterLink>
          </nav>
        </div>
      </div>
    </header>
</template>

<script setup>
/*
  imports
*/

import { RouterLink} from 'vue-router'

</script>

<style>
header {
  width: 100%;
  display: flex;
  background-color:	#36726b;
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
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  padding: 24px;
}

.is-active {
  color: red;
}

a.is-active, .is-active:hover {
    background-color: #bcfbf315;
  }
</style>