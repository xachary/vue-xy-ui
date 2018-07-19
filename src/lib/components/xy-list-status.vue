<template>
  <div class="xy-list-status"
       v-if="status!==''"
       :class="{empty:status==='empty',nomore:status==='nomore',loading:status==='loading'}"
       :style="{height:status==='empty'?`calc(100vh - ${top}px)`:'auto'}">
    <slot name="empty"
          v-if="status==='empty'">
      <span>暂无内容</span>
    </slot>
    <slot name="nomore"
          v-if="status==='nomore'">
      <span>没有更多了</span>
    </slot>
    <div v-if="status==='loading'"><span>加</span><span>载</span><span>中</span></div>
  </div>
</template>

<script>
  export default {
    name: 'xy-list-status',
    props: {
      status: String
    },
    data () {
      return {
        top: 0
      }
    },
    watch: {
      status: function () {
        let that = this
        that.top = Math.floor(that.$el.parentElement.getBoundingClientRect().top)
      }
    }
  }
</script>

<style lang="scss"
       scoped>
  @import "../scss/mixin";

  div.xy-list-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: rsh(30);
    font-style: normal;
    font-size: rsh(28);
    color: rgba(166, 166, 166, 1);
    & > div {
      line-height: rsh(80);
      @keyframes xy-list-status__char {
        0% {
          top: 0;
        }
        50% {
          top: rsh(10);
        }
        100% {
          top: 0;
        }
      }
      & > span {
        position: relative;
        animation: xy-list-status__ .6s ease-in infinite;
        &:nth-child(1) {
          animation-delay: 0s;
        }
        &:nth-child(2) {
          animation-delay: .2s;
        }
        &:nth-child(3) {
          animation-delay: .4s;
        }
      }
    }
  }
</style>