<template>
  <div class="map-wrapper">
    <div class="map-legend">
      <div class="legend-item" v-for="(item, index) in mapRange" :key="index">
        <span class="legend-item-color" :style="{backgroundColor: item.color}"></span>
        <span class="legend-item-text">{{item.text}}</span>
      </div>
    </div>
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
  </div>

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
      mapRange: [
        {color: '#660309', text: '> 10000'},
        {color: '#8c0f0e', text: '1000 - 9999'},
        {color: '#cc2a2a', text: '100 - 999'},
        {color: '#ff7a69', text: '10 - 99'},
        {color: '#ffaa85', text: '1 - 9'}
      ],
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

<style lang="less">
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

.map-wrapper {
  position: relative;

  .map-legend {
    position: absolute;
    bottom: 0;
    height: 120px;
    width: 200px;
    left: 30px;
  }

  .legend-item {
    display: flex;
    align-items: center;

    .legend-item-color {
      width: 15px;
      height: 10px;
      border-radius: 2px;
      background-color: #ffaa85;
    }

    .legend-item-text {
      color: #333333;
      font-size: 12px;
      margin-left: 10px;
    }
  }
}
</style>
