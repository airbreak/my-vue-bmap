<template>
  <div>
    <baidu-map :center="center"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler" class="map">
      <bm-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
        <p v-text="infoWindow.contents"></p>
        <button @click="clear">Clear</button>
      </bm-info-window>
      <button @click="infoWindowOpen">开启窗口</button>
    </baidu-map>
  </div>
</template>
<script>
  import {BmlMarkerClusterer} from 'vue-baidu-map'
  export default {
    data () {
      return {
        closeOnClick: false,
        center: {lng: 0, lat: 0},
        zoom: 3,
        infoWindow: {
          show: true,
          contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      }
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 5
        this.addMarkers()
      },
      infoWindowClose (e) {
        this.infoWindow.show = false
      },
      infoWindowOpen (e) {
        this.infoWindow.show = true
      },
      clear () {
        this.infoWindow.contents = ''
      }
    },
    components: {
      BmlMarkerClusterer
    }
  }
</script>
<style>
  .map {
    width: 100%;
    height: 600px;
  }
  button{
    margin-top: 5px;
    height: 35px;
    width: 90px;
    border: none;
    background-color: #409eff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  .click-tips-box{
    margin-top: 10px;
    color: #333;
    font-size: 14px;
  }
</style>
