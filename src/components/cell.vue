<template>
    <div class="cell">
      <p><span></span>我的订单</p>
    </div>
</template>

<script>
    export default {
        name: "cell",
      porps:['txt']
    }
</script>

<style scoped>
  .cell{
    width: 100%;
    text-align: left;
    padding-left: 10px;
  }
  .cell p{
    padding-left: 5px;
  }
  .cell span{
    display: inline-block;
    width: 3px;
    height: 12px;
    margin-right: 5px;
    background-color: #449d44;
  }
</style>
