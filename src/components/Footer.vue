<template>
  <footer>
    <div class="wrapper">
      <div class="footer-left">
        Copyright © {{ currentYear }} <a href="https://danielbirch.dev/" target="_blank">DanielBirch.dev</a>. All rights reserved.
      </div>
      <div class="footer-right">
        <a href="#">Privacy</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
/*
  get current year
*/

const currentYear = new Date().getFullYear()


</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  margin-top: 4em;
  color: #939393;
}

.footer-left {
  justify-content: flex-start;
}

.footer-right {
  justify-content: flex-end;
}

.footer-right a:first-child {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    font-size: 13px;
  }
}
</style>