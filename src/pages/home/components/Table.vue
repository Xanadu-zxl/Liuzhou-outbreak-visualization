<template>
  <div>
    <div class="table">
      <div class="table-header">
        <i></i>
        <span class="span">重点管控人员表格统计</span>
      </div>

      <table class="table-main">
        <el-table
          :show-header="false"
          class="el-table"
          :data="tableData"
          style="width: 100%"
          lazy
          stripe
          :load="load"
          row-key="id"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        >
          <el-table-column
            prop="genre"
            label="人群类型"
            width="600px"
            align="left"
            header-align="center"
          ></el-table-column>
          <el-table-column prop="number" label="数量" width="134px" align="center"></el-table-column>
        </el-table>
      </table>
    </div>
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
          genre: '柳东新区',
          number: '0',
          children: [
            {
              id: 11,
              genre: '人群类型',
              number: '数量'
            },
            {
              id: 12,
              genre: '重点人群管控总数',
              number: '478'
            },
            {
              id: 13,
              genre: '来自武汉市的市外人',
              number: '82'
            },
            {
              id: 14,
              genre: '来自湖北省（除武汉市）的市外人员',
              number: '38'
            },
            {
              id: 15,
              genre: '到过武汉市的人员',
              number: '76'
            },
            {
              id: 16,
              genre: '密切接触者',
              number: '102'
            },
            {
              id: 17,
              genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
              number: '88'
            }
          ]
        },
        {
          id: 2,
          genre: '雒容镇',
          number: '0',
          children: [
            {
              id: 21,
              genre: '人群类型',
              number: '数量'
            },
            {
              id: 22,
              genre: '重点人群管控总数',
              number: '478'
            },
            {
              id: 23,
              genre: '来自武汉市的市外人',
              number: '82'
            },
            {
              id: 24,
              genre: '来自湖北省（除武汉市）的市外人员',
              number: '38'
            },
            {
              id: 25,
              genre: '到过武汉市的人员',
              number: '76'
            },
            {
              id: 26,
              genre: '密切接触者',
              number: '102'
            },
            {
              id: 27,
              genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
              number: '88'
            }
          ]
        },
        {
          id: 3,
          genre: '洛埠镇',
          number: '0',
          children: [
            {
              id: 31,
              genre: '人群类型',
              number: '数量'
            },
            {
              id: 32,
              genre: '重点人群管控总数',
              number: '478'
            },
            {
              id: 33,
              genre: '来自武汉市的市外人',
              number: '83'
            },
            {
              id: 34,
              genre: '来自湖北省（除武汉市）的市外人员',
              number: '38'
            },
            {
              id: 35,
              genre: '到过武汉市的人员',
              number: '76'
            },
            {
              id: 36,
              genre: '密切接触者',
              number: '303'
            },
            {
              id: 37,
              genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
              number: '88'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
.table {
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0.917rem 1.0625rem 1.875rem;

  .table-header {
    padding: 20px 0px;

    i {
      width: 5px;
      height: 12px;
      margin-left: 5px;
      border-radius: 6px;
      display: inline-block;
      background: #39aabb;
    }

    .span {
      color: #333;
      font-size: 18px;
      font-weight: 600;
      height: 0.8125rem;
      padding-bottom: 5px;
      padding-left: 0.25rem;
      display: inline-block;
      line-height: 0.8125rem;
      vertical-align: middle;
    }
  }

  .el-table {
    width: 100%;
  }
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table th,
.el-table td {
  padding: 1px 0px;
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
  line-height: 20px;
  padding-bottom: 0.5rem;
}

.el-table th.is-leaf {
  border: 0px;
}

.el-table__row--level-0 td:first-child {
  color: black;
  font-weight: 600;
  font-size: 16px;
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

.el-table td,
.el-table th.is-leaf {
  border: 0px;
}
</style>
