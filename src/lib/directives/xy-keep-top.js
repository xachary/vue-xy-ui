let scrolly = 0
let position = 'unset'
let top = 0
let left = 0
let width = 0
let zindex = 0
let boxshadow = 'none'
let height = 0
let scrolly2 = 0

function scroll (el) {
  // console.log(`window.scrollY:${window.scrollY}, scrolly:${scrolly}, scrolly2:${scrolly2}, height:${height}`)
  if (el.classList.contains('keep-top--ing')) {
    // el.firstElementChild.firstElementChild.firstElementChild.innerHTML = `window.scrollY:${window.scrollY}, scrolly:${scrolly}, height:${height}`
    if (window.scrollY <= scrolly2) {
      el.style.position = position
      el.style.top = top
      el.style.left = left
      el.style.width = width
      el.style.zIndex = zindex
      el.style.boxShadow = boxshadow
      el.classList.remove('keep-top--ing')
      if (el.nextElementSibling) {
        el.nextElementSibling.style.marginTop = 0
      }
    } else if (window.scrollY <= 1 && window.scrollY <= scrolly) {
      el.style.position = position
      el.style.top = top
      el.style.left = left
      el.style.width = width
      el.style.zIndex = zindex
      el.style.boxShadow = boxshadow
      el.classList.remove('keep-top--ing')
      if (el.nextElementSibling) {
        el.nextElementSibling.style.marginTop = 0
      }
    }
  } else if (el.getBoundingClientRect().top <= 0 && !el.classList.contains('keep-top--ing')) {
    position = el.style.position
    top = el.style.top
    left = el.style.left
    width = el.style.width
    zindex = el.style.zIndex
    boxshadow = el.style.boxShadow
    scrolly2 = window.scrollY
    el.style.position = 'fixed'
    el.style.top = '0'
    el.style.left = '0'
    el.style.width = '100%'
    el.style.zIndex = '100'
    el.style.boxShadow = '0 1px 10px rgba(0,0,0,.1)'
    el.classList.add('keep-top--ing')
    if (el.nextElementSibling) {
      el.nextElementSibling.style.marginTop = `${height}px`
    }
  }
  scrolly = window.scrollY
}

let scrollCb = function () {
  console.warn('no scroll callback function')
}

export default {
  name: 'xy-keep-top',
  bind: function (el) {
    el.classList.add('keep-top')
    scrollCb = scroll.bind({}, el)
    window.addEventListener('scroll', scrollCb)
  },
  inserted: function (el) {
    height = el.offsetHeight
  },
  unbind: function () {
    window.removeEventListener('scroll', scrollCb)
  }
}