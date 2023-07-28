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
        ref="taskInput"
        autofocus
      />
      <PrioritySelect class="select-priority" @change="focusAfterPriority"/>
      <div class="select-date">
        <VueDatePicker
          v-model="date"
          time-picker-inline
          :is-24="false"
          :enable-time-picker="false"
          :format="format"></VueDatePicker
        >
      </div>
    </div>
  </div>
  <div class="wrapper-main">
    <TaskItem v-for="task in taskStore.sortedTasks" :key="task.id" :task="task"/>
  </div>
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

/*
  store
*/

const taskStore = useTaskStore()

/*
  date format
*/

const date = ref(new Date());

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

  return `Due ${day}${dayOfWeek}${daySuffix}${month}`
}

/*
  focus input after priority selection
*/

const taskInput = ref(null)

function focusAfterPriority() {
  taskInput.value.focus()
}

/*
  sorting tasks
*/

// const sortedTasks = ref([])

// function sortTasks() {
//   const tempTaskArray = [...taskStore.tasks]
//   tempTaskArray.sort((a, b) => (a.complete === b.complete ? 0 : a.complete ? 1 : -1))
//   sortedTasks.value = tempTaskArray
// }

taskStore.sortTasks()


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
}

.dp__input {
  height: 60px;
  border: none;
  border-radius: 10px;
}

</style>