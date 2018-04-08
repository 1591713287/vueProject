<template>
  <div id="app" style="position: relative">


    <div class="tabbar">
      <div class="tabbar-list">

      <router-link to="/login" tag="li" active-class="active">第一页</router-link>
      <router-link to="/geren" tag="li">第二页</router-link>
      <router-link to="/searchlist" tag="li">第三页</router-link>

    </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import myheader from './components/myheader'
  import listform from './components/listform'
export default {
  name: 'app',
  created () {
    this.$router.push('/login')
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /*margin-top: 60px;*/
}
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: black;font-size:14px
  }
  .list1 i,.list3 i,.list4 i{
    position: absolute;
    z-index: 999;
    color: lightgray;
    top: 16px;
    right: 10px;
  }
  .tabbar{
    clear: both;
    position: relative;
  }
  .tabbar-list {
    width: 100%;
    position: fixed;
    background-color: #f0ad4e;
    text-align: center;
    color: black;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .el-checkbox__label{
    padding-left: 5px !important;
  }
  .tabbar-list li.active,.tabbar-list li:hover{
    color: red;
    background-color: #449d44;
  }
  .tabbar-list li{
    list-style: none;
    width: 33.3%;
    height: 44px;
    line-height: 44px;
    float: left;
  }

</style>
