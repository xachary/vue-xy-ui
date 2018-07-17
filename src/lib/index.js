import Style from './scss/style.scss'

import xyReachBottom from './components/xy-reach-bottom.vue'

import xyKeepTop from './directives/xy-keep-top'
import xyMovingBtn from './directives/xy-moving-btn'
import xyLazyloadResize from './plugins/xy-lazyload-resize'

import VueLazyload from 'vue-lazyload'

const xyUI = {
  install (Vue) {
    Vue.component(xyReachBottom.name, xyReachBottom)

    Vue.directive(xyKeepTop.name, xyKeepTop)
    Vue.directive(xyMovingBtn.name, xyMovingBtn)

    Vue.use(VueLazyload, xyLazyloadResize)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xyUI)
}

export default xyUI