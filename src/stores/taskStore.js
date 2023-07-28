import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {
      auth: ref(true),
      inputText: ref(''),
      pc: ref('Normal'),
      date: ref('zz'),
      tasks: [
        {
          id: 2,
          title: 'task 2',
          priority: 'Normal',
          dueDate: '1st January',
          complete: false
        },
        {
          id: 1,
          title: 'task 1',
          priority: 'Normal',
          dueDate: '1st January',
          complete: false
        },
        {
          id: 4,
          title: 'task 4',
          priority: 'Normal',
          dueDate: '1st January',
          complete: false
        },
        {
          id: 3,
          title: 'task 3',
          priority: 'Normal',
          dueDate: '1st January',
          complete: false
        }
      ],
      sortedTasks: ref([])
    }
  },
  getters: {
    priorityClasses: (pc) => {
      return {
        High: pc.value === 'High',
        Normal: pc.value === 'Normal',
        Low: pc.value === 'Low',
      }
    }
  },
  actions: {
    entryDate() {
      const taskEntryDate = new Date().getTime().toString()
      return taskEntryDate
    },
    sortTasks() {
      const tempTaskArray = [...this.tasks]
      tempTaskArray.sort((a, b) => (a.complete === b.complete ? 0 : a.complete ? 1 : -1))
      this.sortedTasks = tempTaskArray
    },
    addTask() {
      const newTaskObj = {
        id: this.entryDate(),
        title: this.inputText,
        priority: this.pc,
        dueDate: this.date,
        complete: false
      }
      this.tasks.push(newTaskObj)
      this.inputText = ''
      this.sortTasks()
    }
  }
})