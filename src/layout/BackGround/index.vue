<template>
  <div class="background-wrapper">
    <div class="star-wrapper">
      <div class="star" ref="star" v-for="(item, index) in count" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 800,
    },
    distance: {
      type: Number,
      default: 800,
    },
  },
}
</script>

<style lang="less">
.background-wrapper {
  position: absolute;
  left: 0;
  top: 40px;
  width: 100%;
  height: calc(100% - 40px);
  .star-wrapper {
    width: 100%;
    height: 100%;
    background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
    background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
    background-attachment: fixed;
    overflow: hidden;
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    left: 50%;
    animation: rotate 90s infinite linear;
    .star {
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #fff;
    }
  }
  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0deg);
    }
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }
}
</style>
