<template>
  <div class="sidebar-wrapper">
    <div class="header">
      <div class="item">测试</div>
      <div class="item">测试1</div>
      <div class="item">测试2</div>
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
  width: 100%;
  height: @headHeight;
  line-height: @headHeight;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  color: #333;
  border-bottom: 1px solid #eee;
  .item {
    width: auto;
    margin: 0 20px;
  }
}
</style>
