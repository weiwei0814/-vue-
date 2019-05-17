<template>
    <div id='address'>
        <headTop  :goBack="true" :headTitle="''" :signinUp="false" :wan="true" @click.native='clk'>
            <!-- <span slot="logo">elm.me</span> -->
        </headTop>
        <div id="addressCon">
          <ul v-if="this.list">
                    <li  v-for="(con,index) in list" :key="index">
                      <p class='p'>{{con.address}}</p>
                      <p class='p'>{{con.phone}}</p>
                        <span class='span' @click="del(con)" v-show="Show">
                            <i class="fa fa-fw fa-times-circle"></i>
                        </span>
                    </li>
            <li id='gw'><p>新增地址</p><span><router-link to='/add'>
            <label>></label>
            </router-link></span></li>
          </ul>
        </div>
      </div>
</template>

<script>
import axios from "axios";
import headTop from '../../components/header/head.vue'
export default {
     components:{
        headTop
    },
    data(){
        return{
      list: [],//地址数组
      Show: false,//删除显示与隐藏
      bian:true,
        }
    },
    mounted(){
      //地址渲染
    axios.get('http://elm.cangdu.org/v1/users/' + JSON.parse(localStorage.getItem('user_id')) + '/addresses').then(res => {
      this.list = res.data
    })   
       
    },
    methods:{
        clk(e){
            if(e.target.innerHTML=='编辑'){
                this.Show=true
            }else if(e.target.innerHTML=='完成'){
                this.Show=false
            }
        },
        bianClk(){
            this.bian=!this.bian
            this.isShow=!this.isShow
        },
        del(con){
    //删除
    let user_id=JSON.parse(localStorage.getItem('user_id'))
   axios.delete('http://elm.cangdu.org/v1/users/'+user_id+'/addresses/'+con.id)
   .then((res)=>{
     //删除后重新渲染接口
    axios.get('http://elm.cangdu.org/v1/users/'+user_id+'/addresses').then(res=>{
      // console.log(res.data)
      this.list=res.data
    })
   })
},
    }
}
</script>

<style lang='scss' scoped>
a{
    text-decoration: none;
    color: #ccc;
    label{
        font-size: 26px;
    }
}
#address{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    header {
  width: 100%;
  height: 60px;
  background: #3792e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
  p:nth-of-type(1) {
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
  }
  p:nth-of-type(2) {
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }
  p:nth-of-type(3) {
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
  }
}
    #h1{
        font-size: 18px;
        width: 100%;
        height: 50px;
        background-color: #188efb;
        padding: 9px 10px 15px 20px;
        color: #fff;
        i{
            vertical-align: middle;
        }
        span:nth-of-type(1){
            margin-right: 130px;
        }
        span:nth-of-type(2){
            margin-right:110px;
        }
        a{
            text-decoration: none;
            color: #fff;
        }
        border-bottom: 1px solid gainsboro;
    }
    #addressCon{
        width: 100%;
        height: 93.2%;
        background-color: #F2F2F2;
        padding-top: 15px;
        ul{
            width: 100%;
            height: 55px;
           
            list-style: none;
           #gw{
            margin-top: 10px;
            background-color: #fff;
                height: 55px;
                line-height: 40px;
                padding-left: 10px;
                padding-right: 10px;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid gainsboro;
                span{
                    display: block;
                    i{
                        margin-left: 10px;
                    }
                }
                
            }
            li:nth-of-type(1){
                background-color: #FFF8C3;
            }
            li{
                position: relative;
                padding-top: 8px;
                background-color: #fff;
                height: 70px;
                padding-left: 10px;
                padding-right: 10px;
                border-bottom: 1px solid gainsboro;
            .p{
               margin-top: 3px;
            }
            .span{
                float: right;
                position: absolute;
                right: 20px;
                top: 26px;
                i{
                    color: #D93025;
                }
            }
            }
            
        }
    }
}
</style>
