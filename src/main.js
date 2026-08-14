import 'bootstrap';
import "@/assets/sass/all.scss"; 
 


import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/mock/index.js'

import VueProgressBar from '@aacassandra/vue3-progressbar'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
DataTable.use(DataTablesCore);



const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.use(ElementPlus)
app.use(DataTable)



// const options = {
//     color: 'rgb(143, 255, 199)',
//     failedColor: 'red',
//     height: '2px'
//   };
// {
//     color: '#bffaf3',
//     failedColor: '#874b4b',
//     thickness: '5px',
//     transition: {
//       speed: '0.2s',
//       opacity: '0.6s',
//       termination: 300
//     },
//     autoRevert: true,
//     location: 'left',
//     inverse: false
//   }

app.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: '#FF0000',
    height: '2px'
  })
app.mount('#app')


export default app;
