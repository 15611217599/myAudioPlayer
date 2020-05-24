import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//后台服务器地址
Vue.prototype.$serverUrl = 'http://106.54.200.146:8080';
/* Vue.prototype.$serverUrl = 'http://192.168.1.29:8080'; */




App.mpType = 'app'
//公共js
import PubFuc from './common/common.js'
//挂载
Vue.prototype.$pubFuc = PubFuc
const app = new Vue({
	...App
})

app.$mount()
