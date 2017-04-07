import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Index from '../views/index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/', name: 'index', component: Index, meta: { title: '首页' } }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log('to', to)
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
// // 动态设置页面title
// router.afterEach((to) => {
//   document.title = `${to.meta.title} - 知了官网`
// })

export default router
