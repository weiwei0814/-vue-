<template>
     <div id='login'>
         <headTop  :goBack="true" :headTitle="'密码登录'" :signinUp="false" >
            <!-- <span slot="logo">elm.me</span> -->
        </headTop>
          <div id='oyqn'> 
              <ul id='ul'>
                  <li><input type="text" placeholder='账号' v-model="inp"/></li>
                  <li>
                      <input type="password" placeholder='密码' v-model="psd"/>
                  </li>
                  <li>
                      <input type="text" placeholder='验证码' v-model="num"/>
                     <span><img :src="this.arr.code" /></span>
                     <span id='span'>看不清<label @click="huan">换一张</label></span>
                  </li>
              </ul>
              <p>温馨提示：未注册过的账号，登录时将自</p>
              <p>动注册注册过的用户可凭账号密码登录</p>
                <p><button @click="login">登录</button></p>
                <p @click="psdDel">重置密码？</p>
          </div>
                <div id='dw' v-if="isShow">
               <h3>!</h3>
                <p>{{warn}}</p>
                <p @click="guan">确认</p>
                </div>
                <div v-else></div>
                     
      </div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import axios from "axios";
export default {
 components:{
        headTop
    },
    data(){
        return{
            inp:'',//用户名
            psd:'',//密码
            num:'',//验证码
            arr:'',//验证码数据
            warn:'',//接收输入错误时返回的提示
            obj:{},
            isShow:false//弹窗
        }
    },
    mounted(){
         //渲染验证码
        axios.post('http://elm.cangdu.org/v1/captchas').then(res => {
              this.arr= res.data
            // console.log(res)
          })
    },
    methods:{
        login(){
          let userBool = /^1[5783469]\d{9}$/.test(this.inp);//手机号
          let psdBool =/^[0-9]{5,10}$/.test(this.psd);//密码 
          let mBool =/^[0-9]{4}$/.test(this.num);//验证码 
          if(!userBool){
              this.isShow=true
              this.warn='手机号格式不正确'
          }
          if(!psdBool){
              this.isShow=true
              this.warn='密码格式不正确'
          }
          if(mBool==''){
              this.isShow=true
              this.warn='验证码不能为空'
          }
          if(userBool && psdBool && mBool){
             this.setCookie('cap',this.num,7)//设置cookie
             let data = {username:this.inp,password:this.psd,captcha_code:this.num} 
            //  console.log(data)
             axios.post('http://elm.cangdu.org/v2/login',data).then(res=>{
            console.log(res.data)//
            localStorage.setItem('user_id',res.data.user_id);//本地存储用户id
            if(res.data.username){
                this.$router.push('/my')
            }else{
              this.isShow=true
              this.warn=res.data.message
            }
            
        })
          }
        },
        setCookie(cname,cvalue,exdays){
             var d = new Date();
            d.setTime(d.getTime()+(exdays*24*60*60*1000));
            var expires = "expires="+d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;    
        },//设置cookie
         huan(){
        //点击切换验证码
        axios.post('http://elm.cangdu.org/v1/captchas').then(res => {
              this.arr= res.data
          })
    },
        psdDel(){
      //密码重置
         this.psd=''
    },
    guan(){
      //关闭弹窗
      this.isShow=false
  }
    }
}
</script>

<style lang='scss' scoped>
#login{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    #oyqn{
        width: 100%;
        height: 91.8%;
        background-color: #f5f5f5;
        padding-top: 20px;
        #ul{
            background-color: #fff;
            list-style: none;
            width: 100%;
            // height: 180px;
            li:nth-of-type(1){
                width: 100%;
                height: 60px;
                input{
                padding-left: 32px;
                font-size: 16px;
                width: 100%;
                height: 60px; 
                outline: none;
                border: none;
                }
            }
            li:nth-of-type(2){
                width: 100%;
                height: 60px;
                input{
                padding-left: 32px;
                font-size: 16px;
                width: 100%;
                height: 60px; 
                outline: none;
                border: none;
                }
            }
            li:nth-of-type(3){
                border: none;
                width: 100%;
                height: 60px;
                input{
                    padding-left: 32px;
                    font-size: 16px;
                    width: 63%;
                    height: 60px; 
                    outline: none;
                    border: none;
                   
                    }
                    span{
                        vertical-align: middle;
                        display: inline-block;
                        width: 50px;
                        line-height: 15px;
                        font-size: 14px;
                    }
                    #span{
                        margin-left: 35px;
                        label{
                            color: blue;
                        }
                    }
            }
            li:nth-of-type(4){
                height: 20px;
                font-size: 12px;
                float: right;
                margin-right: 20px;
                margin-top: 10px;
                color: red;
            }
        }
        p:nth-of-type(1){
            margin-top: 35px;
            padding-left: 30px;
            width: 62%;
            font-size: 12px;
            color: red;
        }
        p:nth-of-type(2){
            padding-left: 30px;
            width: 62%;
            font-size: 12px;
            color: red;
            margin-top: 15px;
        }
        p:nth-of-type(3){
            margin-top: 10px;
            text-align: center;
            button{
                font-size: 16px;
                border-radius: 5px;
                width: 380px;
                height: 45px;
                background-color: #4CD964;
                outline: none;
                border: none;
                color: #fff;
            }
        }
        p:nth-of-type(4){
            font-size: 13px;
            float: right;
            margin-top: 15px;
            margin-right: 20px;
            color: blue;
        }
        p:nth-of-type(5){
            font-size: 13px;
            float: left;
            margin-top: 15px;
            margin-left: 20px;
            color: blue;
        }
    }
    #dw{
        padding-top: 40px;
        width: 280px;
        height: 260px;
        background-color: #fff;
        position: fixed;
        top: 203px;
        left: 70px;
        border-radius: 5px;
        text-align: center;
        h3{
            width: 112px;
            height:112px;
            text-align: center;
            line-height: 100px;
            border-radius: 50%;
            color: #F8CB86;
            border: 5px solid #F8CB86;
            font-size: 58px;
            margin: 0px auto;
        }
         p:nth-of-type(1){
              margin-top: 20px;
         }
        p:nth-of-type(2){
            width: 280px;
            height: 50px;
            line-height: 50px;
            background-color: #4CD964;
            text-align: center;
            margin-top: 26px;
            border-radius:0 0 6px 6px;
            font-size: 18px;
            color: #fff;
        }
    }
}

</style>
