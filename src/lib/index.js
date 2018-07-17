import xyReachBottom from './components/xy-reach-bottom.vue'

import xyKeepTop from './directives/xy-keep-top'

const xyUI = {
  install (Vue) {
    Vue.component(xyReachBottom.name, xyReachBottom)

    Vue.directive(xyKeepTop.name, xyKeepTop)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xyUI)

}

export default xyUI