<template>
  <header class="header">
    <div class="analyze-tabs">
      <div class="analyze-tab">企业复工</div>
      <div class="analyze-tab--pre">tab2</div>
      <div class="analyze-tab--pre">tab3</div>
      <div class="analyze-tab--pre">tab4</div>
    </div>
    <div class="top-content">
      <div class="logo-word">
        <img src="../../assets/img/Banner-Slogon.png" alt="word" class="banner-word">
      </div>
    </div>
    <div class="digital-roll-container" v-if="showFirstPage">
      <div class="digital-roll-next" @click="nextPage">
        <img class="digital-roll-next_icon" style="margin-left: 0.1rem" src="../../assets/img/Icon-Arrow-Right.svg" alt="next-icon">
      </div>
      <div class="digital-roll-container--half">
      <div class="digital-roll-yesterday--top">昨日+{{ companyUpAmount }}</div>
      <digital-roll
        style="margin-bottom: 2.475rem"
        title-position="bottom"
        :title-style="digital_title"
        :digital-style="digital_digital"
        :suffix-style="digital_suffix"
        :content="totalCompany"
      ></digital-roll>
      <div class="digital-roll-yesterday--bottom">昨日+{{ resumeWorkAmount }}</div>
      <digital-roll
        title-position="bottom"
        :title-style="digital_title"
        :digital-style="digital_digital"
        :suffix-style="digital_suffix"
        :content="resumeWork"
      ></digital-roll>
    </div>
      <div class="digital-roll-container--half">
<!--        <div class="digital-roll-beizhu">(包括出差、休假、旅游、探亲)</div>-->
        <div class="digital-roll-yesterday--top">昨日+{{ huBeiProvinceAmount}}</div>
        <digital-roll
          style="margin-bottom: 2.475rem"
          title-position="bottom"
          :title-style="digital_title"
          :digital-style="digital_digital"
          :suffix-style="digital_suffix"
          :content="huBeiProvince"
        ></digital-roll>
        <div class="digital-roll-yesterday--bottom">昨日+{{ inFocusProvinceAmount  }}</div>
        <digital-roll
          title-position="bottom"
          :title-style="digital_title"
          :digital-style="digital_digital"
          :suffix-style="digital_suffix"
          :content="inFocusProvince"
        ></digital-roll>
      </div>
    </div>
    <div class="digital-roll-container" v-if="!showFirstPage">
      <div class="digital-roll-last" @click="lastPage">
        <img class="digital-roll-next_icon" style="margin-right: 0.1rem" src="../../assets/img/Icon-Arrow-Left.svg" alt="next-icon">
      </div>
      <div class="digital-roll-container--half">
        <div class="digital-roll-yesterday--top">昨日+{{ closeExposureAmount }}</div>
        <digital-roll
          style="margin-bottom: 2.475rem"
          title-position="bottom"
          :title-style="digital_title"
          :digital-style="digital_digital"
          :suffix-style="digital_suffix"
          :content="closeExposure"
        ></digital-roll>
        <div class="digital-roll-yesterday--bottom">昨日+{{ medicalObserverAmount }}</div>
        <digital-roll
          title-position="bottom"
          :title-style="digital_title"
          :digital-style="digital_digital"
          :suffix-style="digital_suffix"
          :content="medicalObserver"
        ></digital-roll>
      </div>
    </div>
  </header>
</template>
<script>
import axios from 'axios'
import {DigitalRoll} from '@byzanteam/vis-components'
export default {
  components: {
    DigitalRoll
  },
  data() {
    return {
      totalCompany: {
        title: '已填报复工信息企业数',
        suffix: '个',
        digital: 10
      },
      companyUpAmount: 1,
      resumeWork: {
        title: '准备复工人数',
        suffix: '人',
        digital: 10
      },
      resumeWorkAmount: 1,
      huBeiProvince: {
        title: '湖北籍职工数',
        suffix: '人',
        digital: 10
      },
      huBeiProvinceAmount: 12,
      inFocusProvince: {
        title: '仍在重点防控省份人数',
        suffix: '人',
        digital: 10
      },
      inFocusProvinceAmount: 12,
      closeExposure: {
        title: '密切接触者人数',
        suffix: '人',
        digital: 10
      },
      closeExposureAmount: 12,
      medicalObserver: {
        title: '医学观察人员',
        suffix: '人',
        digital: 10
      },
      medicalObserverAmount: 12,
      digital_title: {
        color: '#666666',
        fontSize: '0.6rem',
        fontWeight: 400
      },
      digital_digital: {
        fontFamily: 'Oswald',
        color: '#0D83ED',
        fontSize: '1.3rem',
        fontWeight: 500
      },
      digital_suffix: {
        color: '#999999',
        fontSize: '0.55rem',
        fontWeight: 400
      },
      showFirstPage: true
    }
  },
  created() {
    axios.get('/51685a1a-e98f-4b9b-b624-dbaf7fa31128/data').then(({data: {data, schema}}) => {
      this.totalCompany.digital = data[0][0];
      this.companyUpAmount = data[0][1]
    });
    axios.get('/91b405de-6710-46af-b715-5c51fff851b5/data').then(({data: {data, schema}}) => {
      this.resumeWork.digital = data[0][0];
      this.resumeWorkAmount = data[0][1]
    });
    axios.get('/3bedea77-6ed7-4c18-99bb-2127aec17101/data').then(({data: {data, schema}}) => {
      this.huBeiProvince.digital = data[0][0];
      this.huBeiProvinceAmount = data[0][1]
    });
    axios.get('/40a99333-c802-4711-8a40-cef4d9f5579e/data').then(({data: {data, schema}}) => {
      this.inFocusProvince.digital = data[0][0];
      this.inFocusProvinceAmount = data[0][1]
    });
    axios.get('/8db746ce-e83d-4adc-b8a6-a08b4958581c/data').then(({data: {data, schema}}) => {
      this.closeExposure.digital = data[0][0];
      this.closeExposureAmount = data[0][1]
    });
    axios.get('/398a1082-5274-4c84-a894-bae5fcbb87a9/data').then(({data: {data, schema}}) => {
      this.medicalObserver.digital = data[0][0];
      this.medicalObserverAmount = data[0][1]
    });
  },

  methods: {
    nextPage () {
      this.showFirstPage = false
    },
    lastPage () {
      this.showFirstPage = true
    }
  }
}
</script>

<style lang="less" scoped>
@import '@byzanteam/vis-components/dist/index.css';

.header {
}
.analyze-tabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 2.3rem;
  background-color: #2583D9;
}
.analyze-tab {
  white-space: nowrap;
  z-index: 2;
  color: #FFFFFF;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 2.3rem;
  padding: 0 .75rem;
  margin-right: .3rem;
}
.analyze-tab--pre {
  color: #FFFFFF;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 2.3rem;
  padding: 0 .75rem;
  margin-right: .3rem;
  opacity: 50%;
  width: 3.2rem;
  text-align: center;
}
.analyze-tab:after{
  content: '';
  display:block;
  width:30px;
  border-bottom:4px solid #fff;
  border-radius: 2px;
  margin: 0 auto;
}
.top-content{
  top: 0;
  position: absolute;
  width: 100%;
  height: 7.15rem;
  background-position: bottom right;
  background-repeat:no-repeat;
  background-size: 100% 100%;
  background-image: url("../../assets/img/Banner.png");
  margin-top: 2.25rem;
  padding: 0 4%;
  }

.logo-word {
  margin-top: 1.4rem;
  display: flex;
  flex-flow: column;
  }

.banner-bg {
    max-height: 10.2rem;
  }

.banner-word {
  width: 12.95rem;
  height: 2.7rem;
  }

.banner-logo {
    margin-top: 0.95rem;
    max-width: 3.75rem;
    max-height: 1.1rem;
  }

.digital-roll-container {
  position: relative;
  display: flex;
  background-color: #fff;
  border-radius: 0.35rem;
  margin: 8rem 4% 0.5rem;
  padding: 2.125rem 0 1.15rem;
}
.digital-roll-beizhu {
  position: absolute;
  bottom: 0;
  font-size: 0.45rem;
  color:#999999;
  white-space: nowrap;
}
.digital-roll-next {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(33%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: .625rem;
  border: .05rem solid #EAEAEA;
  background-color: #ffffff;
  box-shadow: 0 .1rem .5rem #00000014;
}
.digital-roll-last {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-33%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: .625rem;
  border: .05rem solid #EAEAEA;
  background-color: #ffffff;
  box-shadow: 0 .1rem .5rem #00000014;
}
.digital-roll-next_icon {
  width: .5rem;
  height: .5rem;
}
.digital-roll-container--half {
  display: flex;
  padding-left: 18px;
  flex-flow: column;
  width: 50%;
}

.digital-roll-yesterday--top {
  margin-bottom: .1rem;
  color: #629BCD;
  padding: .075rem .15rem;
  font-weight: 400;
  font-size: 0.45rem;
  text-align: left;
  border-radius: .1rem;
  background-color: #EAF4FC;
  position: absolute;
  top: 1rem;
}
.digital-roll-yesterday--bottom {
  position: absolute;
  top: 6.1rem;
  color: #629BCD;
  padding: .075rem .15rem;
  font-weight: 400;
  font-size: 0.55rem;
  text-align: left;
  border-radius: .1rem;
  background-color: #EAF4FC;
  margin-bottom: .1rem;
}
</style>
