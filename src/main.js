import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"              //core css
import "primeicons/primeicons.css"        


createApp(App).use(store).use(router).use(PrimeVue).mount('#app')
