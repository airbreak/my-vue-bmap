<template>
  <div>
    <baidu-map :center="center"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler" class="map">
      <bml-marker-clusterer :averageCenter = "true">
        <bm-marker v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}" @click="markersClickHandler"></bm-marker>
      </bml-marker-clusterer>
      <bm-info-window title="车辆详细信息"
                      :width="infoWindow.width"
                      :height="infoWindow.height"
                      :position="{lng: infoWindow.longtitude, lat:infoWindow.latitude}"
                      :show="infoWindow.show"
                      @close="infoWindowClose">
        <p v-html="infoWindow.contents"></p>
      </bm-info-window>
    </baidu-map>
    <div class="click-tips-box">点击次数：{{clickCounts}}</div>
  </div>
</template>
<script>
  import {BmlMarkerClusterer} from 'vue-baidu-map'
  export default {
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        markers :[],
        infoWindow: {
          show: false,
          longtitude: 116.404,
          latitude: 39.915,
          contents: '<div>这里是详细信息1</div><div>这里是详细信息2</div>',
          height: 175,
          width: 400
        },
        clickCounts:0
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
      addMarkers () {
        let tempMarkers = []
        for(let i = 0; i < 10; i++ ){
          let position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
          tempMarkers.push(position)
        }
        this.markers.push(...tempMarkers)
      },
      /*
      * 点击事件
      * */
      markersClickHandler (e) {
        this.clickCounts ++
        let location = {
          longtitude: e.point.lng,
          latitude: e.point.lat
        }
        this.infoWindow.show = true
        this.infoWindow.longtitude = location.longtitude
        this.infoWindow.latitude = location.latitude
      },
      infoWindowClose () {
        this.infoWindow.show = false
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
