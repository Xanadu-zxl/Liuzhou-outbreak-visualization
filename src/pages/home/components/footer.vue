<template>
  <div>
    <div class="footer">
      <span class="icon"></span>
      <span>积极防护，保护自己，戴口罩，勤洗手</span>
      <span class="icon"></span>
    </div>
    <div class="msg">了解最新进展及权威预防知识</div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.footer {
  margin: 0 0 1.5rem;
}

.footer .icon {
  background-image: url(//mms-res.cdn.bcebos.com/mms-res/voicefe/captain/mola/Virus/1.1.129/assets/cube.3c7b9b7.svg);
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  -ms-flex: 1 1;
  flex: 1 1;
  display: block;
  height: 0.5rem;
  background-repeat: no-repeat;
  background-size: 0.5rem 0.5rem;
  background-position: 50%;
}
.footer {
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.875rem 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.msg {
  opacity: 0.7;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  padding-bottom: 6.25rem;
}
</style>
