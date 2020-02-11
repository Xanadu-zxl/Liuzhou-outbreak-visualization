<template>
  <div>
    <div class="tableDate">
      <img src="../../../assets/img/icon.png" alt />
      <span class="span">来自国家卫健委公布的全天疫情数据</span>
    </div>

    <table class="table">
      <el-table
        class="el-table"
        :data="tableData"
        style="width: 100%"
        lazy
        :load="load"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="cityName" label="区域" width="220" align="left" header-align="center"></el-table-column>
        <el-table-column prop="affirm" label="来自武汉" width="70" align="center"></el-table-column>
        <el-table-column prop="cure" label="来自湖北" width="70" align="center"></el-table-column>
        <el-table-column prop="die" label="我市到过武汉" width="70" align="center"></el-table-column>
        <el-table-column prop="die" label="我市到过湖北" width="70" align="center"></el-table-column>
        <el-table-column prop="die" label="密切接触者" width="70" align="center"></el-table-column>
        <el-table-column prop="die" label="仍在湖北人员" width="70" align="center"></el-table-column>
        <el-table-column prop="die" label="重点人群管控总数" width="70" align="center"></el-table-column>
      </el-table>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          cityName: '广西',
          affirm: '195',
          cure: '18',
          die: '1',
          children: [
            {
              id: 11,
              cityName: '柳州',
              affirm: '195',
              cure: '18',
              die: '1'
            },
            {
              id: 12,
              cityName: '柳州',
              affirm: '195',
              cure: '18',
              die: '1'
            }
          ]
        },
        {
          id: 2,
          cityName: '广西',
          affirm: '195',
          cure: '18',
          die: '1',
          children: [
            {
              id: 21,
              cityName: '柳州',
              affirm: '195',
              cure: '18',
              die: '1'
            }
          ]
        }
      ]
    }
  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            cityName: '2016-05-01',
            affirm: '王小虎',
            cure: '111',
            die: '222'
          },
          {
            id: 32,
            cityName: '2016-05-01',
            addirm: '王小虎',
            cure: '111',
            die: '222'
          }
        ])
      }, 1000)
    }
  }
}
</script>

<style lang="less">
.tableDate {
  font-size: 0.8125rem;
  height: 0.8125rem;
  line-height: 0.8125rem;
  margin-bottom: 20px;

  img {
    width: 0.8125rem;
    height: 0.8125rem;
    display: inline-block;
  }

  .span {
    display: inline-block;
    color: #999;
    padding-left: 0.25rem;
    height: 0.8125rem;
    line-height: 0.8125rem;
    vertical-align: middle;
    padding-bottom: 5px;
  }
}

.el-table th,
.el-table td {
  padding: 0 1px;
}

.el-table td.is-left .cell {
  height: 42px;
  line-height: 42px;
}

.is-center .cell {
  border-spacing: 2px 6px;
  font-size: 0.938rem;
  color: #4d5054;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.el-table th.is-leaf {
  border: 0px;
}

.el-table__row--level-0 td:first-child {
  background-color: #00bec9 !important;
  color: #fff;
  font-weight: 700;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
.el-table__row--level-0 td {
  background: #f5f6f7;
  background-clip: content-box;
  color: #4d5054;
  font-weight: 700;
}
.el-table__row--level-0 td:last-child {
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
.el-table__row--level-1 .td:first-child {
  color: #00bec9;
  background: #f4f5f6;
  font-weight: 700;
}
</style>
