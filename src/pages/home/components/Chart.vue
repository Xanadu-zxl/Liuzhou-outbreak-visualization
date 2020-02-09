<template>
  <div>
    <div class="virus-chart">
      <v-chart :options="epidemicTendencyOptions" />
      <v-chart :options="epidemicTendencyOptions" />
      <v-chart :options="mapOptions" />
    </div>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/visualMap'
import Liuzhou from '../../../resources/liuzhou.json'
import Luobu from '../../../resources/luobu.json'
import Luorong from '../../../resources/luorong.json'

Echarts.registerMap('LZ', Liuzhou);
Echarts.registerMap('LB', Luobu);
Echarts.registerMap('LR', Luorong);

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
      },
      mapOptions: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c}'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 1,
          max: 20,
          type: 'piecewise',
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#ffaa85', '#660309']
          }
        },
        series: [
          {
            name: '柳州',
            type: 'map',
            mapType: 'LZ',
            label: {
              show: false
            },
            data: [
              {name: '三江侗族自治县', value: 0},
              {name: '融水苗族自治县', value: 0},
              {name: '融安县', value: 0},
              {name: '柳城县', value: 0},
              {name: '鹿寨县', value: 0},
              {name: '柳北', value: 0},
              {name: '鱼峰区', value: 0},
              {name: '柳南区', value: 0},
              {name: '柳江区', value: 0}
            ]
          },
          {
            name: '洛埠镇',
            type: 'map',
            mapType: 'LB',
            label: {
              show: true
            },
            data: [
              {name: '洛埠镇', value: 4}
            ]
          },
          {
            name: '雒容镇',
            type: 'map',
            mapType: 'LR',
            label: {
              show: true
            },
            data: [
              {name: '雒容镇', value: 12}
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.virus-chart img {
  width: 100%;
  height: 100%;
}

.echarts {
  width: 100%;
  height: 550px;
}
</style>
