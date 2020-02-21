<template>
  <section class="section">
    <div class="analyze-chart-title">
      <div class="analyze-chart-title-badge"></div>
      <span>企业防疫情况预警信息</span>
      <div class="analyze-chart-subtitle">因涉及隐私信息保护，企业防疫联系人请在后台进行查阅</div>
    </div>
    <vis-table
      v-if="tableData.length >0"
      :headers="tableHeader"
      :data="tableData"
    />
    <div class="table table--stripe" v-else>
      <div class="table__head">
        <table>
          <thead>
            <tr>
              <th>企业名称</th>
              <th>防疫物资保障状态</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table--empty">
        <div>所有企业防疫物资储备良好</div>
      </div>
    </div>
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
.analyze-chart-title {
  margin-bottom: .4rem;
}

.table.table--stripe {
  table {
    width: 100%;
    table-layout: fixed;
  }

  .table__head {
    color: #333333;
    font-size: .65rem !important;
    font-weight: 500;
    height: 2rem;

    th {
      text-align: left;
      height: 2rem;
      padding-left: .4rem;
    }

    th:nth-child(1) {
      width: 60%;
    }

    th:nth-child(2) {
      width: 40%;
    }
  }

  .table__body {
    height: 21.5rem;
    overflow-x: hidden;
    overflow-y: scroll;

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

    .table__cell--scroll {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .table--empty {
    height: 1.75rem;
    background-color: rgba(188, 188, 188, .08);
    font-size: .65rem;
    color: #0c82ec;
    line-height: 1.75rem;
    text-align: center;
  }
}
</style>
