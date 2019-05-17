<template>
    <div id='forget'>
                <h1 id='h1'>
                    <router-link to='/info'>
                        <span>
                            <i class="fa fa-fw fa-angle-left"></i></span><span>重置密码</span>
                    </router-link>
                </h1>
                <div id="forgetCon">
                <ul>
                    <li><input type="text" placeholder='账号' ref="number"/></li>
                    <li><input type="password" placeholder='旧密码' ref="oldpsw"/></li>
                    <li><input type="password" placeholder='请输入新密码' ref="newpsw"/></li>
                    <li><input type="password" placeholder='请确认密码' ref="qrpsw"/></li>
                    <li>
                      <input type="text" placeholder='验证码' id='m' ref="yzm"/>
                     <span><img :src="this.arr.code" /></span>
                     <span id='span'>看不清<label @click="huan">换一张</label></span>
                  </li>
                </ul>
                <p><button @click="forget">确认修改</button></p>
                </div>
               
                <div id='dw' v-if="this.isShow">
                    <i class="fa fa-fw fa-exclamation-circle"></i>
                <p>{{this.alert}}</p>
                <p @click="guan">确认</p>
                </div>
                
                
            </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            arr:'',
            alert:'',
            isShow:false    
        }
    },
    mounted(){
        //渲染验证码
        axios.post('http://elm.cangdu.org/v1/captchas').then(res => {
              this.arr = res.data
            // console.log(this.state.arr)
          })
    },
    methods:{
        huan(){
        //点击切换验证码
        axios.post('http://elm.cangdu.org/v1/captchas').then(res => {
              this.arr= res.data
          })
    },
    forget(){
        //确认修改
        console.log(this.$refs.qrpsw.value)
        if(this.$refs.qrpsw.value===this.$refs.newpsw.value){
            let data={username: this.$refs.number.value, oldpassWord: this.$refs.oldpsw.value, newpassword: this.$refs.newpsw.value, confirmpassword: this.$refs.qrpsw.value,captcha_code: this.$refs.yzm.value}
        axios.post('http://elm.cangdu.org/v2/changepassword',data).then(res => {
            console.log(res.data)
            if(res.data.status===1){
                this.alert=res.data.success
                this.$refs.number.value=''
                this.$refs.oldpsw.value=''
                this.$refs.newpsw.value=''
                this.$refs.qrpsw.value=''
                this.$refs.yzm.value=''
            }else if(res.data.status===0){
                this.alert=res.data.message
            }
            console.log(this.alert)
          })
          this.isShow=true
        }else{
            this.alert="请保持两次密码输入一致"
            this.isShow=true
        }
        
    },
    guan(){
        //关闭弹窗
        this.isShow=false
    }
    }
}
</script>

<style lang='scss' scoped>
#forget{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    #forgetCon{
        width: 100%;
        height: 92.8%;
        background-color: #f5f5f5;
        padding-top: 20px;

        ul{
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
            li:nth-of-type(4){
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
            li:nth-of-type(5){
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
            
        }
        p{
            margin-top: 30px;
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
    }
    #dw{
        padding-top: 40px;
        width: 280px;
        height: 240px;
        background-color: #fff;
        position: fixed;
        top: 203px;
        left: 70px;
        border-radius: 5px;
        text-align: center;
        i{
            font-size: 133px;
            color: gold;
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
            margin-top: 15.5px;
            border-radius: 0 0 5px 5px;
            font-size: 18px;
            color: #fff;
        }
    }
}
</style>
