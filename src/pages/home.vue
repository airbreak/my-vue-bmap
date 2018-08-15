<template>
  <div class="link-box">
    <router-link to="notheme" tag="a" active-class="selected">
      默认地图样式
    </router-link>
    <router-link to="personalitytheme" tag="a" active-class="selected">
      个性化地图样式
    </router-link>
    <router-link to="popups" tag="a" active-class="selected">
      信息弹出框（包裹在marker元素中，移动地图会消失）
    </router-link>
    <router-link to="popupstest" tag="a" active-class="selected">
      信息弹出框（单独元素，移动地图不消失）
    </router-link>
    <router-link to="popupsnew" tag="a" active-class="selected">
      信息弹出框（不包裹在marker元素中，功能正常）
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>
<style>
  .link-box{
    margin-top:20px;
  }
  .link-box a{
    margin-left: 10px;
    text-decoration: none;
    cursor: pointer;
  }
  .link-box a:hover{
    text-decoration: underline;
    color: red;
  }
</style>
