<style lang="scss"
       scoped>
@import '../scss/mixin';

div.xy-list-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*padding-bottom: rsh(30);*/
  font-style: normal;
  font-size: rsh(28);
  color: rgba(166, 166, 166, 1);
  line-height: rsh(80);
  text-align: center;
  padding: rsh(15) 0;
  &.xy-list-status--loading {
    & > div {
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
        animation: xy-list-status__char 0.6s ease-in infinite;
        &:nth-child(1) {
          animation-delay: 0s;
        }
        &:nth-child(2) {
          animation-delay: 0.2s;
        }
        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }
}
</style>
<template>
  <div
    class="xy-list-status"
    v-if="status!==''"
    :class="{'xy-list-status--empty':status==='empty','xy-list-status--nomore':status==='nomore','xy-list-status--loading':status==='loading','xy-list-status--empty--short':status==='empty-short'}"
    :style="{height:status==='empty'&&auto?`calc(100vh - ${top}px - ${bv}vw)`:'auto'}"
  >
    <slot name="empty" v-if="status==='empty'||status==='empty-short'">
      <span>暂无内容</span>
    </slot>
    <slot name="nomore" v-if="status==='nomore'">
      <span>没有更多了</span>
    </slot>
    <div v-if="status==='loading'">
      <span>加</span>
      <span>载</span>
      <span>中</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xy-list-status',
  props: {
    status: String,
    bottom: {
      default: '0'
    },
    auto: {
      default: true
    }
  },
  data() {
    return {
      top: 0
    }
  },
  computed: {
    bv: function () {
      let that = this
      return parseInt(that.bottom) / 750 * 100
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
