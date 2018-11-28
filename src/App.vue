<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import VueLazyload from 'vue-lazyload'
  import { xyLazyloadResize } from './lib'
  import xyUI from './lib'

  Vue.use(VueRouter)
  Vue.use(VueLazyload, xyLazyloadResize)
  Vue.use(xyUI)

  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {},
    mounted: function () {
      console.log('app mounted')
    }
  }
</script>

<style lang="scss">
  @import './lib/mint-ui/lib/style.css';
  @import './lib/scss/mixin';
</style>
