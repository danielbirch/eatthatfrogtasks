<template>
  <div class="wrapper-main">
    <div class="container">
      <div class="input-wrapper">
        <input
          placeholder="Add a new task..."
          class="task-input"
          type="text"
          name="new-entry-input"
          @keydown.enter="taskStore.addTask"
          v-model="taskStore.inputText"
          ref="taskInput"
          autofocus
        />
        <span @click.prevent="taskStore.addTask(); focusAfterPriority()"></span>
      </div>
      <PrioritySelect class="select-priority" @change="focusAfterPriority"/>
      <div class="select-date">
        <VueDatePicker
          v-model="date"
          time-picker-inline
          :is-24="false"
          :enable-time-picker="false"
          :format="format"
          ></VueDatePicker>
      </div>
    </div>
  </div>
  <div class="wrapper-main">
    <TaskItem
      v-for="(task, index) in taskStore.sortedTasks"
      :key="task.id"
      :task="task"
      v-if="taskStore.tasks.length >= 1"
      :index="index"
    />
    <div v-else class="no-tasks">Nice work! You're all caught up. 🎉</div>
  </div>
  <EditModal v-if="taskStore.editModal" :date="date" :format="format"/>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore.js'
import TaskItem from '@/components/TaskItem.vue'
import PrioritySelect from '@/components/PrioritySelect.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import EditModal from '../components/EditModal.vue';
import { useAuthStore } from '@/stores/authStore.js'

/*
  store
*/

const taskStore = useTaskStore()
const authStore = useAuthStore()

/*
  date format
*/

const date = ref(new Date());
console.log('Raw date format: ', date)

const format = (date) => {
  const getDaySuffix = (dayOfWeek) => {
  if (dayOfWeek >= 11 && dayOfWeek <= 13) {
    return 'th'
  }
  const lastDigit = dayOfWeek % 10
  switch (lastDigit) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
  const day = daysOfWeek[date.getDay()] + ' '
  const dayOfWeek = date.getDate()
  const daySuffix = getDaySuffix(dayOfWeek) + ' '
  const month = monthsOfYear[date.getMonth()]
  // const year = date.getFullYear()
  // const hours = (date.getHours() + 24) % 12 || 12
  // const minutes = (date.getMinutes() <10?'0':'') + date.getMinutes()

  taskStore.dateOutput = `Due ${day}${dayOfWeek}${daySuffix}${month}`
  console.log(taskStore.dateOutput) // need to use universal date format for this
  return taskStore.dateOutput
}

/*
  focus input after priority selection
*/

const taskInput = ref(null)

function focusAfterPriority() {
  taskInput.value.focus()
}


</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
}

.input-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-grow: 10;
}

.input-wrapper span:after {
  width: 0;
  height: max-content;
  font-family: 'Font Awesome 5 Free';
  content: '\f560';
  position: relative;
  right: 35px;
  top: 12px;
  font-weight: 600;
  font-size: 24px;
  color: #36726b;
}

.input-wrapper span {
  width: 0;
  cursor: pointer;
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
  color: #686d6d;
}

input::placeholder {
  color: #ddd;
}

.select-priority, .select-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.select-date {
  flex-basis: 20em;
}

.select-priority {
  flex-basis: 8rem;
}

.dp__input {
  height: 60px;
  border: none;
  border-radius: 10px;
}

.no-tasks {
  font-size: 24px;
  font-weight: 600;
  color: #c0c0c0;
  text-align: center;
}

.dp__theme_light {
  --dp-primary-color: #36726b;
}


</style>