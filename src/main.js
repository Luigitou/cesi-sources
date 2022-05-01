import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount('#app')
app.component('DataTable', DataTable);