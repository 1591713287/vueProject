<template>
  <div class="jiuzhen">
    <myheader txt="添加就诊人">
      <i slot="left" class="glyphicon glyphicon-menu-left left_icon">返回</i>
      <i slot="right" class="glyphicon glyphicon-option-horizontal right_icon"></i>
    </myheader>
    <div class="mian-content">
    <router-link to="/chengren" tag="li" active-class="active"><span>成人</span></router-link>
    <router-link to="/ertong" tag="li"><span>儿童</span></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import myheader from '../components/myheader'
    export default {
        name: "jiuzhen",
      components:{
        myheader
      }
    }
</script>

<style scoped>
.jiuzhen{
  width: 100%;
}
.mian-content{
  height: 40px;
  clear: both;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.jiuzhen li{
  list-style: none;
  float: left;
  height: 40px;
  width: 45%;
  color: black;

}
.jiuzhen li:nth-child(1){
  margin-left: 5%;
}
.mian-content li.active,.mian-content li:hover
{
  color: green;
  border-bottom: 2px solid green;
}
</style>
