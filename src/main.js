import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
// import axios from './axios';

import './axios';

// import 'bootstrap/dist/css/bootstrap.min.css';




// import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


// vue-title (tooltip)
import vTitle from 'vuejs-title';

import './style.css';

const Pinia = createPinia();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const app = createApp(App);

app.use(router)
  .use(Pinia)
  .use(vTitle)
  .mount('#app')

