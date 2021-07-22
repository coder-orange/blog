<template>
  <div class="background-wrapper">
    <div class="star-wrapper">
      <div class="star"></div>
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
  background: #eee;
  .star-wrapper {
    .star {
    }
  }
}
</style>
