<template>
  <section class="section">
    <vis-table
      :headers="tableHeader"
      :data="tableData"
    />
  </section>
</template>

<script>
import axios from 'axios'
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
      tableData: []
    }
  },

  created () {
    axios.get('/3903fe69-2f97-4c36-a079-39806eb1ab41/data').then(({data: {data, schema}}) => {
      this.tableData = data.map(item => ({name: item[0], status: '可能存在不足'}))
    })
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
