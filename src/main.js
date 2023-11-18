import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFrog } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFrog)

/*
  date picker
*/

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

app.component('VueDatePicker', VueDatePicker);

/*
  plugin to enable router in pinia
*/

// const pinia = createPinia()

// pinia.use(({ store }) => {
//   store.router = markRaw(router)
// })


app.use(createPinia())
app.use(router)

app.mount('#app')
