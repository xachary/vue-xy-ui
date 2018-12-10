<style lang="scss">

</style>
<template>
  <div>
    <xy-time-count class="wc-car-control__info__time"
                   :time="new Date(Date.now()+5100)"
                   @finish="onFinish">
    </xy-time-count>
    <xy-timing class="wc-car-control__info__time"
               :time="new Date(Date.now())">
    </xy-timing>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    methods: {
      onFinish () {
        console.log('finish')
      }
    },
    mounted: function () {
      console.log('page mounted')
    }
  }
</script>