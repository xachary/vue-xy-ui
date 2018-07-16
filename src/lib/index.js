import xyReachBottom from './components/xy-reach-bottom.vue'

const reachBottom = {
  install (Vue) {
    Vue.component(xyReachBottom.name, xyReachBottom)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(reachBottom)
}

export default reachBottom