<template>
  <div id="app"
       v-xy-pull-refresh="onPullRefresh">
    <xy-reach-bottom threshold="50"
                     @on-bottom="onbottom"></xy-reach-bottom>
    <xy-scale-slider width="640"
                     height="290"
                     interval="3"
                     :imgs="imgs"
                     @on-change="onchange"
                     v-xy-moving-btn></xy-scale-slider>
    <div id="demo">
      <div class="keepTopOther"></div>
      <div id="keepTop"
           v-xy-keep-top>
        <button v-xy-moving-btn>keep-top & moving-btn</button>
      </div>
      <div class="keepTopOther"></div>
    </div>
    <div class="lazy-load"
         style="width: 100px;height: 100px;border: 1px solid red;">
      <img v-lazy="'http://dummyimage.com/300x600'"
           class="lazy-cover">
    </div>
    <div class="lazy-load"
         style="width: 100px;height: 100px;border: 1px solid red;">
      <img v-lazy="'http://dummyimage.com/300x600'"
           class="lazy-contain">
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import xyUI from './lib'

  Vue.use(xyUI)

  export default {
    name: 'app',
    data () {
      return {
        imgs0: [],
        imgs1: [
          {
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }
        ],
        imgs2: [
          {
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }, {
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs3: [
          {
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }, {
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: 'https://www.baidu.com/'
          }, {
            name: '300*300',
            src: 'http://dummyimage.com/300x300',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs: [
          {
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }, {
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: '#'
          }, {
            name: '300*300',
            src: 'http://dummyimage.com/300x300',
            href: '#'
          }, {
            name: '400*200',
            src: 'http://dummyimage.com/400x200',
            href: '#'
          }
        ]
      }
    },
    methods: {
      onbottom () {
        alert('onbottom')
      },
      onchange (item, index) {
        console.log('onchange', item, index)
      },
      onPullRefresh (stop) {
        setTimeout(function () {
          stop()
        }, 2000)
      }
    }
  }
</script>

<style lang="scss">
  /*@import './lib/scss/style.scss';*/

  body {
    margin: 0;
  }

  #demo {
    height: 200vh;
    background: linear-gradient(black 0%, black 10%, white 10%, white 20%, black 20%, black 30%, white 30%, white 40%, black 40%, black 50%, white 50%, white 60%, black 60%, black 70%, white 70%, white 80%, black 80%, black 90%, white 90%, white 100%);
    .keepTopOther {
      height: 10vh;
      background-color: blue;
    }

    #keepTop {
      height: 10vh;
      background-color: yellow;
      line-height: 10vh;
      text-align: center;
    }
  }
</style>
