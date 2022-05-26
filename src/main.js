import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'element-plus/theme-chalk/dark/css-vars.css'
// import dark from 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'
// console.log(dark)

const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
