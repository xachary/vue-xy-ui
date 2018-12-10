function isIdCard (card) {
  var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
  return {
    valid: reg.test(card),
    msg: '身份证号不正确'
  }
}

function mobile (card) {
  var reg = /^((0\d{2,3}-?\d{7,8})|(1[34578]\d{9}))$/
  return {
    valid: reg.test(card),
    msg: '手机号号不正确'
  }
}

export {
  isIdCard
}