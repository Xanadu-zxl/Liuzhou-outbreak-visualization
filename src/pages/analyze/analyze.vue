<template>
  <div>
    <analyze-header></analyze-header>
    <pie />
    <horizontal-bar />
    <donut />
    <analyze-table />
    <home-footer></home-footer>
  </div>
</template>

<script>
import AnalyzeHeader from './Header'
import HomeFooter from '../home/components/Footer'
import Pie from './pie'
import HorizontalBar from './horizontal_bar'
import Donut from './donut'
import AnalyzeTable from './table'

export default {
  name: 'Home',
  components: {
    AnalyzeHeader,
    Pie,
    HorizontalBar,
    Donut,
    AnalyzeTable,
    HomeFooter
  }
}
</script>

<style lang="less">
  html,body {
    background: #D3DBE4 linear-gradient(to bottom, #2583D9 14.17%, #2583D900 30.16%);
  }
.section {
  background-color: #fff;
  border-radius: 0.35rem;
  margin: 0.75rem 4% 0.5rem;
  padding: 1.25rem 0.5rem;
}

.analyze-chart-title {
  color: #333333;
  font-size: .75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: .75rem;
  letter-spacing: .025rem;

  .analyze-chart-title-badge {
    width: .25rem;
    height: .6rem;
    background-color: #39aabb;
    border-radius: .125rem;
    margin-right: .5rem;
  }

  .analyze-chart-title-unit {
    color: #666666;
    font-size: .45rem;
    margin-left: 0.2rem;
  }
}
</style>
