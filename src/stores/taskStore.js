import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {
      auth: ref(true),
      inputText: ref(''),
      pc: ref('Normal'),
      tasks: [
        {
          id: 1,
          title: 'task 1',
          priority: 'Normal',
          dueDate: '1st January'
        },
        {
          id: 2,
          title: 'task 2',
          priority: 'Normal',
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
    priorityClasses: (pc) => {
      return {
        High: pc.value === 'High',
        Normal: pc.value === 'Normal',
        Low: pc.value === 'Low',
      }
    }
  },
  actions: {
    addTask() {
      const newTaskObj = {
        id: this.entryDate,
        title: this.inputText,
        priority: this.pc,
        dueDate: 'Do Later'
      }
      this.tasks.push(newTaskObj)
      this.inputText = ''
      console.log(this.pc.value)
    }
  },
})