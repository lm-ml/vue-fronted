import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import http from './common/http.service.js'
import resourceService from './common/resource.service.js'
Vue.prototype.http = http
Vue.prototype.resourceService = resourceService

Vue.component(Button.name, Button);
new Vue({
  render: h => h(App),
}).$mount('#app')
