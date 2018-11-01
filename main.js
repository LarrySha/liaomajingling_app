import Vue from 'vue'
import App from './App'
import liaomatou from './dx_unp/liaomatou.vue'
import kongbai from './dx_unp/kongbai.vue'
Vue.component('liaomatou',liaomatou)
Vue.component('kongbai',kongbai)
Vue.config.productionTip = false

App.mpType = 'app'
 
const app = new Vue({ 
    ...App
})
app.$mount()
