<template>
  <div id="app"
       v-xy-pull-refresh="onPullRefresh">
    <xy-page-progress></xy-page-progress>
    <xy-reach-bottom threshold="50"
                     @on-bottom="onbottom"></xy-reach-bottom>
    <xy-scale-slider width="640"
                     height="290"
                     interval="3"
                     :imgs="imgs"
                     @on-change="onchange"
                     v-xy-moving-btn></xy-scale-slider>
    <div id="demo">
      <router-link tag="button"
                   to="/page-progress"
                   v-xy-moving-btn>路由加载
      </router-link>
      <router-view></router-view>
      <div class="keepTopOther"></div>
      <div id="keepTop"
           v-xy-keep-top>
        <button v-xy-moving-btn>keep-top & moving-btn</button>
      </div>
      <div class="keepTopOther"></div>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
      <section class="cats cats--empty">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
      </section>
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
  import VueRouter from 'vue-router'
  import xyUI from './lib'

  Vue.use(VueRouter)
  Vue.use(xyUI)

  export default {
    name: 'app',
    data () {
      return {
        imgs0: [],
        imgs1: [
          {
            id: '1',
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }
        ],
        imgs2: [
          {
            id: '1',
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }, {
            id: '2',
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs3: [
          {
            id: '1',
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }, {
            id: '2',
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: 'https://www.baidu.com/'
          }, {
            id: '3',
            name: '300*300',
            src: 'http://dummyimage.com/300x300',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs: [
          {
            id: '1',
            name: '100*600',
            src: 'http://dummyimage.com/100x600',
            href: '#'
          }, {
            id: '2',
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: '/page-progress'
          }, {
            id: '3',
            name: '300*300',
            src: 'http://dummyimage.com/300x300',
            href: '#'
          }, {
            id: '4',
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
      onchange (item, index, total) {
        console.log('onchange', item, index, total)
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
  @import './lib/scss/mixin';

  body {
    margin: 0;
  }

  #demo {
    /*height: 200vh;*/
    /*background: linear-gradient(black 0%, black 10%, white 10%, white 20%, black 20%, black 30%, white 30%, white 40%, black 40%, black 50%, white 50%, white 60%, black 60%, black 70%, white 70%, white 80%, black 80%, black 90%, white 90%, white 100%);*/
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

  .cats {
    $cats-w: red;
    margin-top: 10px;
    @include well-out;
    & > div {
      font-size: 16px;
      padding: rsh(35) 0 rsh(30) 0;
      height: rsh(100);
      background-color: yellow;
      text-align: center;
    }
    &.cats--empty {
      & > div {
        @include well-item(3, 1, blue);
      }
    }
    &.cats--tb {
      & > div {
        @include well-item(3, 1, blue, 'tb');
      }
    }
  }
</style>
