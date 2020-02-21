<template>
  <header class="header">
    <div class="top-content">
      <div class="logo-word">
        <img src="../../assets/img/logo.png" alt="word" class="banner-logo">
        <img src="../../assets/img/banner-word.png" alt="word" class="banner-word">
      </div>
    </div>
    <div class="digital-roll-container">
      <digital-roll
        title-position="bottom"
        :title-style="digital_title"
        :digital-style="digital_digital"
        :suffix-style="digital_suffix"
        :content="totalCompany"
      ></digital-roll>
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
      }
    }
  },
  created() {
    axios.get('/51685a1a-e98f-4b9b-b624-dbaf7fa31128/data').then(({data: {data, schema}}) => {
      console.log('data', data);
      console.log('schema', schema);
    })
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
    height:10.2rem;
    background-position: bottom right;
    background-repeat:no-repeat;
    background-size: auto 100%;
    background-image: url("../../assets/img/banner-m.png");
    padding: 0 4%;
  }
    @media screen and (min-width: 900px) {
    .top-content{
      background-image: url("../../assets/img/banner-pc.png");
      background-size: auto 124%;
      background-position: 100% 40%;
    }
}

.logo-word {
    display: flex;
    flex-flow: column;
  }

.banner-bg {
    max-height: 10.2rem;
  }

.banner-word {
    margin-top: 2.15rem;
    width: 9.2rem;
    max-height: 4.05rem;
  }

.banner-logo {
    margin-top: 0.95rem;
    max-width: 3.75rem;
    max-height: 1.1rem;
  }

.digital-roll-container {
  background-color: #ffffff;
  width: 92vw;
}
.digital-roll--bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>
