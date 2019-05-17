<template>
    <div id="box">
        <!-- <header>
            <p>ele.me</p>
            <p></p>
            <p><img src="../../image/2.png" alt=""></p>
        </header> -->
        <head-top :signinUp="true" :goBack="false" :headTitle="''" >
            <span slot="logo">elm.me</span>
        </head-top>
        <div class="content">
            <p>
                <span>当前定位城市:</span>
                <!-- <span></span> -->
                <span>定位不准时，请在城市列表中选择</span>
            </p>
            <p>
                <span>{{guess.name}}</span>
                <span></span>
                <span><img src="../../image/5.png"></span>
                <router-link tag="span" to="/addSearch"><img src="../../image/15.png"></router-link>
            </p>
        
        <div class="hr">

        </div>
        <div class="con">
            <p>热门城市</p>
            <ul>
                <li v-for="item in list">{{item}}</li>
            </ul>
        </div>
        <div class="hr">

        </div>
        <div class="coe" v-for="(index,key) in storgroupcity">
            <p>{{key}} <span>(按字母排序)</span> </p>
            <ul>
               <router-link  tag="li" v-for="item in index" :to="{name:'addSearch',params:{id:item.id}}" :key="item.id">
              {{item.name}}
         </router-link>  
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import headTop from '../../components/header/head'
export default {
     components:{
        headTop
    },
    data(){
        return{
            list:[],
            data:[],
            weizhi:[],
            group:[],
            city:[],
            word:[],
            guess:''
        }
    },
mounted(){
    axios.get('http://elm.cangdu.org/v1/cities?type=hot').then(res=>{
        if(res.data){
            this.hot=res.data
           for(var i in this.hot){
            //    console.log(this.hot[i].name)
               this.list.push(this.hot[i].name)
           }
        }
    })
    axios.get('http://elm.cangdu.org/v1/cities?type=guess').then(res=>{
         this.guess=res.data
        //  this.weizhi.push(this.guess.name)
    })
    axios.get('http://elm.cangdu.org/v1/cities?type=group').then(res=>{
         this.group=res.data
    })
   
},
computed:{
    //将获取的数据按照A-z字母排序
    storgroupcity(){
        let stortobj={};
        for(let i=65;i<=90;i++){
            if(this.group[String.fromCharCode(i)]){
                stortobj[String.fromCharCode(i)]=this.group[String.fromCharCode(i)]
            }
        }
        return stortobj
    }
}
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,html{
    width: 100%;
    height: 100%;
}
#box{
    width: 100%;
    display: flex;
    flex-direction: column; 
header{
    width: 100%;
    height: 60px;
    background: #3792e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.6rem;
    section{
        .title_text{
        font-size: 1rem;
        color: white;
    }
        }
    p:nth-of-type(3){
        img{
            width: 1.3rem;
            height: 1.6rem;
        }
    }
}
.content{
    width: 100%;
    flex: 1;
    overflow: auto;
    &>p:nth-of-type(1){
        width: 100%;
        height: 2.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem 0.6rem 0.3rem 0.6rem;
        border-bottom: 1px solid #cccccc;
        span{
            display: block;
            font-size: 0.8rem;
            color: #bebebe;
        }
    }
    p:nth-of-type(2){
        width: 100%;
        height: 2.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0.6rem;
        span{
            display: block;
            font-size: 1rem;
            color: #3792e5;
            img{
                width: 1.3rem;
                height: 1.4rem;
            }
        }
        
    }
}
.hr{
    width: 100%;
    height: 1rem;
    background: #f5f5f5;
    border-bottom: 1px solid #f2f2f2;
    border-top: 1px solid #f2f2f2;
}
.con{
    width: 100%;
    p{
      font-size: 0.9rem;
      color: #6d6d6d;
      padding: 0.3rem;
    }
    ul{
            width: 100%;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25%;
                line-height: 2rem;
                text-align: center;
                color: #3792e5;
                border: 1px solid #f5f5f5;
            }
    }
}
.coe{
    width: 100%;
    p{
      font-size: 1rem;
      color: #6d6d6d;
      padding: 0.3rem;
      span{
          font-size: 0.8rem;
          color: #b7b7b7;
      }
    }
    ul{
            width: 100%;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25%;
                font-size: 0.8rem;
                line-height: 2rem;
                text-align: center;
                color: #b7b7b7;
                border: 1px solid #f5f5f5;
            }
    }
}
}
</style>
