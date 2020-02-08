<template>
  <section class="section">
    <home-nav></home-nav>
    <div id="ptab-0">
      <h2 class="h2">国内疫情</h2>
      <p>
        <span>更新至 2020.02.07 14:59</span>
        <span class="span">
          <img src="../../../assets/img/icon1.png" />
          数据说明
        </span>
      </p>

      <div class="data">
        <div class="table">
          <div>
            <div class="num red">31224</div>
            <div class>确诊病例</div>
            <div class="ayer">
              昨日
              <span class="red">+3151</span>
            </div>
          </div>
          <div>
            <div class="num yellow">26359</div>
            <div class>疑似病例</div>
            <div class="ayer">
              昨日
              <span class="yellow">+4833</span>
            </div>
          </div>
          <div>
            <div class="num blue">1592</div>
            <div class>治愈病例</div>
            <div class="ayer">
              昨日
              <span class="blue">+389</span>
            </div>
          </div>
          <div>
            <div class="num black">637</div>
            <div class>死亡病例</div>
            <div class="ayer">
              昨日
              <span class="black">+73</span>
            </div>
          </div>
        </div>
      </div>

      <div class="icon">
        <a class="iconA" href>
          <img
            src="https://mms-res.cdn.bcebos.com/mms-res/voicefe/captain/images/ea36e628ea60507f5d928abc1ed0da87.png?size=90*90"
          />
          <span>同乘查询</span>
        </a>
        <a class="iconA" href>
          <img
            src="https://mms-res.cdn.bcebos.com/mms-res/voicefe/captain/images/dad9e0446d0931d9cc13eb624452d0c9.png?size=90*90"
          />
          <span>确诊小区</span>
        </a>
        <a class="iconA" href>
          <img
            src="https://mms-res.cdn.bcebos.com/mms-res/voicefe/captain/images/7f557a639b10f8d96c2d2ba8191e39af.png?size=90*90"
          />
          <span>免费义诊</span>
        </a>
        <a class="iconA" href>
          <img
            src="https://mms-res.cdn.bcebos.com/mms-res/voicefe/captain/images/b65481b18e8b605f3d7877f6a083cb48.png?size=90*90"
          />
          <span>祝福武汉</span>
        </a>
      </div>
      <home-map></home-map>
      <home-chart></home-chart>
      <Home-table></Home-table>
    </div>
  </section>
</template>

<script>
import HomeNav from './Nav'
import HomeMap from './Map'
import HomeTable from './Table'
import HomeChart from './Chart'

export default {
  name: 'Home',
  components: {
    HomeTable,
    HomeNav,
    HomeMap,
    HomeChart
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: #fff;
  border-radius: 0.625rem;
  margin: 1rem 0 1.5rem;
  padding: 0.917rem 1.0625rem 1.875rem;
}

#ptab-0 {
  .h2 {
    margin-top: 20px;
    font-size: 1.1875rem;
    height: 1.1875rem;
    line-height: 1.1875rem;
    font-weight: 700;
    vertical-align: middle;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-bottom: 0.625rem;
  }

  p {
    align-items: center;
    color: #999;
    font-size: 0.8125rem;
    height: 0.8125rem;
    line-height: 0.8125rem;
    vertical-align: middle;
  }

  p .span {
    float: right;

    img {
      width: 10px;
    }
  }

  .data {
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    padding: 0.9375rem 0;
    background: #f5f6f7;
    border-radius: 0.31rem;
    white-space: nowrap;
    font-size: 0.938rem;
    color: #333;
  }

  .table {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .table .num {
    font-size: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .table .red {
    color: #e83132;
  }
  .table .yellow {
    color: #ec9217;
  }
  .table .blue {
    color: #10aeb5;
  }

  .table .black {
    color: #4d5054;
  }

  .table .ayer {
    font-size: 0.75rem;
    height: 0.75rem;
    line-height: 0.75rem;
    margin-top: 0.5rem;
    color: #999;
  }

  .icon {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.875rem;
    margin-top: 1.875rem;
    text-align: center;

    .iconA img {
      width: 1.875rem;
      height: 1.875rem;
    }

    .iconA span {
      display: block;
      margin-top: 0.875rem;
      font-size: 1rem;
      color: #555;
      text-align: center;
      line-height: 1rem;
    }
  }
}
</style>
