<template>
  <section class="section">
    <home-map></home-map>
    <home-chart></home-chart>
  </section>
</template>

<script>
import HomeMap from './Map'
import HomeChart from './Chart'

export default {
  name: 'Home',
  components: {
    HomeMap,
    HomeChart
  },

  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: #fff;
  border-radius: 0.625rem;
  margin: 1rem 4% 1.5rem;
  padding: 0.917rem 1.0625rem 1.875rem;
}
</style>
