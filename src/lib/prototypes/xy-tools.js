function sleep (ms) {
  return (function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('done')
        resolve()
      }, ms)
    })
  })()
}

export {
  sleep
}