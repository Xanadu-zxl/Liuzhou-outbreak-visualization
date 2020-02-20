<template>
  <div>
    <analyze-header></analyze-header>
    <section class="section">
      <donut />
      <radar />
    </section>
    <home-footer></home-footer>
  </div>
</template>

<script>
import AnalyzeHeader from '../home/components/Header'
import HomeFooter from '../home/components/Footer'
import Donut from './donut'
import Radar from './radar'

export default {
  name: 'Home',
  components: {
    AnalyzeHeader,
    Donut,
    Radar,
    HomeFooter
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: #fff;
  border-radius: 0.35rem;
  margin: 0.75rem 4% 0.5rem;
  padding: 1.25rem 0.5rem 1.875rem;
}
</style>
