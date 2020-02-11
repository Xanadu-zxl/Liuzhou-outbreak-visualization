<template>
  <div>
    <home-header></home-header>
    <home-contain></home-contain>
    <home-table></home-table>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeContain from './components/Contain'
import HomeTable from './components/Table'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContain,
    HomeTable,
    HomeFooter
  }
}
</script>

<style lang="less" scoped>
</style>
