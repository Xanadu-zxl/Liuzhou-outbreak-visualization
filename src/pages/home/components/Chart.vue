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
import 'echarts/lib/component/legend'

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
        grid: {
          width: '90%',
          bottom: 100
        },
        legend: {
          show: true,
          data: ['重点人群管控总数', '来自武汉市的市外人员', '来自湖北省（除武汉市）的市外人员', '我市到过武汉市的人员', '我市到过湖北省（除武汉市）的人员', '密切接触者', '我市仍在湖北省出差、休假、旅游、探亲等短时间停留人员'],
          bottom: '10rem'
        },
        color: ['#39aabb', '#955e42', '#bb3939', '#cecccc', '#cde7b0', '#918b84'],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            color: '#333333',
            fontSize: '9rem'
          },
          data: ['01.28', '01.29', '01.30', '01.31', '02.01', '02.02', '02.03', '02.04', '02.05'],
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
            fontSize: '9rem'
          },
          axisLabel: {color: '#333333',
            fontSize: '9rem'
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
            name: '来自武汉市的市外人员',
            stack: '人群',
            barWidth: '10',
            data: [2, 10, 12, 31, 30, 12, 12, 3, 9]
          },
          {
            type: 'bar',
            name: '来自湖北省（除武汉市）的市外人员',
            stack: '人群',
            barWidth: '10',
            data: [12, 10, 20, 31, 30, 17, 12, 3, 9]
          },
          {
            type: 'bar',
            name: '我市到过武汉市的人员',
            stack: '人群',
            barWidth: '10',
            data: [2, 13, 20, 31, 30, 37, 12, 3, 9]
          },
          {
            type: 'bar',
            name: '我市到过湖北省（除武汉市）的人员',
            stack: '人群',
            barWidth: '10',
            data: [20, 10, 23, 31, 30, 37, 12, 3, 9]
          },
          {
            type: 'bar',
            name: '密切接触者',
            stack: '人群',
            barWidth: '10',
            data: [15, 10, 40, 1, 30, 60, 12, 3, 9]
          },
          {
            type: 'bar',
            name: '我市仍在湖北省出差、休假、旅游、探亲等短时间停留人员',
            stack: '人群',
            barWidth: '10',
            data: [15, 10, 40, 19, 30, 60, 12, 3, 9]
          }
        ]
      }
    }
  },

  mounted () {
    if (document.body.clientWidth <= 375) {
      this.epidemicTendencyOptions.grid.bottom = 180
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
    border: .2rem solid #39aabb;
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
  height: 27.5rem;
}
</style>
