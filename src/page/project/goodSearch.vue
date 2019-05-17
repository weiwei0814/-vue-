<template>
    <div>
       <header>
            <!-- <p><</p> -->
            <router-link tag="p" to="/demo1"><</router-link>
            <p>搜索</p>
            <p></p>
       </header>
       <div class="content">
            <div class="con">
                <p><input type="text" placeholder="牛肉"><button>提交</button></p>
            </div>
            <div class="coe">
                <p>商家</p>
            </div>
            <div class="cot">
                <dl>
                    <dt><img src="../../image/16.png" alt=""></dt>
                    <dd>
                        <p><span>我的牛肉面</span><span>支付</span></p>
                        <p>月售 601 单</p>
                        <p>5 元起送/距离2159.2公里</p>
                    </dd>
                </dl>
            </div>
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 2.5rem;
    background: #3792e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.6rem;
    p:nth-of-type(1){
        font-size: 1rem;
        color: white;
    }
    p:nth-of-type(2){
        font-size: 0.8rem;
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
                height: 2rem;
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
        }
    }
    .cot{
        width: 100%;
        background: white;
        dl{
            width: 100%;
            display: flex;
            padding: 0.3rem;
            dt{
               width: 20%;
               img{
                   width: 4rem;
                   height: 4rem;;
               }
            }
            dd{
               width: 80%;
               p:nth-of-type(1){
                   display: flex;
                   padding-top: 0.5rem;
                   span:nth-of-type(1){
                       font-size: 0.8rem;
                   }
                   span:nth-of-type(2){
                       display: block;
                       font-size: 0.8rem;
                       border: 1px solid red;
                       color: red;
                       margin-left: 0.5rem; 
                   }
               }
                p:nth-of-type(2){
                    font-size: 1rem;
                    padding-top: 0.2rem;
                }
                p:nth-of-type(3){
                    font-size: 1rem;
                    padding-top: 0.2rem;
                    padding-bottom: 0.3rem;
                    border-bottom: 1px solid #cccccc;
                }
            }
        }
    }
}
footer{
    width: 100%;
    height: 3rem;

    ul{
        padding-top:0.3rem; 
        width: 100%;
        height: 100%;
        border-top: 1px solid #e4e4e4;
        list-style: none;
        display: flex;
        li{
            flex: 1;
            text-align: center;
            img{
                width: 1rem;
                height: 1rem;
            }
            span{
                display: block;
                font-size: 0.5rem;
                color: #7b7b7b;
            }
        }
    }
}
</style>
