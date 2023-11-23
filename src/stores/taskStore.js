import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot, doc, setDoc, deleteDoc, addDoc, updateDoc } from "firebase/firestore"
import { useAuthStore } from '@/stores/authStore'

let tasksCollectionRef
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
      tasksCollectionRef = collection(db, 'users', authStore.user.id, 'tasks')
      this.getTasks()
    },
    async getTasks() {

      // if(unsubscribeSnapshot) unsubscribeSnapshot() // unsub from listener if one is running before setting a new one
      
      unsubscribeSnapshot = onSnapshot(tasksCollectionRef, (querySnapshot) => {
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
    clearTasks() {
      this.tasks = []
      if(unsubscribeSnapshot) unsubscribeSnapshot() // unsub from listener on logout
    },
    entryDate() {
      const taskEntryDate = new Date().getTime().toString()
      return taskEntryDate
    },
    sortTasks() {
      const tempTaskArray = [...this.tasks]
      tempTaskArray.sort((a, b) => (a.complete === b.complete ? 0 : a.complete ? 1 : -1))
      this.sortedTasks = tempTaskArray
    },
    async addTask() {
      if (this.inputText.length > 0) {

        await addDoc(tasksCollectionRef, {
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
    focusAfterPriority() {
      this.taskInput?.focus()
    },
    async deleteTask(index) {
      await deleteDoc(doc(tasksCollectionRef, this.tasks[index].id))
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
    },
    toggleEditModal(index) {
      this.editModal = !this.editModal
      this.editModalIndex = index
      console.log(this.sortedTasks[index].title)
      console.log(this.sortedTasks[index].priority)
      console.log(this.sortedTasks[index].dueDate)
    },
    forgotPassword(event) {
      event.preventDefault()
      alert('Link this to Firebase Auth')
    },
    testy() {
      alert('v-model is working for the title, but not for priority. console log shows correct priority level, but v-model is bound to the other priority select field, instead of bound to the tasks priority data.')
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