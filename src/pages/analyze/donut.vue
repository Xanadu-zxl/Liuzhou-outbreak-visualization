<template>
  <section class="section">
    <div class="analyze-chart-title">
      <div class="analyze-chart-title-badge"></div>
      <span>已填报复工信息企业行业分布</span>
    </div>
    <donut
      :data="donutData"
      labelKey="label"
      :valueKey="['count']"
      :innerRadius="0.55"
      :hideLabel="true"
      :theme="{background: 'transparent'}"
    />
  </section>
</template>

<script>
import axios from 'axios'
import {
  Donut
} from '@byzanteam/graphite'

export default {
  components: {
    Donut
  },

  data() {
    return {
      donutData: []
    }
  },

  created () {
    axios.get('/8a0b6c83-919e-4b12-b921-5e8635f005ce/data').then(({data: {data, schema}}) => {
      this.donutData = data.map((item, index) => {
        return {
          label: item[0],
          count: item[1]
        }
      })
    })
  }
}
</script>
