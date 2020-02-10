<template>
  <base-map
    ref="mapRef"
    :map-options="mapOptions"
    features="none"
    :map-style="mapStyle"

  >
    <regions
      ref="regionsRef"
      :areas="areas"
      :groups="groups"
      :areaHoverStyle="areaHoverStyle"
    />
  </base-map>
</template>

<script>
import {
  BaseMap,
  Regions,
} from '@byzanteam/map-ui';
import Liuzhou from '../../../resources/liuzhou.json'

export default {
  components: {
    BaseMap,
    Regions,
  },

  data() {
    return {
      areas: Liuzhou.features,
      mapStyle: 'amap://styles/cca20692c7b4da0b930eadd919d5a3fb',
      mapOptions: {
        zoom: 10,
        zoomEnable: false,
        dragEnable: false,
        resizeEnable: true,
        center: [109.603274, 24.398684],
      },
      groups: [
        {
          name: '雒容镇',
          codes: [1],
          style: {
            fillColor: '#ffaa85',
            fillOpacity: 0.8,
            strokeColor: '#ffffff',
            strokeWeight: 1,
          }
        },
        {
          name: '洛埠镇',
          codes: [2],
          style: {
            fillColor: '#d98066',
            fillOpacity: 0.8,
            strokeColor: '#ffffff',
            strokeWeight: 1,
          }
        }
      ],
      areaHoverStyle: {
        strokeColor: '#ffffff',
        strokeWeight: 1,
        fillColor: '#380206',
        strokeOpacity: 1,
        fillOpacity: 0.1,
      },
    }
  }
}
</script>

<style scoped>
.map {
  height: 500px;
}
</style>
