import Vue from 'vue'
import App from './App.vue'
import Index from './index.vue'
import VueRouter from 'vue-router'
import PageProgress from './page-progress.vue'
import IphoneX from './iphone-x.vue'
import Media from './media.vue'
import PopImage from './pop-image.vue'
import Timer from './timer.vue'
import Style from './lib/scss/style.scss'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '',
      redirect: '/index',
    },
    {
      path: '/page-progress',
      name: 'page-progress',
      component: PageProgress
    },
    {
      path: '/iphone-x',
      name: 'iphone-x',
      component: IphoneX
    },
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/pop-image',
      name: 'pop-image',
      component: PopImage
    },
    {
      path: '/timer',
      name: 'timer',
      component: Timer
    }
  ]
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
