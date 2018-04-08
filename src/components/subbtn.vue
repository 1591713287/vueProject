<template>
  <div class="subbtn">
    <p class="subbtn-main">{{txt}}</p>
  </div>
</template>

<script>
    export default {
        name: "subbtn",
      props:['txt']
    }
</script>

<style scoped>
  .subbtn{
    width: 100%;
    padding-left:8%;
    margin-top: 25px;
  }
  .subbtn .subbtn-main{
    background-color: cyan;
    width: 90%;
    text-align: center;
    padding: 10px 0;
    border-radius: 20px;
    color: white;
  }
</style>
