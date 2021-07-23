<template>
  <div class="container-full">
    <BackGround>
      <SideBar></SideBar>
      <div class="container">
        <div class="main">
          <slot></slot>
        </div>
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
.container-full {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.container {
  position: absolute;
  left: 0;
  top: 40px;
  width: 100%;
  height: calc(100% - 40px);
  .main {
    opacity: 0.5;
    box-sizing: border-box;
    width: 80vw;
    height: calc(100% - 80px);
    margin: 40px 10vw;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0px 0px 15px 3px rgba(255, 255, 255, 0.3);
  }
}
</style>
