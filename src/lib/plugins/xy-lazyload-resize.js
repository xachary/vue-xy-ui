import VueLazyload from 'vue-lazyload'

function baseSize (info, size) {
  return {
    ot: {
      width: size.width,
      height: size.height
    },
    wt: {
      width: size.width,
      height: size.width * info.height / info.width
    },
    ht: {
      width: size.height * info.width / info.height,
      height: size.height
    }
  }
}

function contain (el, baseInfo) {
  if (baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height <= baseInfo.ot.height) {
    el.style.width = `${baseInfo.wt.width}px`
    el.style.height = `${baseInfo.wt.height}px`
    el.style.top = `${(baseInfo.ot.height - baseInfo.wt.height) / 2}px`
    el.style.left = '0px'
  } else if (baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width <= baseInfo.ot.width) {
    el.style.width = `${baseInfo.ht.width}px`
    el.style.height = `${baseInfo.ht.height}px`
    el.style.top = '0px'
    el.style.left = `${(baseInfo.ot.width - baseInfo.ht.width) / 2}px`
  }
}

function cover (el, baseInfo) {
  if (baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height >= baseInfo.ot.height) {
    el.style.width = `${baseInfo.wt.width}px`
    el.style.height = `${baseInfo.wt.height}px`
    el.style.top = `${(-(baseInfo.wt.height - baseInfo.ot.height)) / 2}px`
    el.style.left = '0px'
  } else if (baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width >= baseInfo.ot.width) {
    el.style.width = `${baseInfo.ht.width}px`
    el.style.height = `${baseInfo.ht.height}px`
    el.style.top = '0px'
    el.style.left = `${(-(baseInfo.ht.width - baseInfo.ot.width)) / 2}px`
  }
}

window.addEventListener('resize', function () {
  //lazy-cover loaded resize
  //lazy-contain loaded resize
  document.querySelectorAll('.lazy-contain.loaded.resize')
          .forEach(function (el) {
            let parent = el.parentElement
            let baseInfo = baseSize({
              width: el.offsetWidth,
              height: el.offsetHeight
            }, {
              width: parent.offsetWidth,
              height: parent.offsetHeight
            })
            contain(el, baseInfo)
          })
  document.querySelectorAll('.lazy-cover.loaded.resize')
          .forEach(function (el) {
            let parent = el.parentElement
            let baseInfo = baseSize({
              width: el.offsetWidth,
              height: el.offsetHeight
            }, {
              width: parent.offsetWidth,
              height: parent.offsetHeight
            })
            cover(el, baseInfo)
          })
})

export default {
  preLoad: 1.5,
  error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAFRUlEQVRo3s2aX4wTRRzHC4EnHySeBRMTczwoIaJYPeXBFxJ8NSaE6AHHQSSR4zifDA8aPdqdnXJ3XP/sTHsQEJTrzk57gJKQaHgwMZEYE0yUU+FIT580/okxGv88mIvjb9ptvO7MdvdK67bJL01329357Pc3v99vftNYzH2ZxBkA+wysahK2L6Z5IYtvQcTZBTYA9mQE9hTY05jyft34JMQaTJwf4F0ss1ENyGNw/EfP96KwJZPw9+F9R/MACVsDB//Q/GBMgaZOPxz/rgdgaoYstt+ryk79l5kKQ9i9cO52FAPH3s+FOWFk39zYPECg017AUt0MLngPnJPy3gD75H+wazA35pPZkkjmSiJd4C5IRaDM2YJuvuz3eRojsR54pYvl7RMzlZ8lDIDBQ7alKtf9Jr8PDDvUCzDnL109+OrEW3UQOS7qfBUz8vwRTPijSoQizrCPMpHDgCKbm8ZEnXkZUq+Av/8FtkGjzL5edDOUsxOYNoHckIP93I0EX4MK92lg9vq42eGoQNzkrYDcWnbwG4M4D4SHcY50dIAWH4KH+h5c90OIlEd9FaH8CR3IF80Jxtmu/TFxhnxgXu6Iu1CGvPkC7lnxUSQYxLDKW1tI6jdnxu4EwpgpPeSfBNkzYV3Lo0g5EeCfw52GgSf/fItsfqwrIG6JckBb9xCnrQCQPulsMQu1CkIDwne2BWLkg0Hci73YydBsZp2iSRWIjyAArFbKI4uFUITwRPgwyPzKmZfaUmbGOYporRj9FsYxCbb2TiZ7YmUh0zeatZ00IXKubXU+lCJhXcujjD7PWN1Jml0DceUe0geA8mgkIGGiFqbsbh+YPQoMLctc0NkKIEzUMil/vHkBxftxvUQhJmUfuCvD38GuwwDjmpvsVmBgFYcse6xTIFCiBIIsQS64y8zz1bL0gAhyDULgUotkVTUIj4dzMy7Q9JnRDrlWPAjkT7BT8KQX9clJmwSrYPHW6xkmlYaFUFmM50qHVx7FyutgPNvAI56F6+0Cey3YtdozLQwADHsLwWN5LiaLwYszTOx+uOYrbl/g15b37yCIqDf2NDBQmnsaGSKVZyJzqqyFMUglIXtWmLCl0PfuMIg/DOF7lqtiAMwbWSaK5/ghTXcGmoD8nxXdtwsgdTejWmUGm9YaAJPM24KeKY+o4b0SN2ulCosURF64amhgAOCFZmWYSFklgU5cHlU7mnN99VDPIgRxo1mq0BqmPggYaGFWoKnLR9RoNdcHyi3gIJhugjSUwXplBpu/B0224nlhTF1RYFL5CijDFnCkIHUXqmKihdnthTGLNsBcVGEIr7kZjhKkEQDS+jwz5HUzDDBoSi00kwUmlbmNrWhBasogfW027BkUwDBQRo1myeJsbRcAWzw6kP/KGbY+LExqQk2aqDDbB5N/IVIQ1xbB1gf2zWjDmCbPlCCa8QUZmtOFMlQK9pdRgLgwbIOmPFeWANKN0Iw9okazC7A/w2+OZ94WmdOXPo0KpAYDOUJ1M8oHvbWZNHTSVqpmnLu4bvxE6Zfp03PvRgnSgNHVZoPq+l8uA9QlwKT1zoOvT5/dJDsWt3C0G5qyNtMo46kA6q0qgfM+y+bjBWceWRHvzlKfQpN6kybAgB3P2SoMLvJzRtgqs9swumhG1WUzgvbqRNbjZihzYROWhRvtiX3zRaTbOaPOAQ24MHN8r7dbeBBRJnrkTwDfA8xGTUdT1zj/DabFKk/GtHfAiatgf/cAzE8wsbcGwlDnJiTMVX47R/fLjgU8lW0R/XFmoP7HHf6wvhXkPOduF34MIJsbx/8FZblgJW6d7poAAAAASUVORK5CYII=',
  loading: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVQ4y52SPU8CQRBAtzI2mljxD4yJNvoH/FcmGCPe7awGRbidhWAQ/GJn7tBGG8Roa2FlR2kriYmVxESLsYBGNMrx2s17m50dpUYICvUMWNoC5C4g9wF5To1LoXaR1dYLIAsgfwLyPSBNjyUH1tey+YaEEXWNi1dVGvLl1jpYkqPWTV2lRbvmbK50JjuV5ElNgkEPxrFoy8sTBcByD5Df1aQMJ/6Q/uk8BcgzyrhYAOPUAeP4HJA/VFCiXr7a6qcNbJfjtyAiUSHyvkGSoNiYH1euNjuZsERiKj5Rm8U4kyt6MZXkMcXtnTAi0fZ8QSml1G6V9rRlOaB2/t/hRfEaWC/aJcffDkJLlxuFE9GRvzOOV0bFBrWXdOSvAmTRlm9/r1u2evCtAsgvgNwBpGtw/AzIogfy4d97UeZFsHF9GBAYSK9hRKca6ce2fgEBIMcpno6nCQAAAABJRU5ErkJggg==',
  attempt: 1,
  //lazyload 自动resize
  //TODO:瑕疵点: 还没加载完成图片, 数据更新, 重新加载时, 偶发加载图片样式有误.
  //原因: Lazyload的loading事件有几率滞后于替换为loading的图片.
  //导致上一张图片大小遗留影响到loading图片.
  adapter: {
    loaded ({el}, formCache) {
      el.classList.remove('loading')
      el.classList.remove('error')
      el.classList.add('loaded')
      if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
        if (el.classList.contains('loading')) {
          //            console.warn('loaded')
        } else if (formCache) {
          //            console.warn('loaded from cache')
          el.style.width = null
          el.style.height = null
          el.style.top = null
          el.style.left = null
          el.style.marginLeft = null
          el.style.marginTop = null
        }

        let parent = el.parentElement

        let baseInfo = baseSize({
          width: el.offsetWidth,
          height: el.offsetHeight
        }, {
          width: parent.offsetWidth,
          height: parent.offsetHeight
        })

        el.classList.add('resize')

        if (el.classList.contains('lazy-contain')) {
          contain(el, baseInfo)
        } else if (el.classList.contains('lazy-cover')) {
          cover(el, baseInfo)
        }
      }
    },
    loading ({el}) {
      if (!el.classList.contains('loading')) {
        el.classList.remove('loaded')
        el.classList.remove('error')
        el.classList.add('loading')
        if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
          el.style.width = null
          el.style.height = null
          el.style.top = null
          el.style.left = null
          el.style.marginLeft = null
          el.style.marginTop = null
        }
      }
    },
    error ({el}) {
      el.classList.remove('loaded')
      el.classList.remove('loading')
      el.classList.add('error')
      el.classList.remove('resize')
      if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
        el.style.width = null
        el.style.height = null
        el.style.top = null
        el.style.left = null
        el.style.marginLeft = null
        el.style.marginTop = null
      }
    }
  }
}
