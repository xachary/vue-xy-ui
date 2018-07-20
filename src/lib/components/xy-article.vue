<template>
  <div class="xy-article">
    <div id="xy-article__point"></div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'xy-article',
    props: {
      des: {
        type: String,
        default: ''
      }
    },
    watch: {
      des: function (n) {
        let that = this
        that.update()
      }
    },
    methods: {
      update () {
        let that = this
        if (that.des) {
          sessionStorage.setItem('A', that.des)
          sessionStorage.setItem('B', that.des.replace(/(<img.*?)(src=")(.*?)(".*?>)/g, '<div class="lazy-load">$1v-lazy="\'$3\'$4</div>'))
          sessionStorage.setItem('C', '/(<img.*?)(src=")(.*?)(".*?>)/g')
          sessionStorage.setItem('D', '<div class="lazy-load">$1v-lazy="\'$3\'$4</div>')
          var text = Vue.extend({
            template: `<div>${that.des.replace(/(<img.*?)(src=")(.*?)(".*?>)/g, '<div class="lazy-load">$1v-lazy="\'$3\'$4</div>')}</div>`
          })
          new text().$mount('#xy-article__point')
        }
      }
    },
    data () {
      return {}
    },
    mounted: function () {
      let that = this
      that.update()
    }
  }
</script>