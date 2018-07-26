import Vue from 'vue'

import xyPopImage from '../components/xy-pop-image.vue'

let cp = Vue.extend(xyPopImage)

let instance = null

let handlers = new Map()

let clicks = new Map()

let btnClickCb = function () {
  console.warn('no moving btn callback function')
}

// debugger

function btnClick (el) {
  instance.visible = true
  instance.img = el.dataset.img
  instance.index = el.dataset.index
}

export default {
  name: 'xy-pop-image',
  bind: function (el, {value: onChange}) {
    if (!instance) {
      instance = new cp({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    document.body.appendChild(instance.$el)

    // debugger
    if (handlers.has(onChange)) {
      let els = handlers.get(onChange)
      els.push(el)
      handlers.set(onChange, els)
    } else {
      handlers.set(onChange, [el])
      instance.$on('on-change', onChange)
    }
    // debugger
    btnClickCb = btnClick.bind({}, el)
    el.addEventListener('click', btnClickCb)

    clicks.set(el, btnClickCb)
    // debugger
  },
  unbind: function (el, {value: onNext}) {
    if (instance) {
      instance.visible = false
    }
    // handlers.delete(onNext)
    // debugger
    let els = handlers.get(onNext)
    els.splice(els.indexOf(el), 1)
    handlers.set(onNext, els)
    // debugger
    let hd = clicks.get(el)
    el.removeEventListener('click', hd)
    clicks.delete(el)
    // debugger
  },
  update: function (el) {
    // instance.index = el.dataset.index
    // instance.img = el.dataset.img
  }
}