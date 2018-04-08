<template>
  <div>
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
    <listform txt="联系手机">
      <span slot="inp_val"><input type="text" placeholder=""></span>
      <span slot="inp_icon">

      </span>
    </listform>
    <listform txt="家庭住址">
      <span slot="inp_val"><input type="text" placeholder=""></span>
      <span slot="inp_icon">
        <router-link to="" tag="li"><i class="glyphicon glyphicon-menu-right"></i></router-link>
      </span>
    </listform>
    <listform txt="职业信息">
      <span slot="inp_val"><input type="text" placeholder=""></span>
      <span slot="inp_icon">
        <router-link to="" tag="li"><i class="glyphicon glyphicon-menu-right"></i></router-link>
      </span>
    </listform>
    <subbtn txt="提交信息"></subbtn>
    <div class="jieshao">
      <p>提示：监护人必须为成人，且常用就诊人，若监护人不存在请先添加监护人为常用就诊人。</p>
    </div>
  </div>
</template>

<script>
  import listform from '../../components/listform'
  import subbtn from '../../components/subbtn'
    export default {
        name: "chengren",
        components:{
        listform,
          subbtn
      }
    }
</script>

<style scoped>
.jieshao{
  width: 100%;
  padding-left: 8%;
}
  .jieshao p{
    width: 90%;
    background-color: #cccccc;
    color: #4cae4c;
    border: 1px solid chartreuse;
    border-radius: 5px;
  }
</style>
