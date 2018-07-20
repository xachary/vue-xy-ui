<template>
  <div id="app"
       v-xy-pull-refresh="onPullRefresh">
    <!--<xy-page-progress></xy-page-progress>-->
    <xy-reach-bottom threshold="50"
                     @on-bottom="onbottom"></xy-reach-bottom>
    <xy-scale-slider width="640"
                     height="290"
                     interval="3"
                     :imgs="imgs"
                     @on-change="onchange"
                     v-xy-moving-btn></xy-scale-slider>
    <xy-article des="123123"></xy-article>
    <div class="lazy-load">
      <img v-lazy="'http://dummyimage.com/300x100'">
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
    <div id="demo">
      <router-link tag="button"
                   to="/page-progress"
                   v-xy-moving-btn>路由加载
      </router-link>
      <router-view></router-view>
      <xy-list-status status="loading">
      </xy-list-status>
      <hr>
      <xy-list-status status="nomore">
      </xy-list-status>
      <hr>
      <xy-list-status status="nomore">
        <article slot="nomore"
                 class="nomore">
          <div>
            <div><span>没更多商品了</span></div>
          </div>
        </article>
      </xy-list-status>
      <hr>
      <xy-list-status status="empty"></xy-list-status>
      <hr>
      <xy-list-status status="empty">
        <img slot="empty"
             src="./nomore.png"
             alt="暂无内容"
             class="empty">
      </xy-list-status>
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
            id: '2',
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: '#'
          }, {
            id: '3',
            name: '200*600',
            src: 'http://dummyimage.com/200x600',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs3: [
          {
            id: '4',
            name: '300*600',
            src: 'http://dummyimage.com/300x600',
            href: '#'
          }, {
            id: '5',
            name: '300*600',
            src: 'http://dummyimage.com/300x600',
            href: 'https://www.baidu.com/'
          }, {
            id: '6',
            name: '300*300',
            src: 'http://dummyimage.com/300x300',
            href: 'https://www.baidu.com/'
          }
        ],
        imgs4: [
          {
            id: '7',
            name: '400*600',
            src: 'http://dummyimage.com/400x600',
            href: '#'
          }, {
            id: '8',
            name: '400*600',
            src: 'http://dummyimage.com/400x600',
            href: '/page-progress'
          }, {
            id: '9',
            name: '400*300',
            src: 'http://dummyimage.com/400x300',
            href: '#'
          }, {
            id: '10',
            name: '400*200',
            src: 'http://dummyimage.com/400x200',
            href: '#'
          }
        ],
        imgs: []
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
    },
    mounted: function () {
      let that = this

      setTimeout(function () {
        that.imgs = that.imgs1
        console.log('1')
      }, 2000)
      setTimeout(function () {
        that.imgs = that.imgs2
        console.log('2')
      }, 4000)
      setTimeout(function () {
        that.imgs = that.imgs3
        console.log('3')
      }, 6000)
      setTimeout(function () {
        that.imgs = that.imgs4
        console.log('4')
      }, 8000)
      //      setTimeout(function () {
      //        that.imgs = that.imgs0
      //        console.log('5')
      //      }, 8000)
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

  img.empty {
    width: rsh(212);
    height: rsh(220);
  }

  article.nomore {
    background-color: #fff;
    display: flex;
    justify-content: center;
    font-style: normal;
    & > div {
      text-align: center;
      margin: 0 auto;
      position: relative;
      color: #cc9054;
      font-weight: 300;
      font-size: rsh(32);
      line-height: rsh(38*2);
      padding: 0 rsh(20);

      &:after {
        position: absolute;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #cc9054;
        left: 0;
        top: 50%;
        z-index: 1;
        transform: scale(1, .5);
        margin-top: -1px;
      }

      & > div {
        position: relative;
        width: auto;
        z-index: 2;
        background-color: #fff;
        margin: 0 auto;
        padding: 0 rsh(10);
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          margin: 0 rsh(7*2);
          text-align: center;
        }
        &:after, &:before {
          content: '';
          vertical-align: middle;
          color: #cc9054;
          font-size: rsh(12*2);
          width: rsh(6*2);
          height: rsh(6*2);
          text-align: center;
          transform: scale(.6, 1) rotate(45deg);
          position: relative;
          background-color: #cc9054;
        }
      }
      &.footer-title {
        width: rsh(150*2);
        & > div {
          width: rsh((16 * 6 + 6 * 4 + 3 * 3)*2);
        }
      }
    }
  }
</style>
