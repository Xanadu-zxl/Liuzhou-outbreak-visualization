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

<style>
html,body {
  background: #D3DBE4 linear-gradient(to bottom, #3D5D7C 0%, #3D5D7C 12.48%, #3D5D7C00 36.96%);
}
</style>
