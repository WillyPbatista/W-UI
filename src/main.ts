import { createApp } from 'vue'
import './styles/base.css'
import App from './App.vue'

import WUI from './plugin'   

const app = createApp(App)

app.use(WUI)                

app.mount('#app')
