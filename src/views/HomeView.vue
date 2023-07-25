<template>
  <main class="wrapper">
    <div class="container">
      <input placeholder="Add a new task..." class="task-input" type="text" name="new-entry-input"/>
    </div>
  </main>
</template>

<script setup>

</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.task-input {
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 24px;
  line-height: 1em;
  height: 60px;
  padding: 10px 15px;
  font-family: 'Arial', sans-serif;
  color: #9b9b9b;
}

input::placeholder {
  color: #ddd;
}

</style>