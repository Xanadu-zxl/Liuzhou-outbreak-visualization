<template>
  <section class="section">
    <vis-table
      :headers="tableHeader"
      :data="data"
    />
  </section>
</template>

<script>
import { VisTable } from '@byzanteam/vis-components'

export default {
  components: {
    VisTable
  },

  data() {
    return {
      tableHeader: [
        {key: 'name', title: '企业名称'},
        {key: 'status', title: '防疫物资保障状态'}
      ],
      data: [
        {name: 'xxx公司', status: '可能存在不足'}
      ]
    }
  }

}
</script>

<style lang="less">
.table.table--stripe {
  .table__head {
    font-size: .7rem !important;
  }
}
</style>
