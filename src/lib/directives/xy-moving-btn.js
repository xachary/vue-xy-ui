let timer = null

function btnClick (el) {
  el.classList.add('xy-moving-btn--moving')
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  timer = setTimeout(function () {
    el.classList.remove('xy-moving-btn--moving')
  }, 300)
}

let btnClickCb = function () {
  console.warn('no moving btn callback function')
}

export default {
  name: 'xy-moving-btn',
  bind: function (el) {
    el.classList.add('xy-moving-btn')
    btnClickCb = btnClick.bind({}, el)
    el.addEventListener('click', btnClickCb)
  },
  unbind: function (el) {
    el.removeEventListener('click', btnClickCb)
  }
}