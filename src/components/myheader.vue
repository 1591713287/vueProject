<template>
    <div class="myheader">
      <span>{{txt}}</span>
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
      props:['txt']
    }
</script>

<style scoped>
.myheader{
  background-color: black;
  padding: 10px 0;
  color: white;
  font-size: 12px;
  width: 100%;
  position: relative;
  margin-bottom: 10px;
}
.myheader span{
  font-size: 14px;
  font-weight: bold;
}
  .myheader i{
    position: absolute;
  }
  .myheader .left_icon{
    top: 12px;
    left: 10px;
    vertical-align: middle;
  }
.myheader .right_icon{
    right: 10px;
    top: 12px;
  }
</style>
