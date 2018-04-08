<template>
    <div>
      <div class="sfid">
        <div class="sfid-list">
        <router-link to="" tag="li" active-class="active">有身份证号</router-link>
        <router-link to="" tag="li">无身份证号</router-link>
        </div>
      </div>
      <listform txt="与我联系">
        <span slot="inp_val"><input type="text" placeholder=""></span>
        <span slot="inp_icon">
        <router-link to="" tag="li"><i class="glyphicon glyphicon-menu-right"></i></router-link>
      </span>
      </listform>
      <listform txt="姓名">
        <span slot="inp_val"><input type="text" placeholder=""></span>
      </listform>
      <listform txt="身份证号">
        <span slot="inp_val"><input type="text" placeholder=""></span>
        <span slot="inp_icon">

      </span>
      </listform>
      <listform txt="监护人">
        <span slot="inp_val"><input type="text" placeholder=""></span>
        <span slot="inp_icon">
        <router-link to="" tag="li"><i class="glyphicon glyphicon-menu-right"></i></router-link>
      </span>
      </listform>
      <listform txt="家庭住址">
        <span slot="inp_val"><input type="text" placeholder=""></span>
        <span slot="inp_icon">
        <router-link to="" tag="li"><i class="glyphicon glyphicon-menu-right"></i></router-link>
      </span>
      </listform>
      <subbtn txt="提交信息"></subbtn>
    </div>
</template>

<script>
  import listform from '../../components/listform'
  import subbtn from '../../components/subbtn'
    export default {
        name: "ertong",
      components:{
        listform,
        subbtn
      }
    }
</script>

<style scoped>
  .sfid{
    width: 100%;
  }
  .sfid-list{
    width: 65%;
    margin: 15px 17.5%;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 20px;
    height: 40px;
  }
  .sfid-list li.active,.sfid-list li:hover{
    background-color: #449d44;
    color: white;
  }
.sfid li{
  float: left;
  width: 50%;
  list-style: none;
  padding: 5px 0;
  border-radius: 20px;
}
</style>
