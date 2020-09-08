import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
 
window.toastr = require('toastr')
createApp(App).use(router,VueToastr2).mount('#app')

