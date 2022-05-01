import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import TextArea from 'primevue/textarea';
import Button from 'primevue/button';

const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount('#app')

app.component('InputText', InputText, 'TextArea', TextArea, 'Button', Button);