import "./assets/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import ByeWorld from './components/ByeWorld.vue'
import HelloWorld from './components/HelloWorld.vue'

const app = createApp(App)
// Global Registration
app.component("ByeWorld",ByeWorld)
app.component("HelloWorld",HelloWorld)
app.mount('#app')
