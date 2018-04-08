<template>

    <div class="mian-content">
      <p class="img-logo">
        <img src="../assets/images/logo.png" alt=""></p>
      <p class="title">{{CookieNameVal}} <br><span class="sex">男</span><span class="old">42岁</span></p>
      <p class="set"><i class="icon iconfont icon-set"></i>帐号设置</p>
      <div class="gerenlist-1" style="clear: both">
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
            <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
          <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
      </div>

      <div class="gerenlist-1" style="clear: both">
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
          <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
          <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
      </div>
      <div class="mineshop" style="clear: both">
        <cell></cell>
      </div>
      <div class="gerenlist-1" style="clear: both">
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
          <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
          <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
      </div>

      <div class="mineshop" style="clear: both">
        <cell></cell>
      </div>

      <div class="gerenlist-1" style="clear: both">
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
          <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
        <gerenlist txt="我的二维码" txt2="扫码快速授权身份">
          <span slot="left-icon"><i class="icon iconfont icon-erweima"></i></span>
        </gerenlist>
      </div>

        <!--<i class="icon iconfont icon-xiaoxi"></i>-->
    </div>

</template>

<script>
import gerenlist from '../components/gerenlist'
import cell from '../components/cell'
    export default {
        name: "geren",
      components:{
        gerenlist,
        cell
      },
      data(){
        return{
          CookieNameVal:''
        }
      },
      methods: {
        //JS操作cookies方法!
        //获取cookie
        getCookie: function (name) {
          name = name + "=";
          var start = document.cookie.indexOf(name), // 在cookie中查找该字符串出现的长度
            value = null;
          //如果找到了索引 就代表cookie的值存在
          if (start > -1) {
            var end = document.cookie.indexOf(";", start); //查找分号出现的位置
            if (end == -1) {
              end = document.cookie.length;
            }
            value = document.cookie.substring(start + name.length, end);//截取缓存在cookie里面的值
          }
          return value;
        },
        fn(){
          this.$router.push('/login')
        }
      },
      mounted(){
        //console.log(this.getCookie("userCode"));
        if(this.getCookie("userCode") == null){
          console.log(this.getCookie("userCode"));
          this.CookieNameVal = 'Cookie尚未缓存数据'
        }else {
          this.CookieNameVal = this.getCookie("userCode")
        }
      }


    }
</script>

<style scoped>
.mian-content{
  width: 100%;
  height: 80px;
  padding: 20px 0;
  clear: both;
}
.mian-content .img-logo{
  width: 25%;
  float: left;
}
.mian-content .set{
  width: 40%;
  background-color: cyan;
  padding: 4px 0;
  margin-top: 8px;
  border-radius: 20px 0 0 20px;
  float: right;
}
.mian-content .set i{
  font-size: 18px;
  vertical-align: middle;
  padding-right: 5px;
}
.mian-content .title{
  width: 35%;
  text-align: left;
  float: left;
}
  .mian-content img{
    width: 50px;
    vertical-align: middle;
  }
  .sex{
    display: inline-block;
    font-size: 10px;
    color: #9d9d9d;
    padding-top: 8px;
    padding-right: 20px;
  }
  .old{
    color: #9d9d9d;
  }
  .gerenlist-1{
    width: 100%;
    display: flex;
  }
.mineshop{
  margin-top: 5px;
}
</style>
