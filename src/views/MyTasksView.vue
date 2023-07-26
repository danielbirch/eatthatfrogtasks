<template>
  <div class="wrapper-main">
    <div class="container">
      <input
        placeholder="Add a new task..."
        class="task-input"
        type="text"
        name="new-entry-input"
        @keydown.enter="taskStore.addTask"
        v-model="taskStore.inputText"
        :ref="taskStore.taskInput"
      />
      <PrioritySelect />
      <div class="select-date">
        <VueDatePicker v-model="date" time-picker-inline :is-24="false" :format="format"></VueDatePicker>
      </div>
    </div>
  </div>
  <div class="wrapper-main">
    <TaskItem v-for="task in taskStore.tasks" :key="task.id" :task="task"/>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date());

/*
  imports
*/

import { useTaskStore } from '@/stores/taskStore.js'
import TaskItem from '@/components/TaskItem.vue'
import PrioritySelect from '@/components/PrioritySelect.vue'


/*
  store
*/

const taskStore = useTaskStore()


/*
  date format
*/

const format = (date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  // const hours = date.getHours()
  const hours = (date.getHours() + 24) % 12 || 12
  const minutes = (date.getMinutes() <10?'0':'') + date.getMinutes()

  return `Due on ${day}/${month}/${year} at ${hours}:${minutes}`
}

</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.task-input {
  display: flex;
  justify-content: flex-start;
  flex-grow: 10;
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

.select-priority, .select-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.select-priority span {
  background-color: #4b82c0;
  font-family: 'Arial', sans-serif;
  color: #fff;
}

.select-date {
  font-family: 'Arial', sans-serif;
  color: #4b82c0;
}

</style>