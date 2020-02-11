<template>
  <header class="header">
    <div class="icon">
      <img src="http://fs.yqfw.cdyoue.com/FlC0PoDMaq2GNGrP2IzDzlUBOvVw" alt />
      <span class="city">
        <span>柳州</span>
        <i class="xsj"></i>
      </span>
    </div>
    <h3 class="h3">新型冠状病毒肺炎</h3>
    <h1 class="h1">疫情实时大数据报告</h1>
    <div class="visit">共 {{msg}} 人次已浏览</div>
    <div class="digital-container">
      <div class="left-card">
        <div class="left-card-container">
          <div class="digital-title-left">昨日<span style="color: #333333">+38人</span></div>
          <div class="digital-content-left">{{ total }}<span class="digital-suffix-left">人</span></div>
          <div class="digital-header-left">重点人群管控</div>
        </div>
      </div>
      <div class="right-card">
        <div class="digital-wuhan">
          <div class="from-to">
            <div class="digital-title-right">昨日<span style="color: #333333">+28人</span></div>
            <div class="digital-content-right">82<span class="digital-suffix-left">人</span></div>
            <div class="digital-header-right">来自武汉市的市外人员</div>
          </div>
          <div class="from-to">
            <div class="digital-title-right">昨日<span style="color: #333333">+28人</span></div>
            <div class="digital-content-right">82<span class="digital-suffix-left">人</span></div>
            <div class="digital-header-right">到过武汉市的市外人员</div>
          </div>
         </div>
         <div class="digital-hubei">
           <div class="from-to">
             <div class="digital-title-right">昨日<span style="color: #333333">+28人</span></div>
             <div class="digital-content-right">82<span class="digital-suffix-left">人</span></div>
             <div class="digital-header-right">来自湖北省（除武汉市）的的人员</div>
           </div>
           <div class="from-to">
             <div class="digital-title-right">昨日<span style="color: #333333">+28人</span></div>
             <div class="digital-content-right">82<span class="digital-suffix-left">人</span></div>
             <div class="digital-header-right">到过湖北省（除武汉市）的人员</div>
           </div>
          </div>
       </div>
    </div>
  </header>
</template>
<script>
export default {

  data() {
    return {
      msg: '1,989,496,307',
      total: 1139
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  margin-top: 7%;
  margin-left: 17px;
  background-image: url('../../../assets/img/headerBg.png');
  background-size: contain;
  position: relative;
  .icon {
    width: 120px;

    img {
      margin-top: 20px;
      width: 100%;
    }

    .city {
      position: absolute;
      cursor: pointer;
      top: 20px;
      right: 17px;
      display: inline-block;
      max-width: 83px;
      height: 28px;
      padding: 0 8px;
      line-height: 28px;
      opacity: 0.76;
      background: #e5feff;
      border-radius: 51px;
      text-align: center;
      font-size: 14px;
      color: #104345;

      span {
        max-width: 68px;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
      }

      .xsj {
        display: inline-block;
        width: 10px;
        height: 28px;
        background-image: url(//mms-res.cdn.bcebos.com/mms-res/voicefe/captain/mola/Virus/1.1.129/assets/arrow-expand.62b1a23.svg);
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 5px;
      }
    }
  }
  .h3 {
    margin: 25px 0px;
    font-size: 0.875rem;
    color: #c4faff;
    letter-spacing: 0.125rem;
  }

  .h1 {
    margin: 10px 0px;
    font-size: 2rem;
    height: 2rem;
    line-height: 2rem;
    color: #c4faff;
  }

  .visit {
    display: inline-block;
    height: 1.4375rem;
    line-height: 1.4375rem;
    padding: 0 0.625rem;
    background-color: rgba(9, 148, 167, 0.5);
    border-radius: 0.71875rem;
    font-size: 0.6875rem;
    color: #fff;
  }
}
  .digital-container {
    max-width: 78rem;
    display: flex;
  }
  .left-card {
    background-image: linear-gradient(to right, #F1D7D3 , #FFFFFF);
    border-radius: 0 1.4rem 1.4rem 0;
    margin-right: 2%;
    width: 35.9% ;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    box-shadow:0 0.2rem 0.3rem #aaaaaa;
  }
  .left-card-container {
    display: flex;
    flex-flow: column;
  }
  .digital-content-left {
    color: #BB3939;
    font-size: 3rem;
    font-weight: 600;
  }
  .digital-suffix-left {
    color: #333333;
    font-size: 1.1rem;
    font-weight: 400;
  }
  .digital-header-left {
    color:#333333;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .digital-title-left{
    color:#666666;
    font-size: 1.1rem;
    font-weight: 400;
    text-align: left;
  }
  .right-card{
    background-image: linear-gradient(to right, #FFF9ED , #FFFFFF);
    border-radius:14px 0 0 14px;
    width: 62.1%;
    display: flex;
    flex-flow: column;
  }
  .digital-wuhan {
    display: flex;
    justify-content: space-between;
  }
  .digital-hubei {
    display: flex;
    justify-content: space-between;
  }
  .digital-suffix-right {
    color: #666666;
    font-size: 11px;
    font-weight: 400;
  }
  .digital-content-right {
    color: #BB3939;
    font-size: 24px;
    font-weight: 600;
  }
  .digital-header-right {
    color: #333333;
    font-size: 12px;
    font-weight: 600;
  }
  .digital-title-right {
    color:#999999;
    font-size: 9px;
    font-weight: 400;
    text-align: left;
  }
html,body{
    font-size: 62.5%;
}
</style>
