<template>
  <div id="app">
    <keep-alive>
      <component :is="layout">
        <router-view v-if="isRouterAlive" />
      </component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      layoutName: 'default',
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    },
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || this.layoutName) + '-layout'
    },
  },
}
</script>
<style lang="less">
@import './style/index.less';
</style>
