<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<script setup>
/*
  imports
*/

import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<style>
#app {
  max-width: 100%;
  margin: 0 auto;
  padding: 0rem;
  font-weight: normal;
}

body {
  background: #ededed;
}

.wrapper {
  display: flex;
  width: 1100px;
  margin: 0 auto;
}

main.wrapper {
  width: 100%;
  max-width: 1100px;
  background-color: #f5f5f5;
  margin: 2em auto;
  padding: 2em;
  border-radius: 1em;
}

textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {
  outline-color: #4b82c0;
}

</style>