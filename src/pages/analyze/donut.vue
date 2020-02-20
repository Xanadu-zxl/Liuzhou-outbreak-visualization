<template>
  <div>
    <donut
      :data="donutData"
      labelKey="label"
      :valueKey="['count']"
      :theme="{background: 'transparent'}"
    />
  </div>
</template>

<script>
import {
  Donut
} from '@byzanteam/graphite'

export default {
  components: {
    Donut
  },

  data() {
    return {
      donutData: [{
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
