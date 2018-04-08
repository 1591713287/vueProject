<template>
  <div>
  <myheader txt="修改信息">
    <i slot="left" class="glyphicon glyphicon-menu-left left_icon">返回</i>
    <i slot="right" class="glyphicon glyphicon-option-horizontal right_icon"></i>
  </myheader>
  <listform txt="手机号">
    <span slot="inp_val"><input type="text" v-model="Tel" placeholder="" class="int"></span>
    <span slot="inp_icon">
        <router-link to="" tag="li"><i class="glyphicon glyphicon-menu-right"></i></router-link>
      </span>
  </listform>
    <span>{{shouji.errorText}}</span>
  <listform txt="实名信息">
    <span slot="inp_val"><input type="text" v-model="Name" placeholder="" @foucs="fn()"></span>

  </listform>
    <span>{{mingzi.errorText}}</span>
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
    <span>{{errorText}}</span>
    <div>
      <button @click="onLogin">提交</button></div>
    <p><router-link tag="a" to="/tiaozhuan">点我跳转哦</router-link></p>

  </div>

</template>

<script>
  import myheader from '../components/myheader'
  import listform from '../components/listform'
    export default {
      name: "xiugai",
      components:{
        myheader,
        listform,
      },
      data () {
        return {
          Tel:'',
          Name:'',
          errorText:''
        }
      },
      methods:{
        fn(){

        }
      },
      //利用computed 的计算属性来来判断获取表单里面的是否符合规范
      computed:{
        shouji () {
          let status,errorText //定义两个变量 来接受并返回表单值的结果
          if(this.Tel === ''){
            status = false,
              errorText=''
            //手机正则 表达式后面要加 g
          }else if(!/^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/g.test(this.Tel)){
            status = false,
              errorText='包含13,18,14,17,15开头'
          }else{
            status = true
              errorText=''
          }
          return {
            status,
            errorText
          }
        },
        mingzi () {
          let status,errorText
          if(this.Name === ''){
            status = false
            errorText = ''
          }else if(!/^[\u4e00-\u9fa5]{0,}$/g.test(this.Name)){
            status = false
            errorText = '名称必须为汉字'
          }else{
            status = true
            errorText = ''
          }
          return {
            status,
            errorText
          }
        }
      },
      methods:{
        onLogin (){
           if(!this.shouji.status || !this.mingzi.status){
            this.errorText = '请正确填写'
          }else if( !this.Tel === '' || !this.Name === ''){
            this.errorText = ''
          } else{
            this.errorText = ''
            alert("填写成功")
          }
        }
      }
    }
</script>

<style scoped>

</style>
