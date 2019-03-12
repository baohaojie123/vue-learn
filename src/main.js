import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from './store/index'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    // 把页面映射到app文件
  render: h => h(App),
}).$mount('#app')
