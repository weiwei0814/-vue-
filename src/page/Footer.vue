<template>
    <div>
      <footer>
      <ul>
        <router-link tag='li' to='/take'>外卖</router-link>
        <router-link tag='li' to='/search'>搜索</router-link>
        <router-link tag='li' to='/goods'>订单</router-link>
        <router-link tag='li' to='/my'>我的</router-link>
      </ul>
    </footer>  
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
footer{
    width: 100%;
    height: 70px;
    ul{
      list-style: none;
      width: 100%;
      height: 70px;
      line-height: 70px;
      display: flex;
      padding: 0 35px 0 35px;
      justify-content: space-around;
      li{
        font-size: 20px;
      }
    }
  }
</style>
