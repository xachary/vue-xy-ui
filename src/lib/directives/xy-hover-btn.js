let timer = null

function btnClick (el) {
  el.setAttribute('xy-hover-btn--moving', '')
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  timer = setTimeout(function () {
    el.removeAttribute('xy-hover-btn--moving')
  }, 300)
}

let btnClickCb = function () {
  console.warn('no moving btn callback function')
}

export default {
  name: 'xy-hover-btn',
  bind: function (el) {
    el.setAttribute('xy-hover-btn', '')
    btnClickCb = btnClick.bind({}, el)
    el.addEventListener('click', btnClickCb)
  },
  unbind: function (el) {
    el.removeEventListener('click', btnClickCb)
  }
}