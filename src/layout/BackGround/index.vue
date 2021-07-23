<template>
  <div class="background-wrapper">
    <div class="star-wrapper">
      <div class="star" ref="star" v-for="(item, index) in count" :key="index"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1000,
    },
    distance: {
      type: Number,
      default: 800,
    },
  },
  mounted() {
    let vm = this
    let starArr = vm.$refs.star
    starArr.forEach(item => {
      let speed = 0.2 + Math.random() * 1
      let thisDistance = vm.distance + Math.random() * 300
      item.style.transformOrigin = `0 0 ${thisDistance}px`
      item.style.transform = `translate3d(0,0, -${thisDistance}px) rotateY(${Math.random() *
        360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`
    })
  },
}
</script>

<style lang="less">
.background-wrapper {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
  background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
  background-attachment: fixed;
  overflow: hidden;
  .star-wrapper {
    transform: perspective(500px);
    transform-style: preserve-3d;
    perspective-origin: 50% 100%;
    position: absolute;
    left: 50%;
    bottom: 0;
    animation: rotate 240s infinite linear;
    .star {
      width: 2px;
      height: 2px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      backface-visibility: hidden;
    }
  }
  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0deg);
    }
    100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }
}
</style>
