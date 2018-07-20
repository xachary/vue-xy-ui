import Style from './scss/style.scss'

import xyReachBottom from './components/xy-reach-bottom.vue'
import xyScaleSlider from './components/xy-scale-slider.vue'
import xyListStatus from './components/xy-list-status.vue'
import xyArticle from './components/xy-article.vue'

import xyKeepTop from './directives/xy-keep-top'
import xyMovingBtn from './directives/xy-moving-btn'
import xyPullRefresh from './directives/xy-pull-refresh'

import xyLazyloadResize from './plugins/xy-lazyload-resize'
import VueLazyload from 'vue-lazyload'

const xyUI = {
  install (Vue) {
    Vue.component(xyReachBottom.name, xyReachBottom)
    Vue.component(xyScaleSlider.name, xyScaleSlider)
    Vue.component(xyListStatus.name, xyListStatus)
    Vue.component(xyArticle.name, xyArticle)

    Vue.directive(xyKeepTop.name, xyKeepTop)
    Vue.directive(xyMovingBtn.name, xyMovingBtn)
    Vue.directive(xyPullRefresh.name, xyPullRefresh)

    Vue.use(VueLazyload, xyLazyloadResize)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xyUI)
}

export default xyUI