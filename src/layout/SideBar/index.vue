<template>
  <div class="sidebar-wrapper">
    <div class="header">
      <div class="item">笔记</div>
      <div class="item">DEMO</div>
      <div class="item">分类</div>
    </div>
  </div>
</template>

<script>
export default {
  // components: {},
  data() {
    return {}
  },
}
</script>

<style lang="less">
@headHeight: 40px;

.header {
  box-sizing: border-box;
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: @headHeight;
  line-height: @headHeight;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, .2);
  padding: 0 20px;
  color: #fff;
  .item {
    width: auto;
    margin: 0 20px;
  }
}
</style>
