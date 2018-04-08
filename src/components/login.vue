<template>
  <div class="login">
    <h3 style="font-weight: normal;color: #409EFF;margin-bottom: 30px">欢迎登录</h3>
    <el-form :model="ruleForm"  ref="ruleForm" class="demo-ruleForm loginFrom">
      <el-form-item >
        <el-input placeholder="请输入您的用户名"  v-model="ruleForm.userCode"></el-input>
      </el-form-item>
      <span class="ShowNameerr" v-show="ShowNameerr">* 用户名不能为空且必须汉字</span>
      <el-form-item>
        <el-input type="password" placeholder="请输入您的密码" v-model="ruleForm.userPwd" ></el-input>
      </el-form-item>
      <span class="ShowPsderr" v-show="ShowPsderr">* 密码不能为空且为6~16位英文字母或者数字</span>
      <div style="padding: 1rem 0 2rem 0;" class="clear">
        <span class="lt">
        <el-checkbox v-model="checked">记住密码</el-checkbox>
          </span>
        <span class="rt" @click="clearCookie" style="cursor: pointer;color: #333333;font-size: 12.5px;margin-left: 5px;">忘记密码？</span>
      </div>
      <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%;">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
  import { MidPost } from '../../static/MidPost.js'
  export default {
    name: "login",
    data () {
      return {
        checked:'',
        ruleForm: {
          userCode: 'xt001', //用户名
          userPwd: 'test', //密码
        },
        ShowNameerr:false,
        ShowPsderr:false,
        configData: {
          url: 'http://61.183.92.242:8098/Midserver.asq',
          requestJson: "{'userCode':'xt001','userPwd': 'test',}",
        },
      }
    },
    methods: {
      //点击登录调用方法
      submitForm(formName) {
        //保存的账号
        var name=this.ruleForm.userCode;
        //保存的密码
        var pass=this.ruleForm.userPwd;

        if(name==''){
          // alert("请输入正确的用户名");
          this.ShowNameerr = true
          return
        }else if(pass==''|| !/\w{3,16}/g.test(pass)) {
          // alert("请输入正确的密码");
          this.ShowPsderr = true
          return
        }

        //判断复选框是否被勾选 勾选则调用配置cookie方法
        if(this.checked=true){
          //传入账号名，密码，和保存天数3个参数
          this.setCookie(name,pass,7);
          console.log()
        }
        // axios({
        //   url: this.configData.url,
        //   method:'post',
        //   timeout :1500,
        //   dataType: 'JSON',
        //   data: JSON.stringify(this.configData.postData),
        // }).then(res=>{
        //   console.log(res)
        // }).catch(err=>{
        //   console.log(err)
        // })

        var that = this;
        MidPost.postMidserver({success:function(data) {
          if(data.UserFLag == 1){
            alert("登录成功")
            that.$router.push('/geren')
          }else if(data.UserFLag == 0){
            alert("用户名或密码错误")
          }else if(data.UserFLag == -1){
            alert("抱歉，没有该病人的信息！！！")
          }
          },
          service:"manage.userlogin",
          requestJson: JSON.stringify(that.configData.requestJson)
        })
      },


      //设置cookie
      setCookie(c_name,c_pwd,exdays) {
        var exdate=new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie="userCode"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
        window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
      },
      //读取cookie
      getCookie:function () {
        if (document.cookie.length>0) {
          var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
          for(var i=0;i<arr.length;i++){
            var arr2=arr[i].split('=');//再次切割
            //判断查找相对应的值
            if(arr2[0]=='userCode'){
              this.ruleForm.userCode=arr2[1];//保存到保存数据的地方
            }else if(arr2[0]=='userPwd'){
              this.ruleForm.userPwd=arr2[1];

            }
          }
        }
      },


      //清除cookie
      clearCookie:function () {
        this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
        //this.$router.push('/wangjipsd')
      },
    },
    //页面加载调用获取cookie值
    mounted(){
      this.getCookie()

    }
  }
</script>

<style scoped>
  .lt{
    float: left;
    cursor: pointer;
    color: #333333;
    font-size: 0.6rem;
    vertical-align: middle;
    font-family: "Microsoft YaHei";
  }
  .lt input{
    vertical-align: middle;
    display: inline-block;
    margin-bottom: 5px;
  }
  .rt{
    float: right;
    font-family: "Microsoft YaHei";
  }
  .ShowNameerr,.ShowPsderr{
    display: inline-block;
    width: 100%;
    font-size: 0.5rem;
    color: red;
    text-align: left;
    text-indent: 1.5em;
  }
  .login{
    margin-top: 60px;
    padding: 0 2.5%;
  }

</style>
