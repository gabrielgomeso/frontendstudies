import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomePage from '../src/pages/Home.vue'
import QrCode from '../src/pages/QrCode.vue'
import Nft from '../src/pages/Nft.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/code', name: 'QrCode', component: QrCode },
    { path: '/nft', name: 'Nft', component: Nft },
    { path: '/:pathMatch(.*)*', component: HomePage }
  ]
})

createApp(App)
.use(router)
.mount('#app')
