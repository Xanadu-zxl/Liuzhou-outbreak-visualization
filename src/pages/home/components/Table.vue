<template>
  <div>
    <div class="table">
      <div class="table-header">
        <i></i>
        <span class="span">重点管控人员表格统计</span>
      </div>

      <div class="table-container">
        <table class="table-main">
          <el-table
            :show-header="false"
            class="el-table"
            :data="tableData"
            style="width: 100%"
            stripe
            row-key="id"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          >
            <el-table-column
              min-width="80%"
              prop="genre"
              label="人群类型"
              align="left"
              header-align="center"
            ></el-table-column>
            <el-table-column min-width="20%" prop="number" label="数量" align="center"></el-table-column>
          </el-table>
        </table>
      </div>
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
          number: '',
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
              number: '12'
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
          number: '',
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
          number: '',
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
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.917rem 1.0625rem 1.875rem;

  .table-header {
    padding: 1rem 0px;

    i {
      width: 0.25rem;
      height: 0.6rem;
      margin-left: 0.25rem;
      border-radius: 0.3rem;
      display: inline-block;
      background: #39aabb;
    }

    .span {
      color: #333;
      font-size: 0.9rem;
      font-weight: 600;
      height: 0.8125rem;
      padding-bottom: 0.25rem;
      padding-left: 0.25rem;
      display: inline-block;
      line-height: 0.8125rem;
      vertical-align: middle;
    }
  }
  .table-container {
    width: 100%;
    display: flex;
  }

  .table-main {
    flex: 1;
  }
}

.el-table th,
.el-table td {
  padding: 1px 0px;
}

.el-table td.is-left .cell {
  height: 1rem;
  line-height: 1rem;
  margin: 8px 12px;
}

.el-table__indent {
  margin-left: -1.1rem;
}

.el-table th.is-leaf {
  border: 0px;
}

.el-table__row--level-0 td:first-child {
  color: black;
  font-weight: 600;
  font-size: 0.7rem;
}
.el-table__row--level-0 td {
  background: #f5f6f7;
  background-clip: content-box;
  color: #4d5054;
  font-weight: 700;
}

.el-table__row--level-1 .td:first-child {
  color: #00bec9;
  background: #f4f5f6;
  font-weight: 700;
}
.el-table td.is-center {
  font-weight: 600;
  font-size: 14px;
  font-weight: 600;
}

.el-table td,
.el-table th.is-leaf {
  border: 0px;
}
</style>
