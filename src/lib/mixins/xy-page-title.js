function updateTitle (title) {
  document.title = title
}

export default {
  data () {
    return {
      pageTitle: ''
    }
  },
  watch: {
    title () {
      let that = this
      updateTitle(that.pageTitle)
    }
  },
  mounted () {
    let that = this
    that.$nextTick(function () {
      console.log(that.pageTitle)
      updateTitle(that.pageTitle)
      console.log(document.title)
    })
  }
}