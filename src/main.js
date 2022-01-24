import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from '../src/components/HelloWorld.vue'
import QrCode from '../src/pages/QrCode.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HelloWorld },
    { path: '/code', name: 'QrCode', component: QrCode }
  ]
})

createApp(App)
.use(router)
.mount('#app')
