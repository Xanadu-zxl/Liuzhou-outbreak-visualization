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
          <tr>
            <td class="td">
              <div class="city">
                <span class="triangle"></span>
                <span>湖北</span>
              </div>
            </td>
            <td class="td1">24953</td>
            <td class="td2">1124</td>
            <td class="td2">699</td>
          </tr>
          <tr>
            <td class="td">
              <div class="city">
                <span class="triangle"></span>
                <span>广东</span>
              </div>
            </td>
            <td class="td1">1095</td>
            <td class="td2">115</td>
            <td class="td2">1</td>
          </tr>
          <tr>
            <td class="td">
              <div class="city">
                <span class="triangle"></span>
                <span>浙江</span>
              </div>
            </td>
            <td class="td1">1048</td>
            <td class="td2">173</td>
            <td class="td2">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
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
