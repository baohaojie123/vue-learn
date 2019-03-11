import Vue from 'vue'
// import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
    router,
    // 把页面映射到app文件
  // render: h => h(App),
}).$mount('#app')
