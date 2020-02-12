<template>
  <header class="header">
    <div class="icon">
      <img src="http://fs.yqfw.cdyoue.com/FlC0PoDMaq2GNGrP2IzDzlUBOvVw" alt />
      <span class="city">
        <span>柳州</span>
        <i class="xsj"></i>
      </span>
    </div>

    <div class="digital-container">
      <div class="left-card">
        <div class="left-card-container">
          <div class="digital-title-left">
            昨日
            <span style="color: #333333">+38人</span>
          </div>
          <div class="digital-content-left">
            {{ total }}
            <span class="digital-suffix-left">人</span>
          </div>
          <div class="digital-header-left">重点人群管控</div>
        </div>
      </div>
      <v-touch v-on:swipeleft="swipeLeft" v-on:swiperight="swipeRight" class="right-card">
        <div class="swipe-text">*向右滑动显示更多</div>
        <div v-if="!cardShow" class="digital-wuhan">
          <div class="from-to">
            <div class="digital-title-right-top">
              昨日
              <span style="color: #333333">+28人</span>
            </div>
            <div class="digital-content-right">
              82
              <span class="digital-suffix-left">人</span>
            </div>
            <div class="digital-header-right-top">来自武汉市的市外人员</div>
          </div>
          <div class="from-to">
            <div class="digital-title-right">
              昨日
              <span style="color: #333333">+28人</span>
            </div>
            <div class="digital-content-right">
              82
              <span class="digital-suffix-left">人</span>
            </div>
            <div class="digital-header-right">来自湖北省（除武汉市）的的人员</div>
          </div>
        </div>
        <div v-if="cardShow" class="digital-hubei">
          <div class="from-to">
            <div class="digital-title-right-top">
              昨日
              <span style="color: #333333">+28人</span>
            </div>
            <div class="digital-content-right">
              82
              <span class="digital-suffix-left">人</span>
            </div>
            <div class="digital-header-right">到过武汉市的市外人员</div>
          </div>
          <div class="from-to">
            <div class="digital-title-right">
              昨日
              <span style="color: #333333">+28人</span>
            </div>
            <div class="digital-content-right">
              82
              <span class="digital-suffix-left">人</span>
            </div>
            <div class="digital-header-right">到过湖北省（除武汉市）的人员</div>
          </div>
        </div>
      </v-touch>
    </div>
  </header>
</template>
<script>
// import VueTouch from 'vue-touch';
// eslint-disable-next-line no-undef
// Vue.use(VueTouch, { name: 'v-touch' });
export default {
  // components: {
  //   VueTouch
  // },
  data() {
    return {
      total: 1139,
      cardShow: false
    }
  },

  methods: {
    swipeLeft() {
      this.cardShow = true
    },
    swipeRight() {
      this.cardShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  margin-top: 7%;
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
}
.digital-container {
  margin-top: 100px;
  max-width: 39rem;
  display: flex;
}
.left-card {
  background-image: linear-gradient(to right, #f1d7d3, #ffffff);
  border-radius: 0 0.7rem 0.7rem 0;
  margin-right: 2%;
  width: 35.9%;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 0.1rem 0.15rem #07767c66;
}
.left-card-container {
  display: flex;
  flex-flow: column;
}
.digital-content-left {
  line-height: 1;
  color: #bb3939;
  font-size: 1.5rem;
  font-weight: 600;
}
.digital-suffix-left {
  color: #333333;
  font-size: 0.55rem;
  font-weight: 400;
  margin-left: 0.2rem;
}
.digital-header-left {
  margin-bottom: 2.3rem;
  color: #333333;
  font-size: 0.75rem;
  font-weight: 600;
}
.digital-title-left {
  margin-top: 2.3rem;
  color: #666666;
  font-size: 0.55rem;
  font-weight: 400;
  text-align: left;
}
.right-card {
  background-image: linear-gradient(to right, #fff9ed, #ffffff);
  border-radius: 0.7rem 0 0 0.7rem;
  width: 62.1%;
  display: flex;
  position: relative;
}
.swipe-text {
  position: absolute;
  right: 5.6%;
  top: 0.3rem;
  color: #999999;
  font-size: 0.45rem;
  font-weight: 400;
  text-align: left;
}
.digital-wuhan {
  display: flex;
  flex-flow: column;
  margin-left: 5.6%;
  margin-right: 5.6%;
  width: 10.35rem;
}
.digital-hubei {
  display: flex;
  flex-flow: column;
  margin-left: 5.6%;
  margin-right: 5.6%;
  width: 10.35rem;
}
.digital-suffix-right {
  color: #666666;
  font-size: 0.55rem;
  font-weight: 400;
  margin-left: 0.2rem;
}
.digital-content-right {
  line-height: 1;
  color: #e2951c;
  font-size: 1.2rem;
  font-weight: 600;
}
.digital-header-right-top {
  margin-bottom: 0.8rem;
  color: #333333;
  font-size: 0.6rem;
  font-weight: 600;
}
.digital-header-right {
  color: #333333;
  font-size: 0.6rem;
  font-weight: 600;
}
.digital-title-right-top {
  margin-top: 0.85rem;
  color: #999999;
  font-size: 0.45rem;
  font-weight: 400;
  text-align: left;
}
.digital-title-right {
  color: #999999;
  font-size: 0.45rem;
  font-weight: 400;
  text-align: left;
}
</style>
