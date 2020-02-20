<template>
  <section class="section">
    <div class="analyze-chart-title">
      <div class="analyze-chart-title-badge"></div>
      <span>已填报复工信息企业生产情况</span>
      <span class="analyze-chart-title-unit">/个</span>
    </div>
    <donut
      :data="donutData"
      labelKey="label"
      :valueKey="['count']"
      :theme="{background: 'transparent'}"
    />
  </section>
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
