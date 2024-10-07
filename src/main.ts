import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from '@/router'

const app=createApp(App)
// 引入 SVG 注册脚本
import 'virtual:svg-icons-register'
//自定义插件
import globalComponents from '@/components'
//引入全局样式
import '@/styles/index.scss'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(globalComponents);
app.use(ElementPlus)
app.mount('#app')
