import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/style.css'
import VueFullscreen from 'vue-fullscreen'
createApp(App).use(store).use(router).use(VueFullscreen).mount('#app')
