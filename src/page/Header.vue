<template>
  <div class="hello">
    <div id="box">
    <header>
      <p>
          <img src="../image/1.png" alt="">
          <span>北京吉利大学</span>
          <img src="../image/2.png" alt="">
      </p>
    </header>
    <div id="con">
      <div id="b1">
      <ul class="a1">
        <li>
          <img src="../image/3.png" alt="">
          <span>甜品饮品</span>
        </li>
        <li>
          <img src="../image/3.png" alt="">
          <span>甜品饮品</span>
        </li>
        <li>
          <img src="../image/3.png" alt="">
          <span>甜品饮品</span>
        </li>
        <li>
          <img src="../image/3.png" alt="">
          <span>甜品饮品</span>
        </li>
        </ul>
        <ul class="a1">
          <li>
          <img src="../image.3png" alt="">
          <span>甜品饮品</span>
        </li>
        <li>
          <img src="../image.3png" alt="">
          <span>甜品饮品</span>
        </li>
        <li>
          <img src="../image.3png" alt="">
          <span>甜品饮品</span>
        </li>
        <li>
          <img src="../image.3png" alt="">
          <span>甜品饮品</span>
        </li>
      </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
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
  padding: 10px 20px 10px 20px;
    width: 100%;
    height: 60px;
    line-height: 40px;
    font-size: 26px;
    background-color: #3792E5;
    color: #ffffff;
    text-align: center;
    img:nth-of-type(1){
      width: 40px;
      float: left;
    }
    img:nth-of-type(2){
      width: 35px;
      float: right;;
    }
}
#con{
  width: 100%;
  flex: 1;
  overflow: auto;
  ul{
    list-style: none;
  }
  #b1{
    width: 100%;
    height: 240px;
  ul{
    padding: 0px 20px 0px 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
   }
}
}
</style>

