<template>
</template>

<script>
  export default {
    name: 'xy-reach-bottom',
    props: {
      threshold: {
        type: String,
        default: 0
      },
      paused: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        done: true
      }
    },
    mounted: function () {
      let that = this
      window.addEventListener('scroll', function (e) {
        let threshold = parseInt(that.threshold)
        threshold = isNaN(threshold) ? 0 : threshold
        console.log(`${window.scrollY} + ${threshold} >= ${document.body.scrollHeight} - ${window.innerHeight} = ${document.body.scrollHeight - window.innerHeight}`)
        if (window.scrollY + threshold >= document.body.scrollHeight - window.innerHeight) {
          if (!that.done) {
            that.done = true
            if (!that.paused) {
              that.$emit('on-bottom')
              console.log('reach bottom')
            }
          }
        } else {
          that.done = false
        }
      })
    }
  }
</script>