<template>
  <section class="section">
    <horizontal-bar
      :data="barData"
      labelKey="label"
      :valueKey="['count']"
      :theme="{background: 'transparent'}"
    />
  </section>
</template>

<script>
import {
  HorizontalBar
} from '@byzanteam/graphite'

export default {
  components: {
    HorizontalBar
  },

  data() {
    return {
      barData: [{
        label: '01.28',
        count: 2
      },
      {
        label: '01.29',
        count: 5
      },
      {
        label: '01.30',
        count: 6
      }, {
        label: '01.31',
        count: 6
      }]
    }
  }
}
</script>
