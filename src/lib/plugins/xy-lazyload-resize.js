// function baseSize (info, size) {
//   return {
//     ot: {
//       width: size.width,
//       height: size.height
//     },
//     wt: {
//       width: size.width,
//       height: size.width * info.height / info.width
//     },
//     ht: {
//       width: size.height * info.width / info.height,
//       height: size.height
//     }
//   }
// }

// function contain (el, baseInfo) {
//   if (baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height <= baseInfo.ot.height) {
//     el.style.width = `${baseInfo.wt.width}px`
//     el.style.height = `${baseInfo.wt.height}px`
//     el.style.top = `${(baseInfo.ot.height - baseInfo.wt.height) / 2}px`
//     el.style.left = '0px'
//   } else if (baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width <= baseInfo.ot.width) {
//     el.style.width = `${baseInfo.ht.width}px`
//     el.style.height = `${baseInfo.ht.height}px`
//     el.style.top = '0px'
//     el.style.left = `${(baseInfo.ot.width - baseInfo.ht.width) / 2}px`
//   }
// }
//
// function cover (el, baseInfo) {
//   console.log('baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height >= baseInfo.ot.height')
//   console.log(`${baseInfo.wt.width} === ${baseInfo.ot.width} && ${baseInfo.wt.height} >= ${baseInfo.ot.height}`)
//   console.log('baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width >= baseInfo.ot.width')
//   console.log(`${baseInfo.ht.height} === ${baseInfo.ot.height} && ${baseInfo.ht.width} >= ${baseInfo.ot.width}`)
//   if (baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height >= baseInfo.ot.height) {
//     el.style.width = `${baseInfo.wt.width + 2}px`
//     el.style.height = `${baseInfo.wt.height + 2}px`
//     el.style.top = `${(-(baseInfo.wt.height - baseInfo.ot.height)) / 2 - 1}px`
//     el.style.left = `${-1}px`
//   } else if (baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width >= baseInfo.ot.width) {
//     el.style.width = `${baseInfo.ht.width + 2}px`
//     el.style.height = `${baseInfo.ht.height + 2}px`
//     el.style.top = `${-1}px`
//     el.style.left = `${(-(baseInfo.ht.width - baseInfo.ot.width)) / 2 - 1}px`
//   }
//   console.log('el.style.width', el.style.width)
//   console.log('el.style.height', el.style.height)
//   console.log('el.style.top', el.style.top)
//   console.log('el.style.left', el.style.left)
// }

// window.addEventListener('resize', function () {
//   //lazy-cover loaded resize
//   //lazy-contain loaded resize
//   document.querySelectorAll('.lazy-contain.loaded.resize')
//           .forEach(function (el) {
//             let parent = el.parentElement
//             let baseInfo = baseSize({
//               width: el.offsetWidth,
//               height: el.offsetHeight
//             }, {
//               width: parent.offsetWidth,
//               height: parent.offsetHeight
//             })
//             contain(el, baseInfo)
//           })
//   document.querySelectorAll('.lazy-cover.loaded.resize')
//           .forEach(function (el) {
//             let parent = el.parentElement
//             let baseInfo = baseSize({
//               width: el.offsetWidth,
//               height: el.offsetHeight
//             }, {
//               width: parent.offsetWidth,
//               height: parent.offsetHeight
//             })
//             cover(el, baseInfo)
//           })
// })

export default {
  preLoad: 1.5,
  // error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAQAAACSoYmJAAACwElEQVRo3u3b3VLaQBTA8Z1x5NoHo9f6OPgIouNb+BZFg1SBWlsL41dLK+FDW2UUEPj3AqEYErIJQfa0OXsN85vM2bN7IEepqWCVJFvsU6XNsqJNlX22SLKq/II1UtQwKeqkWJtF3qCKiVFlwx28wi4mxy4r0+Q9TI89B5ttJMTOJHkdKbH+t2LYYtD2SyUhhaRIKaVIGFaX/aJGQpFEWiQVaXHobcV7ceiMEpbRADVFRxy6oxAY/x56QIMyebLkKFKmycB09C0FLMcq0DQXPeB6Cjxa10t/3h5ob/KQbSC6OZNsYS05SZRbahz7oo+XmiLKrf21NFbdLHRJC10yC53XQufNQh9qobNmoXMS0QWJ6SFyI4oseXqHSz8+xv/XCxMMuPQkX5p6NR0mibAmYPS865TIkyVLnhL1yJ/xD66kNbY3LxW/Lwdtj5PulGcZ6NdHWDHQv39LQjfJOrb4ES2z0bdTZAuLHHfmon+5kofX3ZqZ6N8+TUbFPPSDRotx7nsavCm6pdkVndEzBf3IkRbZwuKEbnTob1o55xZPAcjDdu4xCvSAC+2t4oy2RmPhXB+4nxc9oBxoh09GR/O3FOc69LhTaqL7nAUuTKPoavb37usmLLrHaah6CvDMxznIFlY4dJeT0MdAz+OzC0Z3KIY+vXp8mpscAv3ks4UqM/fB5wjIgdEtjdpa8aw2XyIhB0Tfax66FVfy14jIgdB3mj/5urEna/obohued14d9nmEZG20HZD8mn0RKVkT/TPklw/ZVxGTNdHhv77C98jJC0cvZsXoGB2jY3SMjtExOkYvGy3yBVmRryJnxKEzQl+vlzfI8E6RoCEro0nIHM4RNgZVGw9UCho4mxymZEcEeUf+EKXIcdXxYLCZW9L2GAweD1RuGla3G2zOHMGeGHZPc4A987/exUYXmwPSJElMC/8AAsbzwJ8A0u0AAAAASUVORK5CYII=',
  // loading: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVQ4y52SPU8CQRBAtzI2mljxD4yJNvoH/FcmGCPe7awGRbidhWAQ/GJn7tBGG8Roa2FlR2kriYmVxESLsYBGNMrx2s17m50dpUYICvUMWNoC5C4g9wF5To1LoXaR1dYLIAsgfwLyPSBNjyUH1tey+YaEEXWNi1dVGvLl1jpYkqPWTV2lRbvmbK50JjuV5ElNgkEPxrFoy8sTBcByD5Df1aQMJ/6Q/uk8BcgzyrhYAOPUAeP4HJA/VFCiXr7a6qcNbJfjtyAiUSHyvkGSoNiYH1euNjuZsERiKj5Rm8U4kyt6MZXkMcXtnTAi0fZ8QSml1G6V9rRlOaB2/t/hRfEaWC/aJcffDkJLlxuFE9GRvzOOV0bFBrWXdOSvAmTRlm9/r1u2evCtAsgvgNwBpGtw/AzIogfy4d97UeZFsHF9GBAYSK9hRKca6ce2fgEBIMcpno6nCQAAAABJRU5ErkJggg==',
  // loading: 'data:image/gif;base64,R0lGODlhCgAKAJEDAMzMzP9mZv8AAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACgAKAAACF5wncgaAGgJzJ647cWua4sOBFEd62VEAACH5BAUAAAMALAEAAAAIAAMAAAIKnBM2IoMDAFMQFAAh+QQFAAADACwAAAAABgAGAAACDJwHMBGofKIRItJYAAAh+QQFAAADACwAAAEAAwAIAAACChxgOBPBvpYQYxYAIfkEBQAAAwAsAAAEAAYABgAAAgoEhmPJHOGgEGwWACH5BAUAAAMALAEABwAIAAMAAAIKBIYjYhOhRHqpAAAh+QQFAAADACwEAAQABgAGAAACDJwncqi7EQYAA0p6CgAh+QQJAAADACwHAAEAAwAIAAACCpRmoxoxvQAYchQAOw==',
  attempt: 3,
  // throttleWait: 500,
  // listenEvents: ['resize'],
  //lazyload 自动resize
  // dispatchEvent: true,
  // observer: true,
  // silent: false,
  //TODO:瑕疵点: 还没加载完成图片, 数据更新, 重新加载时, 偶发加载图片样式有误.
  //原因: Lazyload的loading事件有几率滞后于替换为loading的图片.
  //导致上一张图片大小遗留影响到loading图片.
  adapter: {
    loaded ({el}, formCache) {
      let parent = el.parentElement
      parent.style.backgroundImage = `url("${el.src}")`
      // parent.style.backgroundColor = 'inherit'
      // parent.style.backgroundRepeat = 'no-repeat'
      // parent.style.backgroundPosition = 'inherit'
      if (el.classList.contains('lazy-contain')) {
        parent.style.backgroundSize = 'contain'
      } else if (el.classList.contains('lazy-cover')) {
        parent.style.backgroundSize = 'cover'
      } else {
        parent.style.backgroundSize = 'inherit'
      }

      parent.classList.remove('loading')
      parent.classList.remove('error')
      parent.classList.add('loaded')

      // el.classList.remove('loading')
      // el.classList.remove('error')
      //
      // if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
      //   if (el.classList.contains('loading')) {
      //     //            console.warn('loaded')
      //   } else if (formCache) {
      //     //            console.warn('loaded from cache')
      //     el.style.width = null
      //     el.style.height = null
      //     el.style.top = null
      //     el.style.left = null
      //     el.style.marginLeft = null
      //     el.style.marginTop = null
      //   }
      //
      //   console.log('el.offsetWidth', el.offsetWidth, 'el.offsetHeight', el.offsetHeight)
      //   console.log('parent.offsetWidth', parent.offsetWidth, 'parent.offsetHeight', parent.offsetHeight)
      //
      //   let baseInfo = baseSize({
      //     width: el.offsetWidth,
      //     height: el.offsetHeight
      //   }, {
      //     width: parent.offsetWidth,
      //     height: parent.offsetHeight
      //   })
      //
      //   console.log('baseInfo:')
      //   console.log(JSON.stringify(baseInfo))
      //
      //   el.classList.add('resize')
      //
      //   if (el.classList.contains('lazy-contain')) {
      //     contain(el, baseInfo)
      //   } else if (el.classList.contains('lazy-cover')) {
      //     cover(el, baseInfo)
      //   }
      // }
      // el.classList.add('loaded')
    },
    loading ({el}) {
      let parent = el.parentElement
      let min = parent.offsetWidth > parent.offsetHeight ? parent.offsetHeight : parent.offsetWidth
      parent.style.backgroundImage = 'url("data:image/gif;base64,R0lGODlhEgASAIABAKa4zP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAwABACwAAAAAEgASAEACJwyOoYa3D6N8rVqgLp5M2+x9XcWBTTmGTqqa6qqxFInWUMzhk76TBQAh+QQJAwABACwAAAAAEgASAEACKQyOoYa3D6NUrdHqGJ44d3B9m1ZNZGZ+YXmKnsuq44qaNqSmnZ3rllIAACH5BAkDAAEALAAAAAASABIAQAIpDI6hhrcPo2zt0cRuvG5xoHxfyE2UZJWeKrLtmZ3aWqG2OaOjvfPwUgAAIfkECQMAAQAsAAAAABIAEgBAAigMjqGGtw8jbC3SxO67bnLFhQD4bZRkap4qli37qWSF1utZh7a+41ABACH5BAkDAAEALAAAAAASABIAQAIqDI6hhrcP42pNMgoUdpfanXVgJSaaZ53Yt6kj+a6lI7tcioN5m+o7KSkAACH5BAkDAAEALAAAAAASABIAQAIoDI6hhrcPI2tOKpom3vZyvVEeBgLdKHYhGjZsW63kMp/Sqn4WnrtnAQAh+QQJAwABACwAAAAAEgASAEACKAyOocvtCCN0TB5lM6Ar92hYmChxX2l6qRhqYAui8GTOm8rhlL6/ZgEAIfkECQMAAQAsAAAAABIAEgBAAigMjqHL7QgjdEyeJY2leHOdgZF4KdYJfGTynaq7XmGctuicwZy+j2oBACH5BAkDAAEALAAAAAASABIAQAInDI6hy+0II3RMHrosUFpjbmUROJFdiXmfmoafMZoodUpyLU5sO1MFACH5BAkDAAEALAAAAAASABIAQAImDI6hy+2GDozyKZrspBf7an1aFy2fuJ1Z6I2oho2yGqc0SYN1rRUAIfkECQMAAQAsAAAAABIAEgBAAiYMjqHL7W+QVLJaAOnVd+eeccliRaXZVSH4ee0Uxg+bevUJnuIRFAAh+QQJAwABACwAAAAAEgASAEACKoyBacvtnyI4EtH6QrV6X5l9UYgt2DZ1JRqqIOm1ZUszrIuOeM6x8x4oAAAh+QQJAwABACwAAAAAEgASAEACKIwNqcftryJAMrFqG55hX/wcnlN9UQeipZiGo9vCZ0hD6TbiN7hSZwEAIfkECQMAAQAsAAAAABIAEgBAAiiMH6CL7Z+WNHK2yg5WdLsNQB12VQgJjmZJiqnriZEl1y94423aqlwBACH5BAkDAAEALAAAAAASABIAQAIrjH+gi+2+IjCSvaoo1vUFPHnfxlllBp5mk4qt98KSSKvZCHZ4HtmTrgoUAAAh+QQFAwABACwAAAAAEgASAEACKIyPAcvpr5g0csJYc8P1cgtpwDceGblQmiey69W6oOfEon2f6KirUwEAIfkECQMAAQAsAAAPAAgAAwBAAgSMj6lXACH5BAkDAAEALAAAAAASABIAQAIYjI+JwK0Po5y02glUvrz7bzXiBpbLaD4FACH5BAkDAAEALAAAAAASABIAQAImjI8By8qfojQPTldzw/VymB3aCIidN6KaGl7kSnWpC6ftt00zDRUAIfkECQMAAQAsAAAAABIAEgBAAiaMjwHLyp+iNA9WcO6aVHOneWBYZeUXouJEiu1lWit7jhCX4rMEFwAh+QQJAwABACwAAAAAEgASAEACJ4yPAcvKn6I0r1pA78zWQX51XrWBSzl+Uxia7Jm+mEujW3trubg3BQAh+QQFAwABACwAAAAAEgASAEACJwyOoYa3D6N8rVqgLp5M2+x9XcWBTTmGTqqa6qqxFInWUMzhk76TBQA7")'
      // parent.style.backgroundColor = 'inherit'
      // parent.style.backgroundRepeat = 'no-repeat'
      // parent.style.backgroundPosition = 'center'
      parent.style.backgroundSize = `${(min / 3) > 18 ? 18 : (min / 3)}px`
      parent.classList.remove('loaded')
      parent.classList.remove('error')
      parent.classList.add('loading')
      // if (!el.classList.contains('loading')) {
      //   el.classList.remove('loaded')
      //   el.classList.remove('error')
      //   el.classList.add('loading')
      //   if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
      //     el.style.width = null
      //     el.style.height = null
      //     el.style.top = null
      //     el.style.left = null
      //     el.style.marginLeft = null
      //     el.style.marginTop = null
      //   }
      // }
    },
    error ({el}) {
      let parent = el.parentElement
      let min = parent.offsetWidth > parent.offsetHeight ? parent.offsetHeight : parent.offsetWidth
      parent.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAQAAACSoYmJAAACwElEQVRo3u3b3VLaQBTA8Z1x5NoHo9f6OPgIouNb+BZFg1SBWlsL41dLK+FDW2UUEPj3AqEYErIJQfa0OXsN85vM2bN7IEepqWCVJFvsU6XNsqJNlX22SLKq/II1UtQwKeqkWJtF3qCKiVFlwx28wi4mxy4r0+Q9TI89B5ttJMTOJHkdKbH+t2LYYtD2SyUhhaRIKaVIGFaX/aJGQpFEWiQVaXHobcV7ceiMEpbRADVFRxy6oxAY/x56QIMyebLkKFKmycB09C0FLMcq0DQXPeB6Cjxa10t/3h5ob/KQbSC6OZNsYS05SZRbahz7oo+XmiLKrf21NFbdLHRJC10yC53XQufNQh9qobNmoXMS0QWJ6SFyI4oseXqHSz8+xv/XCxMMuPQkX5p6NR0mibAmYPS865TIkyVLnhL1yJ/xD66kNbY3LxW/Lwdtj5PulGcZ6NdHWDHQv39LQjfJOrb4ES2z0bdTZAuLHHfmon+5kofX3ZqZ6N8+TUbFPPSDRotx7nsavCm6pdkVndEzBf3IkRbZwuKEbnTob1o55xZPAcjDdu4xCvSAC+2t4oy2RmPhXB+4nxc9oBxoh09GR/O3FOc69LhTaqL7nAUuTKPoavb37usmLLrHaah6CvDMxznIFlY4dJeT0MdAz+OzC0Z3KIY+vXp8mpscAv3ks4UqM/fB5wjIgdEtjdpa8aw2XyIhB0Tfax66FVfy14jIgdB3mj/5urEna/obohued14d9nmEZG20HZD8mn0RKVkT/TPklw/ZVxGTNdHhv77C98jJC0cvZsXoGB2jY3SMjtExOkYvGy3yBVmRryJnxKEzQl+vlzfI8E6RoCEro0nIHM4RNgZVGw9UCho4mxymZEcEeUf+EKXIcdXxYLCZW9L2GAweD1RuGla3G2zOHMGeGHZPc4A987/exUYXmwPSJElMC/8AAsbzwJ8A0u0AAAAASUVORK5CYII=")'
      // parent.style.backgroundColor = '#d9d9d9'
      // parent.style.backgroundRepeat = 'no-repeat'
      // parent.style.backgroundPosition = 'center'
      parent.style.backgroundSize = `${(min / 3) > 90 ? 90 : (min / 3)}px`
      parent.classList.remove('loaded')
      parent.classList.remove('loading')
      parent.classList.add('error')
      // el.classList.remove('loaded')
      // el.classList.remove('loading')
      // el.classList.add('error')
      // el.classList.remove('resize')
      //
      // if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
      //   el.style.width = null
      //   el.style.height = null
      //   el.style.top = null
      //   el.style.left = null
      //   el.style.marginLeft = null
      //   el.style.marginTop = null
      // }
    }
  }
}
