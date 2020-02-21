<template>
  <section class="section">
    <div class="analyze-chart-title">
      <div class="analyze-chart-title-badge"></div>
      <span>企业防疫情况预警信息</span>
      <div class="analyze-chart-subtitle">因涉及隐私信息保护，企业防疫联系人请在后台进行查阅</div>
    </div>
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
    color: #333333;
    font-size: .65rem !important;
    font-weight: 500;

    th {
      text-align: left;
      height: 2rem;
      padding: .4rem .4rem;
    }
  }

  .table__body {
    height: 21.5rem;
    overflow: scroll;

    tr {
      font-size: .65rem;
      color: #666666;
      font-weight: 400;
      line-height: 1rem;
      text-align: left;

      td:nth-child(1) {
        width: 60%;
        padding: .4rem .4rem;
      }

      td:nth-child(2) {
        width: 40%;
        padding: .4rem .4rem;
      }
    }

    tr:nth-child(even) {
      background-color: rgba(188, 188, 188, .08);
    }

    tr:nth-child(odd) {
      background-color: transparent;
    }
  }
}
</style>
