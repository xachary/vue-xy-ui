<style lang="scss">
  button {
    border: 1px solid #999;
  }

  input {
    width: 200px;
    height: 200px;
    background-color: yellow;
  }
</style>
<template>
  <div class="ct">
    <div>调起媒体</div>
    <button @click="getMedia">
      调起媒体
    </button>
    <div>
      <input type="file"
             accept="image/*"
             multiple="multiple"
             @change="onUploadChange">
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    methods: {
      getMedia () {
        navigator.mediaDevices.getUserMedia({
          video: {
            width: 480,
            height: 320
          }
        }, function (stream) {
          console.log(stream)
          debugger
        }, function (err) {
          console.log(stream)
          debugger
        })
      }
    }
  }
</script>