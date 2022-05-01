import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount('#app')
app.component('DataTable', DataTable, 'Button', Button, 'InputText', InputText);