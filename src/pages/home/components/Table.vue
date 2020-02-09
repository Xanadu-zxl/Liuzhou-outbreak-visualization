<template>
  <div>
    <div class="tableDate">
      <img src="../../../assets/img/icon.png" alt />
      <span class="span">来自国家卫健委公布的全天疫情数据</span>
    </div>
    <div class="content">
      <table class="table">
        <thead>
          <tr class="tr">
            <th>
              <div>地区</div>
            </th>
            <th>
              <div>确诊</div>
            </th>
            <th>
              <div>治愈</div>
            </th>
            <th>
              <div>死亡</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="city in citys" :key="city.index">
            <td class="td">
              <div class="city">
                <span class="triangle"></span>
                <span>{{city.cityName}}</span>
              </div>
            </td>
            <td class="td1">{{city.affirm}}</td>
            <td class="td2">{{city.cure}}</td>
            <td class="td2">{{city.die}}</td>
          </tr>
          <tr>
            <td colspan="4">
              <table class="VirusTable_1-1-131_3U6wJT">
                <tbody>
                  <tr class="VirusTable_1-1-131_2AH4U9">
                    <td>
                      <a href="#" class="VirusTable_1-1-131_2yUfq-">
                        <div class="VirusTable_1-1-131_AcDK7v">拉萨</div>
                        <div class="VirusTable_1-1-131_2wMlZf">
                          <span class="VirusTable_1-1-131_3V1ugB"></span>
                        </div>
                      </a>
                    </td>
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citys: [
        {
          cityName: '广西',
          affirm: '195',
          cure: '18',
          die: '1'
        },
        {
          cityName: '云南',
          affirm: '140',
          cure: '17',
          die: '-'
        },
        {
          cityName: '测试',
          affirm: '195',
          cure: '18',
          die: '1'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
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

.content {
  .table {
    table-layout: fixed;
    width: 100%;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    border-spacing: 2px 6px;
    font-size: 0.938rem;
    color: #4d5054;
    .tr {
      color: #555;
      font-size: 0.938rem;
      font-weight: 700;

      th {
        text-align: center;
        font-weight: 700;
      }

      th > div {
        position: relative;
        top: 0.2rem;
      }
    }

    .td {
      background-color: #00bec9;
      color: #fff;
      font-weight: 700;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

      .city {
        padding: 0.3125rem 0;
        line-height: 1.25rem;
        box-sizing: border-box;
        padding-left: 0.5rem;
        text-align: left;
        font-weight: 700;

        .triangle {
          width: 9px;
          display: inline-block;
          height: 6px;
          background-image: url(//mms-res.cdn.bcebos.com/mms-res/voicefe/captain/mola/Virus/1.1.129/assets/arrow-white.4e66b9c.png);
          background-repeat: no-repeat;
          background-size: contain;
          margin: 0 0.5rem;
          vertical-align: middle;
          position: relative;
          top: -0.1rem;
        }
      }
    }
  }

  .td1,
  .td2 {
    width: auto;
    background-color: #f5f6f7;
    color: #4d5054;
    font-weight: 700;
  }

  .td2:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
