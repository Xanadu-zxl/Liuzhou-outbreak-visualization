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
          row-key="id"
          :tree-props="{children:
             'children', hasChildren: 'hasChildren'}"
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
      <table class="table-main2">
        <el-table
          :show-header="false"
          class="el-table el-table2"
          :data="tableData2"
          style="width: 95%"
          row-key="id"
          :tree-props="{children:
            'children', hasChildren: 'hasChildren'}"
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
        }
      ],
      tableData2: [
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
.el-icon-arrow-right:before {
  content: '\e791';
  height: 0.4rem;
  width: 0.4rem;
}
.el-table [class*='el-table__row--level'] .el-table__expand-icon {
  display: inline-block;
  width: 0.4rem;
  line-height: 0.4rem;
  height: 0.4rem;
  text-align: center;
  margin: 0px 0.6rem 0px 0.4rem;
}

.table {
  margin-left: 4%;
  margin-right: 4%;
  background: #fff;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  padding: 0rem 0.5rem 1rem;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.1);

  .table-header {
    padding: 1.25rem 0px 1rem;
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
      font-weight: 500;
      height: 0.8125rem;
      padding-bottom: 0.25rem;
      padding-left: 0.25rem;
      display: inline-block;
      line-height: 0.8125rem;
      letter-spacing: 0.5px;
      vertical-align: middle;
    }
  }
  .table-main {
    display: flex;
    width: 100%;
  }

  .table-main2 {
    display: flex;
    margin-top: 0.3rem;
    width: 100%;
  }
}
.el-table th,
.el-table td {
  padding: 1px 0px;
}
.el-table::before {
  height: 0px;
}

.el-table td.is-left .cell {
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1rem;
  margin: 0.5rem 0rem;
}

.el-table__indent {
  margin-left: -1.1rem;
}

.el-table th.is-leaf {
  border: 0px;
}
.el-table__row--level-0 td {
  background: #999999;
}

.el-table__row--level-0 td:first-child {
  color: black;
  font-weight: 500;
  font-size: 0.7rem;
}
.el-table__row--level-0 td {
  font-weight: 700;
  background: #f5f6f7;
  background-clip: content-box;
}

.el-table {
  .cell {
    padding: 0px;
  }
  .is-center {
    font-weight: 500;
    color: #666666;
  }
  tbody tr:nth-child(1) {
    height: 2rem;
    .is-left {
      border-top-left-radius: 0.2rem;
    }
    .is-center {
      border-top-right-radius: 0.2rem;
    }
  }
  tbody tr:nth-child(2) {
    .is-left,
    .is-center {
      color: #333;
      background: #fff;
      font-weight: 500;
    }
  }
  tbody tr:nth-child(3) {
    .is-left,
    .is-center {
      background: rgba(190, 190, 190, 0.08);
    }
  }
  tbody tr:nth-child(5) {
    .is-left,
    .is-center {
      background: rgba(190, 190, 190, 0.08);
    }
  }
  tbody tr:nth-child(7) {
    .is-left,
    .is-center {
      background: rgba(190, 190, 190, 0.08);
    }
  }
  tbody tr:nth-child(10) {
    .is-left,
    .is-center {
      color: #333;
      background: #fff;
      font-weight: 500;
    }
  }
  tbody tr:nth-child(11) {
    .is-left,
    .is-center {
      background: rgba(190, 190, 190, 0.08);
    }
  }
  tbody tr:nth-child(13) {
    .is-left,
    .is-center {
      background: rgba(190, 190, 190, 0.08);
    }
  }
  tbody tr:nth-child(15) {
    .is-left,
    .is-center {
      background: rgba(190, 190, 190, 0.08);
    }
  }
}

.el-table__row--level-1 .td:first-child {
  color: #00bec9;
  background: #f4f5f6;
  font-weight: 700;
}
.el-table td.is-center {
  font-weight: 500;
  font-size: 0.7rem;
}

.el-table td,
.el-table th.is-leaf {
  border: 0px;
}

.el-table2 {
  margin: 0px 0.9rem;

  tbody tr:nth-child(1) {
    .is-left {
      border-top-left-radius: 0.2rem;
    }
    .is-center {
      border-top-right-radius: 0.2rem;
    }
  }
  tbody tr:nth-child(9) {
    .is-left {
      border-bottom-left-radius: 0.2rem;
    }
    .is-center {
      border-bottom-right-radius: 0.2rem;
    }
  }
}
</style>
