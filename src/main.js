import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import { createRouter } from 'vue-router'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'


createApp(App)
    .use(router)
    .mount('#app')
