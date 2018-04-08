<template>
  <div class="list_content">
  <div class="listform">
    <p class="list1">{{txt}}</p>
    <p class="list2">
      <slot name="inp_val"></slot>
      <slot name="inp_icon"></slot>
    </p>
  </div>
  </div>
</template>

<script>
    export default {
        name: "listform",
      props:['txt']
    }
</script>

<style scoped>
  .list_content{
    width: 100%;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .listform{
    width: 100%;
    padding: auto 8px;
    height: 45px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    position: relative;
  }
  .listform li{
    position: absolute;
    right: 10px;
    top: 13px;
    list-style: none;
  }
.listform .list1{
    width: 30%;
    float: left;
    color: #959595;
    padding-left: 10px;
    text-align: left;
}
  .listform .list2{
    float: right;
    width: 66%;
    color: #959595;
    margin-top: 8px;
    margin-right: 10px;
    text-align: left;
  }
  .listform .list2 input{
    margin-right: 20px;
    outline: none;
    border: none;
    height: 25px;
    color: black;
  }
</style>
