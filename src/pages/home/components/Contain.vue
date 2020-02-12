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
  border-radius: 0.35rem;
  margin: 0.75rem 4% 0.5rem;
  padding: 1.25rem 0.5rem 1.875rem;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.1);
}
</style>
