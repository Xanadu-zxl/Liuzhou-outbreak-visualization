<template>
  <div>
    <div class="virus-map">
      <v-chart :options="mapOptions" />
    </div>
  </div>
</template>

<script>
import Echarts from 'vue-echarts'
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
          pieces: [
            {min: 10000},
            {min: 1000, max: 9999},
            {min: 100, max: 999},
            {min: 10, max: 99},
            {min: 1, max: 9}
          ],
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
.echarts {
  width: 100%;
  height: 550px;
}
</style>
