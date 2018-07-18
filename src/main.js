import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PageProgress from './page-progress.vue'
import Style from './lib/scss/style.scss'

const routes = [
  {
    path: '/page-progress',
    name: 'page-progress',
    component: PageProgress
  }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
