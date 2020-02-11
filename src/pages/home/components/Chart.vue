<template>
  <div>
    <div class="chart-title">
      <div class="chart-title-badge"></div>
      <span>近日管控人员新增数量统计</span>
      <span class="chart-title-unit">/个</span>
    </div>
    <div class="virus-chart">
      <v-chart :options="epidemicTendencyOptions" />
    </div>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/bar'
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
        legend: {
          show: true,
          data: ['重点人群管控总数', '来自武汉市的市外人员', '来自湖北省（除武汉市）的市外人员', '我市到过武汉市的人员', '我市到过湖北省（除武汉市）的人员', '密切接触者', '我市仍在湖北省出差、休假、旅游、探亲等短时间停留人员'],
          bottom: '10px'
        },
        color: ['#ffaa85', '#d98066', '#b35747', '#8b2e29', '#66050b', '#380206'],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            color: '#333333',
            fontSize: '9px'
          },
          data: ['01.28', '01.29', '01.30', '01.31', '02.01', '02.02'],
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
          name: '个',
          nameTextStyle: {
            color: '#333333',
            fontSize: '9px'
          },
          axisLabel: {color: '#333333',
            fontSize: '9px'
          },
          axisLine: {show: false},
          axisTick: {show: false},
          splitLine: {
            show: true,
            lineStyle: {
              color: '#666666',
              type: 'dotted'
            }
          }
        }],
        series: [
          {
            type: 'bar',
            name: '重点人群管控总数',
            stack: '人群',
            barWidth: '15',
            data: [10, 20, 34, 41, 42, 30]
          },
          {
            type: 'bar',
            name: '来自武汉市的市外人员',
            stack: '人群',
            barWidth: '15',
            data: [2, 10, 12, 31, 30, 12]
          },
          {
            type: 'bar',
            name: '来自湖北省（除武汉市）的市外人员',
            stack: '人群',
            barWidth: '15',
            data: [12, 10, 20, 31, 30, 17]
          },
          {
            type: 'bar',
            name: '我市到过武汉市的人员',
            stack: '人群',
            barWidth: '15',
            data: [2, 13, 20, 31, 30, 37]
          },
          {
            type: 'bar',
            name: '我市到过湖北省（除武汉市）的人员',
            stack: '人群',
            barWidth: '15',
            data: [20, 10, 23, 31, 30, 37]
          },
          {
            type: 'bar',
            name: '密切接触者',
            stack: '人群',
            barWidth: '15',
            data: [15, 10, 40, 1, 30, 60]
          },
          {
            type: 'bar',
            name: '我市仍在湖北省出差、休假、旅游、探亲等短时间停留人员',
            stack: '人群',
            barWidth: '15',
            data: [15, 10, 40, 19, 30, 60]
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.chart-title {
  color: #333333;
  font-size: .75rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  .chart-title-badge {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border: .15rem solid red;
    margin-right: .5rem;
  }

  .chart-title-unit {
    color: #666666;
    font-size: .45rem;
    margin-left: 1rem;
  }
}

.echarts {
  width: 100%;
  height: 550px;
}
</style>
