<template>
   <div id='my'>
        <div id="tou">
        <header>
      <!-- <p><</p> -->
      <router-link tag="p" to="/city"><</router-link>
      <p>我的</p>
      <p></p>
      <!-- <p>切换城市</p> -->
    </header>
        <div id='dl'>
              <dl v-if="isShow">
          <dt>
            <img :src="'http://elm.cangdu.org/img/'+this.aa" alt=""/>
            </dt>
          <dd>
          <router-link to='/info'>
            <h1 id='h2'>{{uname}}</h1>
            <p><span>
              <!-- <Icon type="mobile" style={{ fontSize: '20px', color: '#fff' }}/> -->
              </span>暂无绑定手机号<span>
                  <!-- <Icon type="right" style={{ fontSize: '20px', color: '#fff' }} /> -->
                </span></p>  
          </router-link>
          </dd>
          <dd>
          </dd>
        </dl>
              <dl v-else>
          <dt>
          <img :src="'http://elm.cangdu.org/img/default.jpg'"/>
            </dt>
          <dd>
          <router-link to='/login'>
          <p>
            <span>登录/注册</span>
            </p>
          </router-link>
            <p>
                <!-- <Icon type="mobile" style={{ fontSize: '20px', color: '#fff' }}/> -->
            暂无绑定手机号</p>
          </dd>
          <dd>
          </dd>
        </dl>

        </div>
        </div>
        <div id="oy">
        <ul class='oy1'>
          <li>
            <p><span>0.00</span>元</p>
            <p>我的余额</p>
          </li>
          <li>
            <p><span>0</span>个</p>
            <p>我的优惠</p>
          </li>
          <li>
            <p><span>0</span>分</p>
            <p>我的积分</p>
          </li>
        </ul>
        <ul class='oy2'>
          <li>我的订单</li>
          <li>积分商城</li>
        </ul>
        <ul class='oy3'>
          <li>饿了么会员卡</li>
          <li>服务中心</li>
          <li>下载饿了么APP</li>
        </ul>
        </div>
      </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            uname:"",
            aa:'',
            isShow:false
        }
    },
    mounted(){
    if(localStorage.getItem('user_id')){
      axios.get('http://elm.cangdu.org/v1/user?user_id='+localStorage.getItem('user_id')).then(res => {
              console.log(res.data)
              this.isShow=true
              this.uname=res.data.username,//手机号、用户名存在的
              this.aa=res.data.avatar//头像
          })
    }
    
    }
}
</script>

<style lang='scss' scoped>
#my{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    a{
        text-decoration: none;
        color: #fff;
    }
#tou{
    width: 100%;
    height: 170px;
    background-color: #188efb;
    color: #fff;
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
    #dl{
        padding: 0px 10px 15px 20px;
        margin-top: 26px;
    }
    dl{
        margin-top: 15px;
        display: flex;
    dt{
   
        img{
            width: 60px;
            border-radius: 50%;
        }
    }
    dd{
        width: 100%;
        margin-left: 15px;
        h1{
           
        }
        a{
            text-decoration: none;
            color: #fff;
        }
        p:nth-of-type(1){
            width: 235px;
            margin-bottom: 10px;
            // margin-bottom: 15px;
            // line-height: 20px;
            vertical-align: middle;
            i{
                vertical-align: middle; 
                margin-right: 5px;
            }
            span:nth-of-type(2){
                margin-left: 120px;
            }
        }
        #h2{
            font-size: 22px;
            border: none;
        }
    }
}
}
#oy{
    width: 100%;
    flex: 1;
    overflow: auto;
    background-color: #f5f5f5;
    .oy1{
        border-bottom: 1px solid gainsboro;
        background-color: #fff;
        list-style: none;
        width: 100%;
        height: 125px;
        display: flex;
        li:nth-of-type(1){
            text-align: center;
            flex:1;
            padding: 30px 30px 15px 30px;
            p{
                font-size: 18px;
                margin-bottom: 10px;
                span{
                    font-size: 30px;
                    color: orange;
                }
            }
            
        }
        li:nth-of-type(2){
            border-left: 1px solid gainsboro;
            border-right: 1px solid gainsboro;
            text-align: center;
            flex:1;
            padding: 30px 30px 15px 30px;
            p{
                font-size: 18px;
                margin-bottom: 10px;
                span{
                    font-size: 30px;
                    color: red;
                }
            }
            
        }
        li:nth-of-type(3){
            text-align: center;
            flex:1;
            padding: 30px 30px 15px 30px;
            p{
                font-size: 18px;
                margin-bottom: 10px;
                span{
                    font-size: 30px;
                    color: greenyellow;
                }
            }
            
        }
    }
    .oy2{
        width: 100%;
        background-color: #fff;
        list-style: none;
        li{
            width: 100%;
            height: 60px;
            line-height: 60px;
            padding-left: 25px;
            border-bottom: 1px solid gainsboro;
        }
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .oy3{
        width: 100%;
        background-color: #fff;
        list-style: none;
        li{
            width: 100%;
            height: 60px;
            line-height: 60px;
            padding-left: 25px;
            border-bottom: 1px solid gainsboro;
        }
    }
}
}
</style>
