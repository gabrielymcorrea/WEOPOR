import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import icons from './fontAwesome.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({...icons})

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app")
