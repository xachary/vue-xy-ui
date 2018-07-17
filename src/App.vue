<template>
  <div id="app">
    <xy-reach-bottom threshold="50"
                     @on-bottom="onbottom"></xy-reach-bottom>
    <div id="demo">
      <div class="keepTopOther"></div>
      <div id="keepTop"
           v-xy-keep-top>
        <button v-xy-moving-btn>keep-top & moving-btn</button>
      </div>
      <div class="keepTopOther"></div>
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
      return {}
    },
    methods: {
      onbottom () {
        alert('onbottom')
      }
    }
  }
</script>

<style lang="scss">
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
