import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ExistenciaSabores from './components/ExistenciaSabores.vue';
import Pedidos from './components/Pedidos.vue';
import Adornos from './components/Adornos.vue';

const app = createApp(App);

app.use(store).use(router);
app.component('ExistenciaSabores', ExistenciaSabores);
app.component('Pedidos', Pedidos);
app.component('Adornos', Adornos);
app.mount('#app');