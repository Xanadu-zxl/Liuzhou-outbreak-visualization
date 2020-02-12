<template>
  <header class="header">
    <div class="top-content">
      <div class="logo-word">
        <img src="../../../assets/img/logo.png" alt="word" class="banner-logo">
        <img src="../../../assets/img/banner-word.png" alt="word" class="banner-word">
      </div>
    </div>

    <div class="digital-container">
        <div class="swipe-text">*向右滑动显示更多</div>
        <div class="left-card">
        <div class="left-card-container">
          <div class="digital-title-left">昨日<span style="color: #333333;">+38</span></div>
          <div class="digital-content-left">{{ total }}<span class="digital-suffix-left">人</span></div>
          <div class="digital-header-left">重点人群管控</div>
        </div>
      </div>
      <div class="right-card">
        <div style="display: flex; flex-grow: 1">
          <div id="from-wuhan" class="digital-wuhan">
            <div class="from-to">
              <div class="digital-title-right-top">昨日<span>+28</span></div>
              <div class="digital-content-right">82<span class="digital-suffix-right">人</span></div>
              <div class="digital-header-right-top">来自武汉市的市外人员</div>
            </div>
            <div class="from-to">
              <div class="digital-title-right">昨日<span>+27</span></div>
              <div class="digital-content-right">62<span class="digital-suffix-right">人</span></div>
              <div class="digital-header-right">来自湖北省（除武汉市）的人员</div>
            </div>
          </div>
          <div id="to-wuhan" class="digital-wuhan">
            <div class="from-to">
               <div class="digital-title-right-top">昨日<span>+2</span></div>
               <div class="digital-content-right">38<span class="digital-suffix-right">人</span></div>
                <div class="digital-header-right-top">到过武汉市的人员</div>
            </div>
            <div  class="from-to">
              <div class="digital-title-right">昨日<span>+12</span></div>
              <div class="digital-content-right">132<span class="digital-suffix-right">人</span></div>
              <div class="digital-header-right">到过湖北省（除武汉市）的人员</div>
            </div>
          </div>
          <div id="visit" class="digital-wuhan">
            <div class="from-to">
              <div class="digital-title-right-top">昨日<span>+28</span></div>
              <div class="digital-content-right">45<span class="digital-suffix-right">人</span></div>
              <div class="digital-header-right-top">密切接触者</div>
            </div>
            <div class="from-to">
              <div class="digital-title-right">昨日<span>+7</span></div>
              <div class="digital-content-right">112<span class="digital-suffix-right">人</span></div>
              <div class="digital-header-right">仍在湖北省出差、休假、旅游、探亲人员</div>
            </div>
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
      total: 1139,
    }
  }
}
</script>

<style lang="less" scoped>
.header {
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
}

  .top-content{
    height:9.7rem;
    background-position: bottom right;
    background-repeat:no-repeat;
    background-size: auto 100%;
    background-image: url("../../../assets/img/banner-img.png");
    padding: 0 4%;
  }
    @media screen and (min-width: 900px) {
    .top-content{
      background-image: url("../../../assets/img/doctor.png");
      background-size: auto 124%;
      background-position: 100% 40%;
    }
}
  .logo-word {
    display: flex;
    flex-flow: column;
  }
  .banner-bg {
    max-height: 9.7rem;
  }
  .banner-word {
    margin-top: 1.9rem;
    max-width: 9.65rem;
    max-height: 4.05rem;
  }
  .banner-logo {
    margin-top: 0.95rem;
    max-width: 3.75rem;
    max-height: 1.1rem;
  }
  .digital-container {
    position: relative;
    max-width: 39rem;
    display: flex;
  }
  .left-card {
    background-image: linear-gradient(to right, #F1D7D3 , #FFFFFF);
    border-radius: 0 0.7rem 0.7rem 0;
    margin-right: 2%;
    width: 35.9% ;
    min-width: 135px;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow:0 0.1rem 0.25rem #22528033;
  }
  .left-card-container {
    display: flex;
    flex-flow: column;
  }
  .digital-content-left {
    line-height: 1.2;
    color: #BB3939;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .digital-suffix-left {
    color: #333333;
    font-size: 0.55rem;
    font-weight: 400;
    margin-left: .2rem;
  }
  .digital-header-left {
    margin-bottom: 2.3rem;
    color:#333333;
    font-size: 0.75rem;
    font-weight: 400;
  }
  .digital-title-left{
    margin-top: 2.3rem;
    color:#999999;
    font-size: 0.55rem;
    font-weight: 400;
    text-align: left;
  }
  .right-card{
    background-image: linear-gradient(to right, #FFF9ED , #FFFFFF);
    border-radius:0.7rem 0 0 0.7rem;
    flex-grow: 1;
    display: flex;
    position: relative;
    box-shadow:0 0.1rem 0.25rem #22528033;
    overflow-x: scroll;
  }
  .swipe-text {
    position: absolute;
    z-index: 2;
    right: 0.65rem;
    top: 0.3rem;
    color:#999999;
    font-size: 9px !important;
    font-weight: 400;
    text-align: left;
  }
  .digital-wuhan {
    display: flex;
    flex-flow: column;
    margin-left: 0.65rem;
    margin-right: 0.65rem;
    width: 11.65rem;
  }
  .digital-hubei {
    display: flex;
    flex-flow: column;
    margin-left: 0.65rem;
    margin-right: 0.65rem;
    width: 11.65rem;
  }
  .digital-suffix-right {
    color: #999999;
    font-size: 0.55rem;
    font-weight: 400;
    margin-left: .2rem;
  }
  .digital-content-right {
    line-height: 1.2;
    color: #E2951C;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .digital-header-right-top {
    padding-bottom: 0.4rem;
    color: #333333;
    font-size: 0.6rem;
    font-weight: 400;
    border-bottom: 1px solid #DEDEDE;
    white-space: nowrap;
  }
  .digital-header-right {
    color: #333333;
    font-size: 0.6rem;
    font-weight: 400;
    white-space: nowrap;
  }
  .digital-title-right-top {
    margin-top: 0.85rem;
    color:#999999;
    font-size: 9px !important;
    font-weight: 400;
    text-align: left;
  }
  .digital-title-right {
      padding-top: 0.4rem;
      color:#999999;
      font-size: 9px !important;
      font-weight: 400;
      text-align: left;
  }

</style>
