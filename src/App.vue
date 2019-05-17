<template>
 <div id="app">
    <!-- <div id="header">
    <my-header></my-header>
    </div>  -->
    <div id="con">
      <router-view></router-view>
    </div>
    <div id="footer" >
    <my-footer>
    </my-footer>
    </div>
  </div>
</template>

<script>
import myFooter from './page/Footer'
// import myHeader from './components/header/head'
export default {
 components:{
        myFooter
    },
    mounted(){
        console.log(this.$route)
    }
}
</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    font-size: 16px;
    box-sizing: border-box;
}
body,html{
    width: 100%;
    height: 100%;
}
ul{
    list-style: none;
}
#app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // #header{
    //     width: 100%;
    //     height: 60px;
    //     background-color: #3792E5;
    // }
    #con{
        flex: 1;
        overflow: auto;
    }
    #footer{
        width: 100%;
        height: 70px;
    }
}
</style>
