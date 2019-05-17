<template>
    <div>
       <header>
            <!-- <p><</p> -->
            <router-link tag="p" to="/take"><</router-link>
            <p>搜索</p>
            <p></p>
       </header>
       <div class="content">
            <div class="con">
                <p><input type="text" v-model="kw" placeholder="请输入商家或美食名称"><button @click="btnClk">提交</button></p>
            </div>
             <div class="coe">
                <p>搜索效果</p>
            </div>
            <div class="cot" v-show="isShow">
                <p><span>效果</span><span>&times;</span></p>
                <p><span>饭</span><span>&times;</span></p>
                <p><span>牛肉</span><span>&times;</span></p>
                <p>清空搜索历史</p>
            </div>
            <div class="cov">
                <ul>
                    <li v-for="(item,index) in list" key="index"><span>{{item.name}}</span><span>&times;</span></li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            kw:'',
            list:[],
            isShow:true,
        }
    },
methods:{
    //点击搜索
    btnClk(){
        this.isShow=false
        this.axios.get("http://elm.cangdu.org/v4/restaurants?extras[]=restaurant_activity&geohash=31.194068,121.320779&keyword="+this.kw+"&type=search").then(res=>{
            // console.log(res.data)
            this.list=res.data
        })
    }
}
}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 60px;
    background: #3792e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.6rem;
    p:nth-of-type(1){
        font-size:24px;
        color: white;
    }
    p:nth-of-type(2){
        font-size: 20px;
        color: white;
        font-weight: bold;
    }
}
.content{
    width: 100%;
    background: #f5f5f5;
     .con{
        padding: 0.4rem;
        background: white;
        p{
            width: 100%;
            input{
                width: 70%;
                height: 40px;
                border-radius: 0.3rem;
                border: 1px solid #eeeeee;
                padding-left: 0.5rem;
                outline: none;
                background: #f2f2f2;
            }
            button{
                width: 25%;
                height: 2rem;
                background: #3792e5;
                color: white;
                border-radius: 0.3rem;
                border: none;
                outline: none;
                font-size: 1rem;
                font-weight: bold;
                margin-left: 0.5rem;
            }
        }
    }
    .coe{
        width: 100%;
        background: #f5f5f5;
        height: 2.5rem;
        p{
            line-height: 2.5rem;
            font-size: 1rem;
            padding-left: 0.5rem;
            font-weight: bold;
            color: #666666;
        }
    }
    .cot{
        width: 100%;
        background: white;
        p:nth-of-type(1){
            width: 100%;
            padding: 0.8rem 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
            span:nth-of-type(1){
                font-size: 1rem;
                color: #424242;
            }
            span:nth-of-type(2){
                font-size: 1rem;
                font-weight: bold;
                color: #999999;
            }
        }
         p:nth-of-type(2){
            width: 100%;
            padding: 0.8rem 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
            span:nth-of-type(1){
                font-size: 1rem;
                color: #424242;
            }
            span:nth-of-type(2){
                font-size: 1rem;
                font-weight: bold;
                color: #999999;
            }
        }
         p:nth-of-type(3){
            width: 100%;
            padding: 0.8rem 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
            span:nth-of-type(1){
                font-size: 1rem;
                color: #424242;
            }
            span:nth-of-type(2){
                font-size: 1rem;
                font-weight: bold;
                color: #999999;
            }
        }
        p:nth-of-type(4){
            width: 100%;
            padding: 0.8rem 0.2rem;
            font-size: 1rem;
            font-weight: bold;
            color: #3792e5;
            text-align: center;
        }
    }
    .cov{
        width: 100%;
        background: white;
        ul{
            list-style: none;
            li{
                width: 100%;
            padding: 0.8rem 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
            span:nth-of-type(1){
                font-size: 1rem;
                color: #424242;
            }
            span:nth-of-type(2){
                font-size: 1rem;
                font-weight: bold;
                color: #999999;
            }
            }
        }
    }
}
</style>
