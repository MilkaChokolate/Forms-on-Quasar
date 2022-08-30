import { createApp } from 'vue'
import { Quasar } from 'quasar'
import './style.css'
import App from './App.vue'
import router from "/src/router/index";
import Maska from 'maska'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App)
  .use(Quasar, {plugins: {}})
  .use(router)
  .use(Maska)
  .mount('#app')
