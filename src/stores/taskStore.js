import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {
      auth: ref(true),
      inputText: ref(''),
      pc: ref('Normal'),
      priorityColor: ref(''),
      dateOutput: ref(''),
      tasks: [],
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
      if (this.inputText.length > 0) {
        const newTaskObj = {
          id: this.entryDate(),
          title: this.inputText,
          priority: this.pc,
          dueDate: this.dateOutput,
          complete: false
        }
        this.tasks.push(newTaskObj)
        this.inputText = ''
        this.sortTasks()
        this.focusAfterPriority()
      }
    },
    focusAfterPriority() {
      this.taskInput?.focus()
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    orderTaskUp(index) {
      const swapWith = index - 1

      if (index >= 1 && index < this.tasks.length) {
        const newTasks = [...this.tasks]
        const temp = newTasks[index]
        newTasks[index] = newTasks[swapWith]
        newTasks[swapWith] = temp
        this.tasks = newTasks
        this.sortTasks()
    }
    },
    orderTaskDown(index) {
      const swapWith = index + 1

      if (index < this.tasks.length - 1) {
        const newTasks = [...this.tasks]
        const temp = newTasks[index]
        newTasks[index] = newTasks[swapWith]
        newTasks[swapWith] = temp
        this.tasks = newTasks
        this.sortTasks()
    }
    }
  }
})