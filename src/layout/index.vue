<template>
  <div class="container">
    <BackGround>
      <SideBar></SideBar>
      <div class="main">
        <slot></slot>
      </div>
    </BackGround>
  </div>
</template>

<script>
import SideBar from './SideBar'
import BackGround from './BackGround'
export default {
  components: { SideBar, BackGround },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less">
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.main {
  position: absolute;
  left: 0;
  top: 40px;
  width: 100%;
  height: calc(100% - 40px);
}
</style>
