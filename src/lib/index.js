import Base from './scss/base.scss'
import Page from './scss/nuxt/page.scss'
import Style from './scss/style.scss'

import xyKeepTop from './directives/xy-keep-top'
import xyMovingBtn from './directives/xy-moving-btn'
import xyHoverBtn from './directives/xy-hover-btn'
import xyPullRefresh from './directives/xy-pull-refresh'
import xyPopImage from './directives/xy-pop-image'

import xyLazyloadResize from './plugins/xy-lazyload-resize'
// import VueLazyload from 'vue-lazyload'

// import MessageBox from './mint-ui/packages/message-box'
// import Toast from './mint-ui/packages/toast'
// import Indicator from './mint-ui/packages/indicator'
// import Field from './mint-ui/packages/field'

import xyArticle from './components/xy-article.vue'
import xyReachBottom from './components/xy-reach-bottom.vue'
import xyScaleSlider from './components/xy-scale-slider.vue'
import xyListStatus from './components/xy-list-status.vue'
import xyTimeCount from './components/xy-time-count.vue'

import {
  formatDate,
  relativeDate
} from './prototypes/xy-date-format'

import {
  numberAfterPoint
} from './prototypes/xy-number'

import {
  isIdCard
} from './prototypes/xy-validate'

import {
  sleep,
  browser
} from './prototypes/xy-tools'

const xyUI = {
  install (Vue) {
    Vue.directive(xyKeepTop.name, xyKeepTop)
    Vue.directive(xyMovingBtn.name, xyMovingBtn)
    Vue.directive(xyHoverBtn.name, xyHoverBtn)
    Vue.directive(xyPullRefresh.name, xyPullRefresh)
    Vue.directive(xyPopImage.name, xyPopImage)

    // 再次, 解决一个奇怪的依赖关系
    // Vue.use(VueLazyload, xyLazyloadResize)

    // 尽量按依赖关系按顺序注册
    Vue.component(xyArticle.name, xyArticle)
    Vue.component(xyReachBottom.name, xyReachBottom)
    Vue.component(xyScaleSlider.name, xyScaleSlider)
    Vue.component(xyListStatus.name, xyListStatus)
    Vue.component(xyTimeCount.name, xyTimeCount)
    // Vue.MessageBox = MessageBox
    // Vue.prototype.$messageBox = MessageBox
    // Vue.Toast = Toast
    // Vue.prototype.$toast = Toast
    // Vue.Indicator = Indicator
    // Vue.prototype.$indicator = Indicator
    // Vue.component(Field.name, Field)

    Vue.prototype.$xyFormat = {
      formatDate,
      relativeDate
    }
    Vue.prototype.$xyNumber = {
      numberAfterPoint
    }
    Vue.prototype.$xyValidate = {
      isIdCard
    }
    Vue.prototype.$xyTools = {
      sleep,
      browser
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xyUI)
  window.Vue.use(VueLazyload, xyLazyloadResize)
}

export default xyUI

// let mintUI = {
//   // MessageBox,
//   // Toast,
//   // Indicator
// }

let xyDateFormat = {
  formatDate,
  relativeDate
}

let xyNumber = {
  numberAfterPoint
}

let xyTools = {
  sleep,
  browser
}

let xyValidate = {
  isIdCard
}

export {
  xyLazyloadResize,
  // mintUI,
  xyDateFormat,
  xyNumber,
  xyTools,
  xyValidate
}