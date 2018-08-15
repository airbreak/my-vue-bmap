<template>
  <div>
    <baidu-map :center="center"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler" class="map">
      <bml-marker-clusterer :averageCenter = "true">
        <bm-marker v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}" @click="markersClickHandler(marker)">
        </bm-marker>
      </bml-marker-clusterer>
      <bm-info-window
            :position="position"
            :show="showWindow"
            autoPan="true"
            :closeOnClick="false"
            @clickclose="infoWindowClose()" v-html="detailContent">
        </bm-info-window>
    </baidu-map>
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
        position:{lng: 111.11, lat: 35},
        showWindow: false,
        detailContent:''
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
          let position = {
            lng: Math.random() * 40 + 85,
            lat: Math.random() * 30 + 21,
            show:false,
            id: i,
            detailContent: ''
          }
          tempMarkers.push(position)
        }
        this.markers.push(...tempMarkers)
      },
      /*
      * 点击事件
      * */
      markersClickHandler (marker) {
        debugger
        this.position = {lng:marker.lng, lat:marker.lat}
        this.showWindow= true
        this.detailContent = '<p>这是第' + marker.id + '个详细信息</p>'+
          '<p>斑马快跑APP是其全产业链的最佳体现，通过多维立体设计，</p>'+
          '<p>综合了巴士、商用车、乘用车三种车型的叫车用车功能，为乘客提供最优出行方案，</p>'+
          '<p>是一款综合所有车辆服务的的互联网约车产品，构建了一个全生态通行平台</p>'
      },
      infoWindowClose () {
        this.showWindow = false
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
