<template>
  <div>
    <radar
      :data="radarData"
      labelKey="label"
      :valueKey="['count']"
      :theme="{background: 'transparent'}"
      :polarAxis="{
        ...polarAxisStyle,
        radiusRange: [0, radarData.reduce((acc, item) => { return item.count >= acc ? item.count : acc }, 0)],
      }"
    />
  </div>
</template>

<script>
import {
  Radar
} from '@byzanteam/graphite'

export default {
  components: {
    Radar
  },

  data() {
    return {
      polarAxisStyle: {
        textStyle: {
          size: 14,
          weight: 300,
          stroke: '#fff'
        },
        angleGridStyle: {
          stroke: '#2e3e57'
        },
        radiusGridStyle: {
          stroke: '#2e3e57'
        }
      },
      radarData: [{
        label: '停产',
        count: '2'
      },
      {
        label: '生产',
        count: '5'
      },
      {
        label: '分别统计企业数量',
        count: '6'
      }]
    }
  }
}
</script>
