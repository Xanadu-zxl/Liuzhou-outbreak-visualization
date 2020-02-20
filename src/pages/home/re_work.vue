<template>
<div></div>
</template>

<script>
import {
  Rose,
  Donut,
  HorizontalBar
} from '@byzanteam/graphite'
import {
  DigitalRoll,
  BrickTabs
} from '@byzanteam/vis-components'
export default {
  components: {
    BrickTabs,
    Rose,
    Donut,
    DigitalRoll,
    HorizontalBar
  },
  data () {
    return {
      tabNavs: [
        {
          uuid: 1,
          label: '企业复工情况分析'
        },
        {
          uuid: 2,
          label: '重点人群管控'
        },
        {
          uuid: 3,
          label: '企业复工情况分析'
        },
        {
          uuid: 4,
          label: '重点人群管控'
        }
      ],
      tabCurrent: {
        uuid: 1,
        label: '企业复工情况'
      }
    }
  }
}
</script>

<style scoped>

</style>
