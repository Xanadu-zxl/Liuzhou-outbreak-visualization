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
  </header>
</template>

<script>
export default {
  data() {
    return {
      msg: '1,989,496,307'
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
</style>
