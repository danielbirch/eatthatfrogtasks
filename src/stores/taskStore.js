import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot, doc, setDoc, deleteDoc, addDoc, updateDoc } from "firebase/firestore"
import { useAuthStore } from '@/stores/authStore'

// let tasksCollectionRef
let unsubscribeSnapshot = null

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {
      auth: ref(false),
      inputText: ref(''),
      pc: ref('Normal'),
      priorityColor: ref(''),
      dateOutput: ref(''),
      tasks: [],
      sortedTasks: ref([]),
      editModal: ref(false),
      editModalIndex: ref(false),
      tasksCollectionRef: null,
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
    init() {
      const authStore = useAuthStore()
      this.tasksCollectionRef = collection(db, 'users', authStore.user.id, 'tasks')
      console.log(this.tasksCollectionRef)
      this.getTasks()
    },
    entryDate() {
      const taskEntryDate = new Date().getTime().toString()
      return taskEntryDate
    },
    clearTasks() {
      this.tasks = []
      if(unsubscribeSnapshot) unsubscribeSnapshot() // unsub from listener on logout
    },
    sortTasks() {
      const tempTaskArray = [...this.tasks]
      tempTaskArray.sort((a, b) => (a.complete === b.complete ? 0 : a.complete ? 1 : -1))
      this.sortedTasks = tempTaskArray
    },
    focusAfterPriority() {
      this.taskInput?.focus()
    },
    async getTasks() {

      // if(unsubscribeSnapshot) unsubscribeSnapshot() // unsub from listener if one is running before setting a new one
      
      unsubscribeSnapshot = onSnapshot(this.tasksCollectionRef, (querySnapshot) => {
        const tasks = []
        querySnapshot.forEach((doc) => {
        let task = {
          id: doc.id,
          title: doc.data().title,
          priority: doc.data().priority,
          dueDate: doc.data().dueDate,
          complete: doc.data().complete
        }
          tasks.push(task)
        })
        this.tasks = tasks
        this.sortTasks()
      }, (error) => {
        console.log('Error Message: ', error.message)
      })
    },
    async addTask() {
      if (this.inputText.length > 0) {

        await addDoc(this.tasksCollectionRef, {
          title: this.inputText,
          priority: this.pc,
          dueDate: this.dateOutput,
          complete: false
        })
      }
      this.inputText = ''
      this.sortTasks()
      this.focusAfterPriority()
    },
    async updateTask(taskIndex) {
      console.log('update', taskIndex)
      await updateDoc(tasksCollectionRef, {
      })
    },
    async deleteTask(index) {
      await deleteDoc(doc(this.tasksCollectionRef, this.tasks[index].id))
    },
    orderTaskUp(index) {
      if (index > 0 && index < this.tasks.length) {
        const newTasks = [...this.tasks];
        // Swap the tasks
        const temp = newTasks[index - 1];
        newTasks[index - 1] = newTasks[index];
        newTasks[index] = temp;
        this.tasks = newTasks;
        console.log('go up')
        console.log(this.tasks)
        // Sorting may not be necessary if your tasks are already sorted
        this.sortTasks()
        this.updateTask()
        // If you need to save to a database, do it here
      }
    },
    orderTaskDown(index) {
      if (index < this.tasks.length - 1) {
        const newTasks = [...this.tasks];
        // Swap the tasks
        const temp = newTasks[index + 1];
        newTasks[index + 1] = newTasks[index];
        newTasks[index] = temp;
        this.tasks = newTasks;
        console.log('go down')
        console.log(this.tasks)
        // Sorting may not be necessary if your tasks are already sorted
        this.sortTasks()
        this.updateTask(index)
        // If you need to save to a database, do it here
      }
    },
    toggleEditModal(index) {
      this.editModal = !this.editModal
      this.editModalIndex = index
    },
    forgotPassword(event) {
      event.preventDefault()
      alert('Link this to Firebase Auth')
    },
    // async markComplete(taskId) {
    //   const test1 = this.taskItem.value.toggleAttribute('complete')
    //   console.log(test1)

    //   const taskToComplete = this.sortedTasks.find((task) => taskId === task.id)
    //   if (taskToComplete) {
    //     taskToComplete.complete = !taskToComplete.complete
    //     this.sortTasks()
    //   }
    //   await updateDoc(tasksCollectionRef, {
    //     complete: true
    //   })
    //   console.log('finish')
    // }
  }
})