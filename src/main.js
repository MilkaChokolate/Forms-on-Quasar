import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Maska from 'maska'
import { createPinia } from 'pinia'
import { Quasar, Notify } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
  .use(Quasar, {
    plugins: {
      Notify
    },
    config: {
      notify: { /* look at QuasarConfOptions from the API card */ }
    }
  })
  .use(router)
  .use(Maska)
  .use(createPinia())
  .mount('#app')
