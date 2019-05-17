<template>
  <header id="head_top">
    <!-- logo部分 -->
    <slot name="logo"></slot>
    <!-- 返回上一级 -->
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <i class="fa fa-fw fa-angle-left"></i>
    </section>
    <!-- 标题 -->
    <section class="title" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <!-- 用户登录显示 -->
    <router-link :to="login?'/profile':'/login'" v-if="signinUp" class="head_login">
      <img v-if="login" src="../../image/2.png">
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <section class="head_login" v-if="wan" @click="bian">
      <span v-if="isShow">编辑</span>
      <span v-else>完成</span>
    </section>
    
  </header>
</template>

<script>
export default {
  props:['goBack','signinUp','headTitle','wan','bj','success'],
    data(){
        return{
            login:false,
            isShow:true
        }
    },
    methods:{
      bian(){
        this.isShow=!this.isShow
      }
    }
};
</script>

<style lang='scss' scoped>
a{
   color: white;
}
header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #3792e5;
    position: relative;
    align-items: center;
    padding: 0 0.6rem;
    color: white;
    .head_goback{
      position: absolute;
      left: 15px;
    }
    .title{
       position: absolute;
      left: 150px;
    }
    .head_login{
      position: absolute;
      right: 15px;
    }
    p:nth-of-type(1){
        font-size: 1rem;
        color: white;
    }
    p:nth-of-type(3){
        img{
            width: 1.3rem;
            height: 1.6rem;
        }
    }
}
</style>
