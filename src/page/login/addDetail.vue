<template>
    <div id='addDetail'>
        <h1 id='h1'>
                    <router-link to='/add'>
                        <span>
                            <i class="fa fa-fw fa-angle-left"></i>
                            </span><span>搜索地址</span>
                    </router-link>
        </h1>
        <div id='addDetailA'>
            <ul id='ul1'>
                <li><input type="text" placeholder='请输入小区/写字楼/学校等' id='inp'/><button @click="affirm">确认</button></li>
                <li>为了满足商家的送餐需求，建议您从列表中选择地址</li>
            </ul>
                    <ul class='arr' v-if="clkTab">
                    <li v-for="(ite,index) in arr" @click="address(ite)" :key="index"><p>{{ite.name}}</p>
                    <p>{{ite.address}}</p>
                    </li>
            </ul>
                <ul id='center' v-else>
                <li>找不到地址？</li>
                <li>请尝试输入小区、写字楼或者学校名</li>
                <li>详细地址（如门牌号）可稍后输入哦。</li>
            </ul>
                    
   
        </div>
      </div>
</template>

<script>
import axios from "axios"
export default {
data(){
    return{
        arr:[],
        clkTab:false,
    }
},
methods:{
    affirm(){
        this.clkTab=true
        let inp=document.getElementById('inp')
        axios.get('http://elm.cangdu.org/v1/pois?type=nearby&keyword=' +inp.value).then(res => {
            this.arr=res.data
        })
    },
    address(ite){
        console.log(ite)
        let data=sessionStorage.setItem('data',JSON.stringify(ite))
        console.log(data)
        this.$router.push('/add')
    }
}
}
</script>

<style lang='scss' scoped>
#addDetail{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    #h1{
        position: fixed;
        top: 0;
        left: 0;
        font-size: 18px;
        width: 100%;
        height: 50px;
        background-color: #188efb;
        padding: 9px 10px 15px 20px;
        i{
            vertical-align: middle;
        }
        span:nth-of-type(1){
            margin-right: 135px;
        }
        a{
            text-decoration: none;
            color: #fff;
        }
        border-bottom: 1px solid #F2F2F2;
    }
    #addDetailA{
        margin-top:50px; 
        background-color: #F2F2F2;
        width: 100%;
        height: 93.2%;
        #ul1{
            list-style: none;
            width: 100%;
            height:90px;
            // background-color: #fff;
            li:nth-of-type(1){
            height:60px;
            background-color: #fff;
            padding: 13px 18px 8px 18px;
           input{
               padding-left: 18px;
               width: 295px;
               height: 35px;
               border: none;
               outline: none;
               border-radius: 5px;
               border: 1px solid #E6E6E6;
               background-color: #F2F2F2;
           }
           button{
               vertical-align: middle;
            border: none;
            outline: none;
            width: 70px;
            height: 35px;
            margin-left: 10px;
            border-radius: 5px;
            background-color: #188efb;
            color: #fff;
            font-size: 16px;
           }
            }
            li:nth-of-type(2){
                padding-left: 28px;
                width: 100%;
                height: 35px;
                line-height: 35px;
                background-color: #FFF6E4;
                color: #FF883F;
            }
        }
        #center{
            list-style: none;
            text-align: center;
            margin-top: 190px;
            li{
                color: #969696;
                font-size: 18px;
                margin-top: 16px;
            }
        }
        .arr{
            background-color: #F2F2F2;
            list-style: none;
            width: 100%;
            li{
                padding-top: 10px;
                border-bottom: 1px solid #ccc;
                // height: 80px;
                padding-left: 25px;
                padding-right: 15px;
                color: #969696;
               
            p{
                font-size: 18px;
                margin-bottom: 12px;
            }
            }

        }
    }
}
</style>
