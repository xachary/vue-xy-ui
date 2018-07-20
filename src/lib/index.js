import Style from './scss/style.scss'

import xyKeepTop from './directives/xy-keep-top'
import xyMovingBtn from './directives/xy-moving-btn'
import xyPullRefresh from './directives/xy-pull-refresh'

// import xyLazyloadResize from './plugins/xy-lazyload-resize'
// import VueLazyload from 'vue-lazyload'

import xyArticle from './components/xy-article.vue'
import xyReachBottom from './components/xy-reach-bottom.vue'
import xyScaleSlider from './components/xy-scale-slider.vue'
import xyListStatus from './components/xy-list-status.vue'

const xyUI = {
  install (Vue) {
    Vue.directive(xyKeepTop.name, xyKeepTop)
    Vue.directive(xyMovingBtn.name, xyMovingBtn)
    Vue.directive(xyPullRefresh.name, xyPullRefresh)

    // 移动到xy-article, 解决一个奇怪的依赖关系
    // Vue.use(VueLazyload, xyLazyloadResize)

    // 尽量按依赖关系按顺序注册
    Vue.component(xyArticle.name, xyArticle)
    Vue.component(xyReachBottom.name, xyReachBottom)
    Vue.component(xyScaleSlider.name, xyScaleSlider)
    Vue.component(xyListStatus.name, xyListStatus)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xyUI)
}

export default xyUI