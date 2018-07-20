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
    data () {
      return {}
    },
    mounted: async function () {
      let that = this
      await Vue.nextTick()
      var text = Vue.extend({
        template: `<div>${that.des.replace(/(<img.*?)(src=")(.*?)(".*?>)/g, '<div class="lazy-load">$1v-lazy="\'$3\'$4</div>')}</div>`
      })
      new text().$mount('#xy-article__point')
    }
  }
</script>