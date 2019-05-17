<template>
  <div id="box">
    <Load v-if="num!==1"></Load>
    <header>
      <p>
        <img src="../../image/1.png" alt>
        <span>{{$route.params.name}}</span>
        <img src="../../image/2.png" alt>
      </p>
    </header>
    <div id="con">
      <svg  id="swiper" v-if="num!==1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 490"><defs><path id="b" d="M0 0h1080v489H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd"><g><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/></g><g fill="#F6F6F6"><g transform="translate(76 36)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(346 36)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(616 36)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(886 36)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g></g><g fill="#F6F6F6"><g transform="translate(76 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(346 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(616 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(886 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g></g></g></svg>
      <div id="b1" class="swiper-container">
        <ul class="swiper-wrapper a1">
          <li class="swiper-slide" v-for="(item,index) in foodType" :key="index">
            <router-link :to="{path:'/goods'}" v-for="foodItem in item" :key="foodItem.id">
              <img :src=" 'https://fuss10.elemecdn.com'+foodItem.image_url" alt>
              <span>{{foodItem.title}}</span>
            </router-link>
          </li>
        </ul>
        <div class="swiper-pagination"></div>
      </div>
      <div id="b2">
        <div id="p">
          <img src="../../image/11.png" alt>
          <span>附近商家</span>
        </div>
        <div class="svg" v-if="num!==1">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
        </div>
      <div class="main-body" ref="wrapper" >
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
        <div class="mui-table-view mui-grid-view">
          <router-link tag="dl" v-for="(i,index) in datas" :to="{name:'goods',params:{geohash:i.latitude,geo:i.longitude,id:i.id,name:i.name,promotion_info:i.promotion_info}}" :key="i.id" class="mui-table-view-cell mui-media mui-col-xs-6">
          <dt>
            <img :src="'http://elm.cangdu.org/img/'+i.image_path" alt>
          </dt>
          <dd>
            <h2>
              <span>品牌</span>{{i.name}}
              <span>保准票</span>
            </h2>
            <p>
              <span>⭐⭐⭐⭐⭐</span>
              <span>{{i.rating}}</span>
              <span>月售{{i.recent_order_num}}单</span>
            </p>
            <p>
              <span>￥{{i.float_minimum_order_amount}}起送/配送费约￥{{i.float_delivery_fee}}</span>
              <span>
                {{i.distance}}/
                <span>{{i.order_lead_time}}</span>
              </span>
            </p>
          </dd>
        </router-link>
        </div>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-if="show"><i class="fa fa-fw fa-circle-o-notch"></i></span>
      <span v-else>没有数据了</span>
    </div>
      </mt-loadmore>
    </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import headTop from "../../components/header/head";
import Swiper from "swiper";
import "../../../static/swiper.min.css";
import Load from '../../components/cheshi/aa.vue'
// import '../../plugins/swiper.min(1)'
import { Loadmore } from 'mint-ui';
export default {
  components: {
    headTop,Load
  },
  data() {
    return {
      //  list:''
      foodType: [],
      // list:'',
      datas: [],
      //可以进行上拉
      allLoaded: false,
      //是否自动触发上拉函数
      isAutoFill: false,
      show:true,
      n: 0,
      num:1
    };
  },
  mounted() {
    //根据ID获取城市
    // console.log(this.$route.params.geohash)
    this.num=this.num-1
    this.axios
      .get(
        "http://elm.cangdu.org/v2/index_entry?geohash=" +
          this.$route.params.geohash +
          "&group_type=1&flags[]=F"
      )
      .then(res => {
        // this.list = res.data;//获取城市id
        // console.log(this.list.title)
        if (res.data) {
          this.num=this.num+1
          let resLength = res.data.length;
          let resArr = res.data; //返回一个新数组
          let foodArr = [];
          for (let i = 0, j = 0; i < resLength; i += 8, j++) {
            foodArr[j] = resArr.splice(0, 8);
          }
          this.foodType = foodArr;
          console.log(this.foodType.length);
          for (let k = 0; k < this.foodType.length; k++) {
            for (let j = 0; j < this.foodType[k].length; j++) {
              // console.log(this.foodType[k][j]);
            }
          }
        }
      })
      .then(() => {
        new Swiper(".swiper-container", {
          // pagination:".swiper-pagination",
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true,
          autoplay: true
        });
      });
    //初始化本地数据

    this.axios
      .get(
        "http://elm.cangdu.org/shopping/restaurants?latitude=31.2708&longitude=121.50343&offset=0&limit=5&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=")
      .then(res => {
        this.datas = res.data; //获取城市id
        console.log(this.datas)
        this.allLoaded = false;
          this.$refs.loadmore.onTopLoaded();
      });
  },
  methods: {
    //   下拉刷新
    loadTop() {
      this.loadFrist();
    },
    // 上拉加载
    loadBottom() {
      this.loadMore();
    },
    // 下来刷新加载
    loadFrist() {
        
    },
    // 加载更多
    loadMore() {// 
      this.n+=5;
      this.axios
        .get("http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset="+this.n+"&limit=5&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=")
        .then(response => {
          // concat数组的追加
          if(response.data.length<5){
                this.show=false;
          }
          this.datas = this.datas.concat(response.data);
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
body,
html {
  width: 100%;
  height: 100%;
}
#box {
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    padding: 10px 20px 10px 20px;
    width: 100%;
    height: 60px;
    line-height: 40px;
    font-size: 26px;
    background-color: #3792e5;
    color: #ffffff;
    text-align: center;
    img:nth-of-type(1) {
      width: 40px;
      float: left;
    }
    img:nth-of-type(2) {
      width: 35px;
      float: right;
    }
  }
  #con {
    background-color: #f5f5f5;
    width: 100%;
    flex: 1;
    overflow: auto;
    #swiper{
      position: fixed;
      top: 60px;
      z-index: 50;
    }
    ul {
      list-style: none;
    }
    #b1 {
      background-color: #fff;
      width: 100%;
      height: 198px;
      padding-top: 20px;
      .a1 {
        padding: 0px 10px 0px 0px;
        width: 100%;
        li {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          a {
            // flex: 1;
            width: 25%;
            text-decoration: none;
          }
          img {
            width: 55px;
          }
          span {
            display: block;
          }
        }
      }
      .swiper-pagination {
        width: 405px;
        height: 22px;
        color: red;
        z-index: 999;
      }
    }
    #b2 {
      width: 100%;
      background-color: #fff;
      margin-top: 15px;
      #p {
        margin-bottom: 25px;
        padding-left: 20px;
        padding-top: 13px;
        img {
          width: 25px;
          vertical-align: middle;
        }
        span {
          margin-left: 15px;
          color: #999999;
        }
      }
      dl {
        padding-top: 15px;
        width: 100%;
        padding-left: 20px;
        padding-right: 10px;
        padding-bottom: 15px;
        display: flex;
        border-bottom: 1px solid #cccccc;
        dt {
          img {
            width: 90px;
          }
        }
        dd {
          margin-left: 10px;
          h2 {
            vertical-align: middle;
            font-size: 20px;
            span:nth-of-type(1) {
              display: inline-block;
              width: 40px;
              height: 22px;
              text-align: center;
              border-radius: 6px;
              background-color: #fed744;
              margin-right: 10px;
              font-size: 16px;
            }
            span:nth-of-type(2) {
              width: 50px;
              height: 20px;
              display: inline-block;
              float: right;
              color: #cccccc;
              font-weight: 100;
            }
          }
          p:nth-of-type(1) {
            font-size: 14px;
            margin-top: 12px;
            span:nth-of-type(1) {
              color: #fd992b;
            }
            span:nth-of-type(2) {
              color: #fd992b;
              margin-left: 15px;
            }
            span:nth-of-type(3) {
              color: grey;
              margin-left: 15px;
            }
          }
          p:nth-of-type(2) {
            margin-top: 15px;
            span {
              font-size: 12px;
            }
            span:nth-of-type(1) {
              color: grey;
            }
            span:nth-of-type(2) {
              margin-left: 18px;
              color: #cccccc;
              span {
                color: #3792e5;
              }
            }
          }
        }
      }
    }

    .main-body{
       overflow: scroll;
    }
  }
}
</style>

