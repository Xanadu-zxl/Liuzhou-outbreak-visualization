<template>
  <div class="header">
    <span class="active">疫情动态</span>
    <span>迁徙地图</span>
    <span>全民热搜</span>
    <span>实时播报</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  line-height: 30px;
  justify-content: space-around;
  border-bottom: 1px solid #f5f6f7;

  span {
    font-weight: 500;
    text-align: center;
  }

  .active {
    font-weight: 700;
    color: #10aeb5;
    border-bottom: 3px solid #10aeb5;
  }
}
</style>
