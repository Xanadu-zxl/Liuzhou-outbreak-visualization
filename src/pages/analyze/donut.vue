<template>
  <section class="section">
    <div class="analyze-chart-title">
      <div class="analyze-chart-title-badge"></div>
      <span>已填报复工信息企业行业分布</span>
    </div>
    <div class="chart-container">
      <donut
        :data="donutData"
        labelKey="label"
        :valueKey="['count']"
        :innerRadius="0.55"
        :hideLabel="true"
        :theme="{
          background: 'transparent',
          colors: ['#0d83ed', '#ffa90e', '#fed05f', '#ffe8af', '#fef2d4', '#8494a3', '97a9ba', '#adc0d1', '#beccd8', '#707d88', '#85929d', '#9ca8b2', '#bac0c5', '#cad6e0', '#6898c1']
        }"
        :legend="{
          notation: {
            fill: '#333',
            name: 'rect'
          }
        }"
        :legendOptions="{
          align: 'left',
          position: 'bottom',
          label: {
            fill: '#999999',
            size: 9,
          },
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
      donutData: []
    }
  },

  created () {
    axios.get('/8a0b6c83-919e-4b12-b921-5e8635f005ce/data').then(({data: {data, schema}}) => {
      this.donutData = data.map((item, index) => {
        return {
          label: item[0],
          count: item[1]
        }
      })
    })
  }
}
</script>

<style lang="less" scoped>
.section {
  height: 19rem;
}

.analyze-chart-title {
  margin-bottom: 1rem;
}

.chart-container {
  height: 13rem;
}
</style>
