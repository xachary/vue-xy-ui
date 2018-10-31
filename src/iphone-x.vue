<style lang="scss">
  body {
    margin-bottom: 0;
    margin-bottom: env(safe-area-inset-bottom);
    padding-bottom: 100px;
    border: 2px solid red;
  }

  .ct {
    p {
      min-height: 150vh;
      border: 2px solid rgba(0, 255, 0, 0.5);
      background-color: rgba(0, 255, 0, 0.2);
      box-sizing: border-box;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
    }
    .bar {
      position: fixed;
      bottom: 0;
      bottom: env(safe-area-inset-bottom);
      left: 0;
      width: 100%;
      height: 100px;
      box-sizing: border-box;
      border: 2px solid rgba(0, 0, 255, 0.5);
      background-color: rgba(0, 0, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
    }
  }

  .iphone-x-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    height: env(safe-area-inset-bottom);
    background-color: rgba(255, 0, 0, 0.2);
    text-align: center;
    margin: 0;
    &:before {
      content: 'safe-area-inset-bottom';
    }
  }
</style>
<template>
  <div class="ct">
    <p>
      content
    </p>
    <div class="bar">I`m a fixed bar(100px)</div>

    <div class="iphone-x-bottom"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>