<template>
  <section class="section">
    <div class="analyze-chart-title">
      <div class="analyze-chart-title-badge"></div>
      <span>已填报复工信息企业生产情况</span>
      <span class="analyze-chart-title-unit">/个</span>
    </div>
    <div class="chart-container">
      <donut
        :data="pieData"
        labelKey="label"
        :valueKey="['count']"
        color="#333333"
        :theme="{
          background: 'transparent',
          colors: ['#ffa90e', '#0085ff'],
          label: {
            fill: '#333333'
          },
          font: {
            family: 'Oswald-Regular',
          }
        }"
        :tooltipOptions="{
          background: '#ffffff'
        }"
      />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import {
  Donut
} from '@byzanteam/graphite'

export default {
  components: {
    Donut
  },

  data() {
    return {
      labelMap: {
        shut_down: '停产',
        working: '生产'
      },
      pieData: []
    }
  },

  created () {
    axios.get('/a130abd7-72aa-412e-8ce2-0c3c2f509369/data').then(({data: {data, schema}}) => {
      this.pieData = data[0].map((item, index) => {
        return {
          label: this.labelMap[schema[index].field],
          count: item
        }
      })
    })
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  height: 12.3rem;
}
</style>
