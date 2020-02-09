<template>
  <div>
    <div class="virus-chart">
      <v-chart :options="epidemicTendencyOptions" />
      <v-chart :options="epidemicTendencyOptions" />
    </div>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

export default {
  components: {
    'v-chart': Echarts
  },

  data() {
    return {
      epidemicTendencyOptions: {
        tooltip: {
          trigger: 'axis'
        },
        color: ['#ec9218', '#e83132'],
        xAxis: [{
          type: 'category',
          axisLabel: {
            rotate: 20,
            interval: 0,
            color: 'rgb(174, 174, 174)',
            fontSize: '14px'
          },
          data: [1.28, 1.29, 1.30, 1.31, 2.1, 2.2],
          axisLine: {show: false},
          axisTick: {show: false},
          splitLine: {show: false},
          axisPointer: {
            type: 'line',
            label: {
              show: false
            },
            lineStyle: {color: 'rgba(215, 215, 217)', type: 'dotted'}
          }
        }],
        yAxis: [{
          type: 'value',
          scale: true,
          name: '件',
          nameTextStyle: {
            color: 'rgb(174, 174, 174)'},
          axisLabel: {color: 'rgb(174, 174, 174)',
            fontSize: '14px'
          },
          axisLine: {show: false},
          axisTick: {show: false},
          splitLine: {show: false}
        }],
        series: [
          {
            type: 'line',
            name: '新增确诊',
            symbol: 'circle',
            symbolSize: 7,
            lineStyle: {width: 2},
            data: [10, 20, 34, 41, 42, 60]
          },
          {
            type: 'line',
            name: '新增疑似',
            symbol: 'circle',
            symbolSize: 7,
            lineStyle: {width: 2},
            data: [2, 10, 20, 31, 30, 37]
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 550px;
}
</style>
