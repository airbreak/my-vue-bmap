<template>
  <div>
    <input type="text" v-model="keyword">
    <input type="button" value="搜索" @click="doSearch()">
    <baidu-map :center="center"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler" class="map">
    </baidu-map>
  </div>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      keyword: '',
      local: null
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.local = new BMap.LocalSearch(map, {
        renderOptions: {map: map}
      })
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 5

      map.addEventListener('click', function (e) {
        alert(e.point.lng + ',' + e.point.lat)
      })
    },
    doSearch () {
      this.local.search(this.keyword)
    }
  },
  components: {
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
