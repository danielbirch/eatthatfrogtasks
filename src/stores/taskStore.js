import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {
      auth: ref(true),
      inputText: ref(''),
      taskInput: ref(null),
      tasks: [
        {
          id: 1,
          title: 'task 1',
          priority: 'High',
          dueDate: '1st January'
        },
        {
          id: 2,
          title: 'task 2',
          priority: 'High',
          dueDate: '1st January'
        }
      ]
    }
  },
  getters: {
    entryDate: () => {
      const taskEntryDate = new Date().getTime().toString()
      return taskEntryDate
    },
    // dueDate: () => {
    //   const currentDate = new Date()
    //   const day = currentDate.getDate()
    //   const month = currentDate.getMonth() + 1
    //   console.log(day)
    //   return day
    // }
  },
  actions: {
    addTask() {
      const newTaskObj = {
        id: this.entryDate,
        title: this.inputText,
        priority: 'Priority',
        dueDate: 'Do Later'
      }
      this.tasks.push(newTaskObj)
      this.inputText = ''
      if (this.taskInput) {
        this.taskInput.focus() // Would love to know why this only works when inside an if statement
      }
    }
  },
})