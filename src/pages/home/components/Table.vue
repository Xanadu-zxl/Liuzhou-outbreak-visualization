<template>
  <div>
    <div class="table">
      <div class="table-header">
        <i></i>
        <span class="span">重点管控人员表格统计</span>
      </div>

      <table class="table-main">
        <el-table
          stripe
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
          stripe
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
          id: 1,
          genre: '雒容镇',
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
              number: '81'
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
              number: '101'
            },
            {
              id: 17,
              genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
              number: '88'
            },
            {
              id: 18,
              genre: '洛埠街社区',
              number: '',
              children: [
                {
                  id: 181,
                  genre: '人群类型',
                  number: '数量'
                },
                {
                  id: 182,
                  genre: '重点人群管控总数',
                  number: '478'
                },
                {
                  id: 183,
                  genre: '来自武汉市的市外人',
                  number: '82'
                },
                {
                  id: 184,
                  genre: '来自湖北省（除武汉市）的市外人员',
                  number: '38'
                },
                {
                  id: 185,
                  genre: '到过武汉市的人员',
                  number: '76'
                },
                {
                  id: 186,
                  genre: '密切接触者',
                  number: '11'
                },
                {
                  id: 187,
                  genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
                  number: '88'
                }
              ]
            },
            {
              id: 19,
              genre: '银欧社区',
              number: '',
              children: [
                {
                  id: 191,
                  genre: '人群类型',
                  number: '数量'
                },
                {
                  id: 192,
                  genre: '重点人群管控总数',
                  number: '478'
                },
                {
                  id: 193,
                  genre: '来自武汉市的市外人',
                  number: '82'
                },
                {
                  id: 194,
                  genre: '来自湖北省（除武汉市）的市外人员',
                  number: '38'
                },
                {
                  id: 195,
                  genre: '到过武汉市的人员',
                  number: '76'
                },
                {
                  id: 196,
                  genre: '密切接触者',
                  number: '12'
                },
                {
                  id: 197,
                  genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
                  number: '88'
                }
              ]
            },
            {
              id: 20,
              genre: '正和社区',
              number: '',
              children: [
                {
                  id: 201,
                  genre: '人群类型',
                  number: '数量'
                },
                {
                  id: 202,
                  genre: '重点人群管控总数',
                  number: '478'
                },
                {
                  id: 203,
                  genre: '来自武汉市的市外人',
                  number: '82'
                },
                {
                  id: 204,
                  genre: '来自湖北省（除武汉市）的市外人员',
                  number: '38'
                },
                {
                  id: 205,
                  genre: '到过武汉市的人员',
                  number: '76'
                },
                {
                  id: 206,
                  genre: '密切接触者',
                  number: '12'
                },
                {
                  id: 207,
                  genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
                  number: '88'
                }
              ]
            },
            {
              id: 21,
              genre: '洛埠村',
              number: '',
              children: [
                {
                  id: 211,
                  genre: '人群类型',
                  number: '数量'
                },
                {
                  id: 212,
                  genre: '重点人群管控总数',
                  number: '478'
                },
                {
                  id: 213,
                  genre: '来自武汉市的市外人',
                  number: '82'
                },
                {
                  id: 214,
                  genre: '来自湖北省（除武汉市）的市外人员',
                  number: '38'
                },
                {
                  id: 215,
                  genre: '到过武汉市的人员',
                  number: '76'
                },
                {
                  id: 216,
                  genre: '密切接触者',
                  number: '12'
                },
                {
                  id: 217,
                  genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
                  number: '88'
                }
              ]
            },
            {
              id: 22,
              genre: '洛埠街社区',
              number: '',
              children: [
                {
                  id: 221,
                  genre: '人群类型',
                  number: '数量'
                },
                {
                  id: 222,
                  genre: '重点人群管控总数',
                  number: '478'
                },
                {
                  id: 223,
                  genre: '来自武汉市的市外人',
                  number: '82'
                },
                {
                  id: 224,
                  genre: '来自湖北省（除武汉市）的市外人员',
                  number: '38'
                },
                {
                  id: 225,
                  genre: '到过武汉市的人员',
                  number: '76'
                },
                {
                  id: 226,
                  genre: '密切接触者',
                  number: '12'
                },
                {
                  id: 227,
                  genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
                  number: '88'
                }
              ]
            },
            {
              id: 23,
              genre: '下窑村',
              number: '',
              children: [
                {
                  id: 231,
                  genre: '人群类型',
                  number: '数量'
                },
                {
                  id: 232,
                  genre: '重点人群管控总数',
                  number: '478'
                },
                {
                  id: 233,
                  genre: '来自武汉市的市外人',
                  number: '82'
                },
                {
                  id: 234,
                  genre: '来自湖北省（除武汉市）的市外人员',
                  number: '38'
                },
                {
                  id: 235,
                  genre: '到过武汉市的人员',
                  number: '76'
                },
                {
                  id: 236,
                  genre: '密切接触者',
                  number: '12'
                },
                {
                  id: 237,
                  genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
                  number: '88'
                }
              ]
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
            },
            {
              id: 38,
              genre: '雒容社区',
              number: '',
              children: [
                {
                  id: 381,
                  genre: '人群类型',
                  number: '数量'
                },
                {
                  id: 382,
                  genre: '重点人群管控总数',
                  number: '478'
                },
                {
                  id: 383,
                  genre: '来自武汉市的市外人',
                  number: '82'
                },
                {
                  id: 384,
                  genre: '来自湖北省（除武汉市）的市外人员',
                  number: '38'
                },
                {
                  id: 385,
                  genre: '到过武汉市的人员',
                  number: '76'
                },
                {
                  id: 386,
                  genre: '密切接触者',
                  number: '33'
                },
                {
                  id: 387,
                  genre: '仍在湖北省出差、休假、旅游、谈情等短时间停留人员',
                  number: '88'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
// icon
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

// 去除底边狂
.el-table::before {
  height: 0px;
}

.el-table th.is-leaf {
  border: 0px;
}

.el-table td.is-left .cell {
  height: 1rem;
  margin: 0.5rem 0rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-table__indent {
  padding: 0px !important;
}

.el-table__row--level-0 td:first-child {
  color: black;
  font-weight: 500;
  font-size: 0.8rem;
}

// .el-table__row--level-1 td:nth-child(1) {
//   color: red !important;
//   font-size: 14px !important;
// }
.el-table {
  font-size: 0.7rem;

  .cell {
    padding: 0px;
  }
  .is-center {
    font-weight: 500;
    color: #666666;
  }

  // 三级表单字体
  .el-table__row--level-2 td.is-left .cell,
  .el-table__row--level-2 td.is-center .cell {
    font-size: 0.6rem;
    height: 20px;
    margin: 0.375rem 0rem;
  }

  // 斑马纹
  tr.el-table__row--striped td {
    background: #fff !important;
  }

  .el-table__body td {
    background: rgba(190, 190, 190, 0.08) !important;
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
}

// size+weight
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
    .el-table__expand-icon {
      font-size: 0.6rem;
    }
  }
  tbody tr:nth-child(57) {
    color: #39aabb !important;
    display: grid;
    margin-top: 6px;
    margin-right: -64px;
    border-bottom-left-radius: 34px;
    .is-left {
      border-bottom-left-radius: 0.2rem;
    }
    .el-table__expand-icon {
      font-size: 0.6rem;
    }
  }
  // 三级表单icon+标题size
  .el-table__row--level-1 {
    font-size: 0.7rem;
  }
  .el-table__expand-icon {
    font-size: 0.25rem;
  }
}
</style>
