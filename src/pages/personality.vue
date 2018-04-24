<template>
  <div>
    <baidu-map :center="center"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               :mapStyle="myMayStyle"
               @ready="handler" class="map">
      <bml-marker-clusterer :averageCenter = "true">
        <bm-marker v-for="marker of mapInfo.markers" :position="{lng: marker.lng, lat: marker.lat}" @click="markersClickHandler(marker)">
          <bm-info-window title="详细信息" :show="marker.show" @close="infoWindowClose(marker)" v-html="marker.detailInfo"></bm-info-window>
        </bm-marker>
      </bml-marker-clusterer>
    </baidu-map>
    <button @click="addMarkers">添加markers</button>
  </div>
</template>
<script>
  import {BmlMarkerClusterer} from 'vue-baidu-map'
  export default {
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        mapInfo: {
          markers: []
        },
        myMayStyle:{
          styleJson: [{
              "featureType": "boundary",
              "elementType": "geometry",
              "stylers": {
                "color": "#000000ff"
              }
            }]
        },
      }
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 3
      },
      addMarkers () {
        let tempMarkers = []
        for(let i = 0; i < 10; i++ ){
          let position = {
            lng: Math.random() * 40 + 85,
            lat: Math.random() * 30 + 21,
            show: false,
            detailInfo: '<p>123</p>'
          }
          tempMarkers.push(position)
        }
        this.mapInfo.markers.push(...tempMarkers)
      },
      /*
     * 点击事件
     * */
      markersClickHandler (marker) {
        marker.show = true
        marker.detailInfo = '<p>这是第' + marker.id + '个详细信息</p>'+
          '<p>斑马快跑APP是其全产业链的最佳体现，通过多维立体设计，</p>'+
          '<p>综合了巴士、商用车、乘用车三种车型的叫车用车功能，为乘客提供最优出行方案，</p>'+
          '<p>是一款综合所有车辆服务的的互联网约车产品，构建了一个全生态通行平台</p>'
      },
      infoWindowClose (marker) {
        marker.show = false
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
</style>
