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
import HomeFooter from './Footer'
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
    background: #EDF2F5 linear-gradient(to bottom, #2583D9 14.17%, #2583D900 30.16%);
  }
.section {
  background-color: #fff;
  border-radius: .35rem;
  margin: .5rem 4% ;
  padding: 1.25rem 2.5%;
  height: 17.5rem;
  box-sizing: border-box;
}

.analyze-chart-title {
  color: #333333;
  font-size: .9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: .025rem;
  line-height: 1;

  .analyze-chart-title-badge {
    width: .25rem;
    height: .6rem;
    background-color: #0085ff;
    border-radius: .125rem;
    margin-right: .5rem;
  }

  .analyze-chart-title-unit {
    color: #999999;
    font-size: .6rem;
    margin-left: 0.2rem;
  }

  .analyze-chart-subtitle {
    color: #999999;
    font-size: .55rem;
    padding-left: .7rem;
    flex: 0 0 1;
    line-height: 1;
    margin: .4rem 0 1rem 0;
    font-weight: 400;
  }
}
</style>
