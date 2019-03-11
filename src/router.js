import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from './pages/a'
import pageB from './pages/b'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:pageA
    },
    {
        path:'/pageB',
        component:pageB
    }
]
const router = new VueRouter({
    routes
})
export default router
