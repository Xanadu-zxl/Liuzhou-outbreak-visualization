<template>
  <div class="map-wrapper">
    <div class="map-header">
      <div class="map-title">
        <span class="map-title-badge"></span>
        <span>重点人群管控地图</span></div>
      <div class="map-subtitle">实时数据监控</div>
    </div>
    <div class="map-legend">
      <div class="legend-item" v-for="(item, index) in mapRange" :key="index">
        <span class="legend-item-color" :style="{backgroundColor: item.color}"></span>
        <span class="legend-item-text">{{generateRangeText(item)}}</span>
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
      <text-marker
        :texts="regionLabels"
        :textStyle="regionLabelStyle"
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
import _ from 'lodash'
import {
  BaseMap,
  Regions,
  TextMarker,
  InfoWindow
} from '@byzanteam/map-ui';
import Liuzhou from '../../../resources/liuzhou.json'

const GROUPS = [
  {
    name: '雒容镇',
    codes: [1],
    center: [109.603274, 24.398684],
    style: {
      fillOpacity: 0.8,
      strokeColor: '#772631',
      strokeWeight: 1
    }
  },
  {
    name: '洛埠镇',
    codes: [2],
    center: [109.513237, 24.430415],
    style: {
      fillOpacity: 0.8,
      strokeColor: '#772631',
      strokeWeight: 1
    }
  }
]

export default {
  components: {
    BaseMap,
    Regions,
    TextMarker,
    InfoWindow
  },

  data() {
    return {
      areas: Liuzhou.features,
      mapStyle: 'amap://styles/cca20692c7b4da0b930eadd919d5a3fb',
      mapOptions: {
        zoom: 11,
        zoomEnable: false,
        dragEnable: false,
        resizeEnable: true,
        center: [109.603274, 24.420004]
      },
      selectedArea: '',
      mapRange: [
        {color: '#bb3939', min: 1000},
        {color: '#e16f5d', min: 100, max: 999},
        {color: '#f9e2e5', min: 10, max: 99},
        {color: '#f9e4c0', min: 1, max: 9}
      ],
      counts: [
        {name: '雒容镇', a: 3, b: 2, c: 4, d: 6, e: 5, f: 7, g: 4},
        {name: '洛埠镇', a: 12, b: 2, c: 7, d: 0, e: 8, f: 7, g: 2}
      ],
      regionLabels: [
        {
          text: '雒容镇',
          position: [109.603274, 24.398684]
        },
        {
          text: '洛埠镇',
          position: [109.513237, 24.430415]
        },
        {
          text: '洛埠镇',
          position: [109.505287, 24.390415]
        }
      ],
      regionLabelStyle: {
        color: '#333333',
        'font-size': 12
      },
      areaHoverStyle: {
        strokeColor: '#ffffff',
        strokeWeight: 1,
        fillColor: '#380206',
        strokeOpacity: 1,
        fillOpacity: 0.1
      }
    }
  },

  computed: {
    groups () {
      return GROUPS.map((group) => {
        const count = this.counts.find(item => item.name === group.name)
        const currentStyle = _.findLast(
          _.sortBy(this.mapRange, 'min'),
          ({ min }) => count.a >= min
        );
        group = {...group, ...count}
        group.style.fillColor = currentStyle.color
        return group
      })
    }
  },

  methods: {
    areaClickFunc (json, area, vm) {
      this.selectedArea = this.selectedArea === json.properties.group.name ? '' : json.properties.group.name
      if (this.selectedArea) {
        const content = `<div class='info-container'>
        <div class="info-name">${json.properties.group.name}</div>
          <div class="info-title">来自武汉市的市外人员: ${json.properties.group.b}</div>
          <div class="info-title">来自湖北省（除武汉市）的市外人员: ${json.properties.group.c}</div>
          <div class="info-title">我市到过武汉市的人员: ${json.properties.group.d}</div>
          <div class="info-title">我市到过湖北省（除武汉市）的人员: ${json.properties.group.e}</div>
          <div class="info-title">密切接触者: ${json.properties.group.f}</div>
          <div class="info-title">我市仍在湖北省出差、休假、旅游、探亲等短时间停留人员: ${json.properties.group.g}</div>
        </div>`
        this.$refs.infowindowRef.createInfoWindow({content: content, location: json.properties.group.center})
      } else {
        this.$refs.infowindowRef.close()
      }
    },

    generateRangeText (item) {
      if (item.max) {
        return `${item.min} - ${item.max}`
      }
      return `> ${item.min}`
    }
  }
}
</script>

<style lang="less">
.map {
  height: 25rem;
}

.amap-marker {
  pointer-events: none;
}

.amap-info {
  width: 25rem;
}

.amap-overlay-text-container {
  font-size: .5rem !important;
}

.info-container {
  background-color: rgba(50, 50, 50, 0.7);
  padding: .3rem .4rem;
  color: #ffffff;
  font-size: .7rem;
  border-radius: .2rem;
  box-shadow: 0 .1rem .1rem 0 transparentize(#000000, .86);
  position: relative;
}

.info-container::after {
  content: "";
  position: absolute;
  border: .4rem solid transparent;
  border-top-color: rgba(50, 50, 50, 0.7);
  bottom: -1.2rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.map-wrapper {
  position: relative;

  .map-header {
    .map-title {
      color: #333333;
      font-size: .9rem;
      font-weight: 600;
      display: flex;
      align-items: center;
    }

    .map-title-badge {
      width: .25rem;
      height: .6rem;
      background-color: #39aabb;
      border-radius: .3rem;
      margin-right: .5rem;
    }

    .map-subtitle {
      color: #666666;
      font-size: .45rem;
      padding-left: 0.7rem;
    }
  }

  .map-legend {
    position: absolute;
    bottom: 0;
    height: 6rem;
    right: .5rem;
    z-index: 999;
  }

  .legend-item {
    display: flex;
    align-items: center;

    .legend-item-color {
      width: .75rem;
      height: .5rem;
      border-radius: .1rem;
      background-color: #ffaa85;
    }

    .legend-item-text {
      color: #999999;
      font-size: .5rem;
      margin-left: .5rem;
    }
  }
}
</style>
