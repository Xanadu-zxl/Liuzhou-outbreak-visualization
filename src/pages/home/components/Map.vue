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
      @area-clicked="areaClickFunc"
    />
    <info-window
      ref="infowindowRef"
      :options="{
        closeWhenClickMap: true,
        isCustom: true
      }"
    />
  </base-map>
</template>

<script>
import {
  BaseMap,
  Regions,
  InfoWindow,
} from '@byzanteam/map-ui';
import Liuzhou from '../../../resources/liuzhou.json'

export default {
  components: {
    BaseMap,
    Regions,
    InfoWindow,
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
          center: [109.603274, 24.398684],
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
          center: [109.513237,24.430415],
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
  },

  methods: {
    areaClickFunc (json, area, vm) {
      const content = `<div class='info-container'>
        <div class="info-title">${json.properties.group.name}</div>
        <div class="info-title">1</div>
      </div>`
      this.$refs.infowindowRef.createInfoWindow({content: content, location: json.properties.group.center})
    }
  }
}
</script>

<style>
.map {
  height: 500px;
}

.info-container {
  background-color: rgba(31, 36, 64, .6);
  padding: 6px 8px;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 .1rem .1rem 0 transparentize(#000000, .86);
  position: relative;
}

.info-container::after {
  content: "";
  position: absolute;
  border: .4rem solid transparent;
  border-top-color: rgba(31, 36, 64, .6);
  bottom: -19px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
