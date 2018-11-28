<style lang="scss">

</style>
<template>
  <div>
    <div class="lazy-load"
         style="width: 100px;height: 100px; overflow: hidden;">
      <img v-lazy="'http://dummyimage.com/335x190/cffbfd/000'"
           class="lazy-contain"
           :data-img="'http://dummyimage.com/335x190/cffbfd/000'"
           v-xy-pop-image:imgs="['http://dummyimage.com/335x190/cffbfd/000','http://dummyimage.com/335x400/cffbfd/000']">
    </div>
    <br>
    <button img="http://dummyimage.com/335x190/cffbfd/000"
            class="lazy-contain"
            :data-img="'http://dummyimage.com/335x190/cffbfd/000'"
            v-xy-pop-image:imgs="['http://dummyimage.com/335x190/cffbfd/000','http://dummyimage.com/335x300/cffbfd/000']">
      测试
    </button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    methods: {}
  }
</script>