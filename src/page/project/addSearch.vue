<template>
  <div>
    <header>
      <!-- <p><</p> -->
      <router-link tag="p" to="/city"><</router-link>
      <p>{{data.name}}</p>
      <router-link tag="p" to="/city">切换城市</router-link>
      <!-- <p>切换城市</p> -->
    </header>
    <div class="content">
      <div class="con">
        <p>
          <input type="text" placeholder="输入学校、商务楼、地址" v-model="val">
        </p>
        <p>
          <button @click="tj">提交</button>
        </p>
      </div>
      <div class="coe">
        <p>搜索历史</p>
      </div>
      <div class="cot">
        <p v-if="isShow">
          <!-- <span v-for="i in $store.state.list">{{i}}</span> -->
          <label >清空历史</label>
        </p>
        <p v-else>
          <span v-for="(item,index) in placelist" @click="nextpage(index,item)" :key="index">
            {{item.name}}
            <span>{{item.address}}</span>
          </span>
          
          <label @click="del">清空所有</label>
        </p>
        <p v-if="placeNone">很抱歉！无搜索结果</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import headTop from "../../components/header/head"
export default {
    components:{
        headTop
    },
  data() {
    return {
      word: "",//搜索城市具体地区
      val: "",//输入框内容
      data: "",//城市id
      historytitle: true,//默认显示搜索历史头部，点击搜索后隐藏
      placelist:[],//搜素城市列表
      isShow:false,
    //   placeHistory:[],
        citylist:[],
      placeNone:false//搜索无结果，显示提示信息
    };
  },
  mounted(){
      //根据ID获取城市
    this.axios
      .get("http://elm.cangdu.org/v1/cities/" + this.$route.params.id)
      .then(res => {
        this.data = res.data;//获取城市id
        // console.log(res.data)
      });
      //初始化本地数据
        this.qudata();
  },
  methods: {
    tj() {
      if (this.val) {
         
        //关键词查找城市
        axios
          .get(
            "http://elm.cangdu.org/v1/pois?type=search&city_id=" +
              this.$route.params.id +
              "&keyword=" +
              this.val
          )
          .then(res => {
              if (res.data) {
                   this.historytitle=false
                    this.placelist=res.data
                console.log(this.placelist)
                // this.word = res.data;//点击城市跳转获取id
              }
          });
      }else{
          this.placeNone=true
      }
    },
    //  initData(){
    //     //获取搜素历史记录
    //     if (localStorage.getItem('placeHistory')) {
    //         this.placelist=JSON.parse(localStorage.getItem('placeHistory'))
    //          console.log(this.placelist)
    //     } else {
    //         this.placelist=[]
    //     }
    // },
      nextpage(index,item){
        // i 就是点击时获得的具体地址
        //当用户点击了具体地址就把值存起来
        let history=localStorage.getItem("historycity");
        if (history) {        // 为空的话代表着没有存储数据
            let check=false;
            this.citylist=JSON.parse(history);
            console.log(this.citylist)
             this.citylist.forEach(i=>{
                console.log(i,item)
                if(i.address == item.address){
                    check=true;
                }
            })
            if (!check) {
                this.citylist.push(item)
            }
        }else{    
              //为空的话 创建并存入本地
              this.citylist.push(item)
            //   this.citylist.push(item)
        }
            localStorage.setItem("historycity",JSON.stringify(this.citylist))
            this.$router.push({name:'take',params:{geohash:item.geohash,name:item.name}})
            console.log(item.name,item.geohash)
    },
    qudata(){
        //获取搜索历史记录
        if (localStorage.getItem('historycity')) {
            this.placelist=JSON.parse(localStorage.getItem('historycity'))
             console.log(this.placelist)
        } else {
            this.placelist=[]
        }
      },
     del(){
    //   this.placelist.splice(0)
      localStorage.removeItem('historycity'); 
      this.placelist=[] 
    }
   

  }
  
};
</script>

<style lang="scss" scoped>
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
.content {
  width: 100%;
  background: #f5f5f5;
  .con {
    width: 100%;
    background: white;
    padding: 0.4rem;
    p:nth-of-type(1) {
      width: 100%;
      text-align: center;
      input {
        width: 94%;
        height: 2rem;
        border-radius: 0.3rem;
        border: 1px solid #eeeeee;
        padding-left: 0.5rem;
        outline: none;
      }
    }
    p:nth-of-type(2) {
      width: 100%;
      text-align: center;
      padding-top: 0.3rem;
      button {
        width: 94%;
        height: 2rem;
        border-radius: 0.3rem;
        border: none;
        outline: none;
        font-size: 0.9rem;
        background: #3792e5;
        color: white;
      }
    }
  }
  .coe {
    width: 100%;
    background: #f5f5f5;
    padding: 0.2rem 0;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    p {
      font-size: 0.8rem;
      padding-left: 0.5rem;
    }
  }
  .cot {
    width: 100%;
    background: white;
    p {
      //    height: 64px;
      //    line-height: 64px;
      width: 100%;
      padding: 0.4rem;
      // border-bottom: 1px solid #cccccc;
      span {
        height: 74px;
        display: block;
        font-size: 16px;
        padding-top: 12px;
        border-bottom: 1px solid #cccccc;
        span {
          font-size: 13px;
          color: gainsboro;
          border: none;
        }
      }
      label {
        display: block;
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        margin-top: 15px;
      }
    }

    //     p:nth-of-type(1){
    //         width: 100%;
    //         padding: 0.4rem;
    //         border-bottom: 1px solid #cccccc;
    //         span:nth-of-type(1){
    //              display: block;
    //               font-size: 1rem;
    //              padding: 0.7rem 0 0 0.6rem;
    //         }
    //          span:nth-of-type(2){
    //              display: block;
    //               font-size: 0.9rem;
    //              padding: 0.6rem 0 0.7rem 0.6rem;
    //              color: #c6c6c6;
    //         }
    //    }
    //     p:nth-of-type(3){
    //         width: 100%;
    //         padding: 0.8rem 0.2rem;
    //         font-size: 1rem;
    //         font-weight: bold;
    //         color: #9b9b9b;
    //         text-align: center;
    //     }
  }
}
</style>
