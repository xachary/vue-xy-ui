<template>
  <div class="xy-scale-slider"
       :style="{'padding':`0 ${paddingRSH}vw`}">
    <div :style="{'width':`${wideRSH}vw`,'left':`${leftRSH}vw`}"
         @touchstart="onTouchstart"
         @touchmove="onTouchmove"
         @touchend="onTouchend"
         :class="{'xy-scale-slider--auto':auto}">
      <a v-for="(item, index) in imgs"
         :href="item.href"
         class="lazy-load"
         :class="{'xy-scale-slider--wait-r':index>current,'xy-scale-slider--wait-l':index<current}"
         :style="{'width':`${widthRSH}vw`,'height':`${heightRSH}vw`,'margin':`0 ${marginRSH}vw`}">
        <img v-lazy="item.src"
             class="lazy-cover"
             :alt="item.name">
      </a>
    </div>
  </div>
</template>

<script>
  let timer = null
  export default {
    name: 'xy-scale-slider',
    props: {
      width: {
        type: String,
        default: 0
      },
      height: {
        type: String,
        default: 0
      },
      imgs: {
        type: Array,
        default: []
      },
      interval: {
        type: String,
        default: '1'
      }
    },
    data () {
      return {
        current: 0,
        cur: 0,
        paddingRSH: 0,
        wideRSH: 0,
        widthRSH: 0,
        marginRSH: 0,
        heightRSH: 0,
        leftRSH: 0,

        auto: true,

        sx: 0,
        mx: 0,
        ex: 0
      }
    },
    computed: {
      itv () {
        let that = this
        return parseInt(that.interval) * 1000
      }
    },
    mounted: function () {
      let that = this

      console.log(window.innerWidth)
      console.log(that.width / 2)

      that.widthRSH = that.width * 100 / 750
      that.paddingRSH = (100 - that.widthRSH) / 2
      that.marginRSH = that.paddingRSH / 4
      that.wideRSH = (that.marginRSH * 2 + that.widthRSH) * that.imgs.length
      that.heightRSH = that.height * 100 / 750

      //      if (that.imgs.length > 1) {
      //        that.current = 1
      //      }
      //
      //      if (that.imgs.length > 2) {
      //        that.imgs.splice(0, 0, that.imgs.pop())
      //      }

      //      that.leftRSH = -(that.marginRSH * 2 + that.widthRSH) * that.current - that.marginRSH
      //      that.ex = that.leftRSH * 750 / 2 / 100
      that.update()

      //      that.start()
    },
    methods: {
      onTouchstart ({touches: [touch]}) {
        let that = this
        that.stop()
        that.auto = false
        that.sx = touch.clientX
        that.mx = touch.clientX
      },
      onTouchmove (e) {
        let that = this
        let {touches: [touch]} = e

        that.auto = false
        that.mx = touch.clientX
        that.leftRSH = (that.mx - that.sx + that.ex) / (750 / 2) * 100
        if (that.sx != that.mx) {
          e.preventDefault()
          e.stopPropagation()
        }
      },
      onTouchend ({changedTouches: [touch]}) {
        let that = this
        that.auto = true

        let tr = Math.abs((that.leftRSH + that.marginRSH) % (that.marginRSH * 2 + that.widthRSH))
        let cr = (that.marginRSH * 2 + that.widthRSH) / 3
        let wr = (that.marginRSH * 2 + that.widthRSH)

        if (that.mx - that.sx > 0) {
          if (wr - tr > cr) {
            that.current--
          }
        } else if (that.mx - that.sx < 0) {
          if (tr > cr) {
            that.current++
          }
        }

        that.update()
        //        that.start()
      },
      update () {
        let that = this

        if (that.current < 0) {
          that.current = 0
        } else if (that.current >= that.imgs.length) {
          that.current = that.imgs.length - 1
        }

        //        console.log(that.cur, that.current)
        if (that.cur !== that.current) {
          that.cur = that.current

          that.$emit('on-change', that.imgs[that.current], that.current, that.imgs.length)
        }

        that.leftRSH = -(that.marginRSH * 2 + that.widthRSH) * that.current - that.marginRSH

        that.ex = that.leftRSH * 750 / 2 / 100
      },
      stop () {
        clearInterval(timer)
        timer = null
      },
      start () {
        let that = this
        that.stop()
        timer = setInterval(function () {
          that.current++
          that.update()
        }, that.itv)
      }
    }
  }
</script>

<style lang="scss">
  .xy-scale-slider {
    overflow: hidden;
    font-size: 0;
    box-sizing: border-box;
    & > div {
      white-space: nowrap;
      width: auto;
      position: relative;
      box-sizing: border-box;
      &.xy-scale-slider--auto {
        transition: left .3s ease-in-out;
      }
      & > a {
        display: inline-block;
        box-sizing: border-box;
        transition: transform .3s ease-in-out;
        -webkit-tap-highlight-color: transparent;
        &.xy-scale-slider--wait-r, &.xy-scale-slider--wait-l {
          transform: scale(.8);
        }
        &.xy-scale-slider--wait-r {
          transform-origin: 0 center;
        }
        &.xy-scale-slider--wait-l {
          transform-origin: 100% center;
        }
      }
    }
  }
</style>