<style lang="scss"
       scoped>
  .xy-time-count {

  }
</style>
<template>
  <div class="xy-time-count">
    {{label}}: <span v-if="day>0">{{day}}</span><label v-if="day>0">天</label><span>{{hourStr}}</span><label>:</label><span>{{minStr}}</span><label>:</label><span>{{secStr}}</span>
  </div>
</template>

<script>
  export default {
    name: 'xy-time-count',
    props: {
      time: {
        type: Date,
        default: new Date()
      },
      label: {
        type: String,
        default: ''
      }
    },
    computed: {
      hourStr () {
        let that = this
        return that.hour.toString()
                   .padStart(2, '0')
      },
      minStr () {
        let that = this
        return that.min.toString()
                   .padStart(2, '0')
      },
      secStr () {
        let that = this
        return that.sec.toString()
                   .padStart(2, '0')
      }
    },
    data () {
      let now = (new Date()).getTime()
      return {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
        tm: 0,
        timer: null,
        now: now
      }
    },
    methods: {
      update () {
        let that = this
        that.now = (new Date()).getTime()
        let snap = that.tm - that.now
        if (snap >= 0) {
          that.day = Math.floor(snap / 86400000) // 1000 / 60 / 60 / 24
          that.hour = Math.floor((snap % 86400000) / 3600000) // 1000 / 60 / 60
          that.min = Math.floor((snap % 3600000) / 60000) // 1000 / 60
          that.sec = Math.floor((snap % 60000) / 1000) // 1000
        } else {
          clearInterval(that.timer)
          that.timer = null
          that.$emit('finish')
        }
        console.log(snap)
      }
    },
    mounted: function () {
      let that = this
      that.tm = that.time.getTime()
      if (that.now < that.tm) {
        that.update()
        that.timer = setInterval(function () {
          that.update()
        }, 1000)
      }
    },
    beforeDestroy: function () {
      let that = this
      clearInterval(that.timer)
      that.timer = null
    }
  }
</script>