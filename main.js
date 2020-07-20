import Vue from 'vue'
import App from './App'
import { myRequest } from 'uni/api.js'

Vue.prototype.$http = myRequest

Vue.config.productionTip = false

Vue.filter('formateDate',(date)=>{
	const newDate = new Date(date);
	const y = newDate.getFullYear();
	const m = (newDate.getMonth()+1).toString().padStart(2,'0');
	const d = newDate.getDate().toString().padStart(2,'0');
	return y + '-' + m +'-'+ d;
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
