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

Echarts.registerMap('LZ', Liuzhou);
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
              show: true
            },
            data: [
              {name: '洛埠镇', value: 4},
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
