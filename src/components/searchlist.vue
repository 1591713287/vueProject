<template>
    <div>
      <p><input type="text" v-model="searchVal"><button @click="fn">查询</button></p>
      <p v-show="noneList">对不起，没有没用找到您的数据。。。</p>
      <div class="tablelist">
      <table style="border: 1px solid #ccc">
        <th style="border: 1px solid #ccc">name</th>
        <th>sex</th>
        <th>mobile</th>
        <th>receiptId</th>
        <th>fee</th>
        <th>OperaName</th>
        <th>cashDate</th>
        <tr id="showList" v-for="item in list">
          <td>{{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.mobile}}</td>
          <td>{{item.receiptId}}</td>
          <td>{{item.fee}}</td>
          <td>{{item.OperaName}}</td>
          <td>{{item.cashDate}}</td>
        </tr>
      </table>
      </div>

    </div>
</template>

<script>
  import axios from 'axios'
  import { SearchPost } from '../../static/SearchPost.js'
    export default {
        name: "searchlist",
      data(){
          return {
            PayList:[],
            searchVal:'',
            noneList:false,
            configData: {
              //url: 'http://61.183.92.242:8098/Midserver.asq',
              requestJson: "{\"name\": \"\",\n" +
              "        \"b_date\": \"2018-03-26\",\n" +
              "        \"e_date\": \"2018-03-27\"}",
              //Aeskey: '17C133AE614211DD',
              // postData: {
              //   service: "manage.getPaylist",
              //   partner: "HBSFYBJY_WX",
              //   hospitalCode: "000002",
              //   dataFormat: "JSON",
              //   inputCharset: "utf-8",
              //   debug: true,
              //   requestEncrypted: "b1KyZzyKCZkb6d7oSxH8Dqu9fQgYbID34m+oPTZPMteMsi6KZwpdG0of5S4iGuT3tXpbFWdzQ5UgtxGOsBdzbg==",
              //   signType: "md5",
              //   sign: "69382D72F353A77591363E23097DC596"
              // }
            },
          }
      },

      //通过计算属性过滤数据
      computed:{
        list: function(){
          var _this = this;
          let noneList
          //逻辑-->根据input的value值筛选goodsList中的数据
          var arrByZM = [];//声明一个空数组来存放数据
          for (var i=0;i<this.PayList.length;i++){
            //for循环数据中的每一项（根据name值）
            if(this.PayList[i].name.search(this.searchVal) != -1){
              //判断输入框中的值是否可以匹配到数据，如果匹配成功
              arrByZM.push(this.PayList[i]);
              this.noneList = false
              //向空数组中添加数据
            }else if(this.PayList[i].name.search(this.searchVal) == -1){
              this.noneList = true
            }
          }
          //一定要记得返回筛选后的数据
          return arrByZM;
        }
      },

      created(){

          let that = this;
          SearchPost.postMidserver({success:function(data){

              that.PayList = data.PayList
             for(let i=0;i<that.PayList.length;i++){
                //console.log(that.PayList[i].sex)
               if(that.PayList[i].sex == 1){
                 that.PayList[i].sex = '女'
               }else {
                 that.PayList[i].sex = '男'
               }
             }
              console.log(data.PayList)
            },
            service:"manage.getPaylist",
            requestJson: JSON.stringify(that.configData.requestJson)
          })
      },
      methods:{
          fn(){

          }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .tablelist {
    width: 100%;
  }
  .tablelist table{
    display: inline-block;
    margin: 0 auto;
  }
  table,th,tr{
    border: 1px solid #ccc;
  }
  .tablelist th>tr>td{
    font-size: 12px;
  }
</style>
