<template>
    <div
    @mouseenter.self="hover=true"
    @mouseleave.self="hover=false"
    class="task-item"
    :class="{'floated': hover, 'unfloated': hover === false}"
    ref="taskItem"
    @click="markComplete(task.id)"
    >
    <div class="order-tasks">
      <div class="order-task-up" @click.stop="taskStore.orderTaskUp(index)"></div>
      <div class="order-task-down" @click.stop="taskStore.orderTaskDown(index)"></div>
    </div>
    <div class="task-text">{{ task.title }}</div>
      <div
        class="task-priority"
        ref="taskPriority"
      >
        {{task.priority}}
      </div>

      <div class="task-due-date">{{ task.dueDate }}</div>
      <div class="delete-task" @click.stop="taskStore.deleteTask(index)"></div>
      <div class="edit-task" @click.stop="taskStore.toggleEditModal"></div>
    </div>
</template>

<script setup>
/*
  imports
*/

import { ref, defineProps, onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore.js'

/*
  store
*/

const taskStore = useTaskStore()

/*
  props
*/

const props = defineProps(['task', 'index'])

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

/*
  set task priority colours
  - consider moving this to Pinia later on
*/

const taskPriority = ref(null)

const renderPC = (index) => {
  if (taskStore.tasks[index].priority === 'Normal') {
    taskPriority.value.classList.add('Normal')
    taskItem.value.setAttribute("id", 'Normal')
  } else if (taskStore.tasks[index].priority === 'High') {
    taskPriority.value.classList.add('High')
    taskItem.value.setAttribute("id", 'High')
  } else {
    taskPriority.value.classList.add('Low')
    taskItem.value.setAttribute("id", 'Low')
  }
}

onMounted(() => {
  renderPC(props.index);
})

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
  color: #686d6d;
  background-color: #fff;
  border-left: 10px solid #FDAB3D;
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

.task-priority, .task-due-date, .delete-task, .edit-task {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.task-priority {
  flex-basis: 7em;
  background-color: #4b82c0;
  color: #fff;
}

.task-due-date {
  flex-basis: 17em;
}

.delete-task, .edit-task {
  flex-basis: 2em;
}

.edit-task {
  margin-right: 1em;
}

.delete-task:after {
  width: 0;
  height: max-content;
  font-family: 'Font Awesome 5 Free';
  content: '\f2ed';
  position: relative;
  right: 10px;
  top: 0px;
  font-weight: 400;
  font-size: 18px;
  color: #c0c0c0;
}

.delete-task:hover:after {
  color: rgb(226 67 92 / 50%);
}

.edit-task:after {
  width: 0;
  height: max-content;
  font-family: 'Font Awesome 5 Free';
  content: '\f044';
  position: relative;
  right: 10px;
  top: 0px;
  font-weight: 400;
  font-size: 18px;
  color: #c0c0c0;
}

.edit-task:hover:after {
  color: rgb(115 196 183 / 60%);
}

.order-tasks {
  display: flex;
  flex-direction: column;
  align-self: end;
  width: 25px;
  margin-left: 0.4em;
}

.order-task-up, .order-task-down {
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-task-up:after, .order-task-down:after {
  font-family: 'Font Awesome 5 Free';
  content: '\f106';
  font-weight: 600;
  font-size: 18px;
  color: #c0c0c0;
}

.order-task-down:after {
  content: '\f107';
}

.order-task-up:hover:after, .order-task-down:hover:after {
  color: #36726b;
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