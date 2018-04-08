<template>
  <div class="gerenlist">
    <p class="img-logo"><span><slot name="left-icon"></slot>
      <!--<i class="icon iconfont icon-erweima"></i>-->
    </span>
    </p>
    <div class="title">
      <span><slot>{{txt}}</slot></span> <br>
      <span class="sex"><slot>{{txt2}}</slot></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "gerenlist",
      props:['txt','txt2']
    }
</script>

<style scoped>
  p{
    margin: 0;
    padding: 0;
  }
  .gerenlist{
    width: 50%;
    height: 70px;
    padding: 10px 0;
    clear: both;
    border-right: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
  }
  .gerenlist .img-logo{
    width: 10%;
    padding-top: 12px;
    padding-left: 10px;
    float: left;
  }
  .gerenlist .img-logo span{
    display: inline-block;
    background-color: #5bc0de;
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
  .gerenlist .title{
    width: 90%;
    text-align: left;
    padding-top: 5px;
    padding-left: 25px;
    float: left;
  }
  .gerenlist img{
    width: 50px;
    vertical-align: middle;
  }
  .sex{
    display: inline-block;
    font-size: 8px;
    color: #9d9d9d;
    padding-right: 10px;
  }

</style>
