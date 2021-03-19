import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import HelloWorld from './components/HelloWorld.vue';
import Ripple from 'primevue/ripple';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';

import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';  

const app = createApp(App);


app.use(PrimeVue);

app.component('Button',Button);
app.component('InputNumber',InputNumber);
app.component('HelloWorld',HelloWorld);


app.directive('ripple', Ripple);
app.mount('#app');
