<template>
  <section class="section">
    <div class="analyze-chart-title">
      <div class="analyze-chart-title-badge"></div>
      <span>已计划复工时间企业数量分布</span>
      <span class="analyze-chart-title-unit">/个</span>
    </div>
    <div class="chart-container">
      <div class="chart-content">
        <horizontal-bar
          :data="barData"
          labelKey="label"
          :valueKey="['计划复工企业数量（个）']"
          :theme="{background: 'transparent'}"
          :series="['#0d83ed']"
          :gap="{outer: 3.4, inner: 200.8}"
          :crossAxis="{
            labelStyle: {
              fill: 'transparent'
            },
            lineStyle: {
              stroke: 'transparent',
            }
          }"
          :mainAxis="{
            labelStyle: {
              fill: '#999999'
            },
            lineStyle: {
              stroke: 'transparent',
            },
          }"
          :tooltipOptions="{
            background: '#ffffff'
          }"
      />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import {
  HorizontalBar
} from '@byzanteam/graphite'

export default {
  components: {
    HorizontalBar
  },

  data() {
    return {
      barData: [{
        label: '',
        count: 0
      }]
    }
  },

  created () {
    axios.get('/e8e823dc-e196-418d-89da-a070f35e7e3d/data').then(({data: {data, schema}}) => {
      this.barData = data.map((item, index) => {
        const month = new Date(item[0]).getMonth() + 1
        const date = new Date(item[0]).getDate()
        return {
          label: month > 10 ? `${month}.${date}` : `0${month}.${date}`,
          '计划复工企业数量（个）': item[1]
        }
      })
    })
  }
}
</script>

<style lang="less" scoped>
.section {
  padding-left: 0;
  padding-right: 0;
}

.analyze-chart-title {
  margin-bottom: .8rem;
  padding-left: 2.5%;
}

.chart-container {
  margin-bottom: 1.25rem;
  height: 12.8rem;
  overflow: scroll;
}

.chart-content {
  height: 40.5rem;
}
</style>
