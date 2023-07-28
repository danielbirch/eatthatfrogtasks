<template>
    <div
    @mouseenter.self="hover=true"
    @mouseleave.self="hover=false"
    class="task-item"
    :class="{'floated': hover, 'unfloated': hover === false}"
    ref="taskItem"
    @click="markComplete(task.id)"
    >
      <div class="task-text">{{ task.title }}</div>
      <div class="task-priority">{{ task.priority }}</div>
      <div class="task-due-date">{{ task.dueDate }}</div>
    </div>
</template>

<script setup>
/*
  imports
*/

import { ref, defineProps } from 'vue'
import { useTaskStore } from '@/stores/taskStore.js'

/*
  store
*/

const taskStore = useTaskStore()

/*
  props
*/

const props = defineProps(['task'])

/*
  float task item on hover
*/

const hover = ref(null)

/*
  mark task as complete
*/

const taskItem = ref(null)

const markComplete = (taskId) => {
  taskItem.value.toggleAttribute('complete')

  const taskToComplete = taskStore.sortedTasks.find((task) => taskId === task.id)
  if (taskToComplete) {
    taskToComplete.complete = !taskToComplete.complete
    taskStore.sortTasks()
  }
}


</script>

<style>
[complete] {
  opacity: 0.3;
}

.task-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-family: 'Arial', sans-serif;
  color: #4b82c0;
  background-color: #fff;
  border-left: 10px solid #4b82c0;
  border-radius: 10px;
  padding: 0;
  margin-bottom: 0.5em;
  cursor: pointer;
}

.task-text {
  flex-grow: 10;
  padding: 0 15px;
  font-size: 20px;
}

.task-priority, .task-due-date {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.task-priority {
  background-color: #4b82c0;
  color: #fff;
}

@keyframes float {
  from {scale: 100%;}
  to {scale: 110%;}
}

.floated:not([complete]) {
  animation: float;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

@keyframes unfloat {
  from {scale: 110%;}
  to {scale: 100%;}
}

.unfloated:not([complete]) {
  scale: 100%;
  animation: unfloat;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

</style>