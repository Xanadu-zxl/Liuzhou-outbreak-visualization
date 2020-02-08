<template>
  <div>
    <home-header></home-header>
    <home-contain></home-contain>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeContain from './components/Contain'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContain,
    HomeFooter
  }
}
</script>

<style lang="less" scoped>
</style>
