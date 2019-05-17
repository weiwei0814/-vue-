<template>
    <div id='info'>
    <header>
      <router-link tag="p" to="/my"><</router-link>
      <p>账户信息</p>
      <p></p>
    </header>
                <div id='infoCon'>
                    <ul id='infoA'>
                        <li>
                            <p>头像</p>
                            <div class='avatar'>
                                
                                <p v-if="this.bb">
                             <img :src="this.bb" />
                             <label>></label>
                             </p>
                            <p v-else>
                            <img :src="'//elm.cangdu.org/img/' + this.aa" />
                            <label>></label>
                            </p>

                            <input type="file" class="upload" accept="image/jpeg, image/jpg, image/png" @change="handFile" />
                                </div></li>
                        <li><p>用户名</p><span>{{uname}}<router-link to='/setusername'>
                        <label>></label>
                        </router-link></span></l>
                        <li><p>收货地址</p><span><router-link to='/address'>
                        <label>></label>
                        </router-link></span></li>
                    </ul>
                    <ul id='infoB'>
                        <li class='b'>账号绑定</li>
                        <li class='a'><p>
                            <i class="fa fa-fw fa-mobile-phone"></i>
                            手机
                    </p><span>
                        <label>></label>
                    </span></li>
                        <li class='b'>安全登录</li>
                        <li class='a'><p>登录密码</p><span><router-link to='/forget'>修改
                        <label>></label>
                        </router-link></span></li>
                    </ul>
                    
                    <p><button @click="loRemove">退出登录</button></p>
                    
                </div>
            </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
             uname: '',//用户名
            aa: '',//头像
            bb: '',//本地图片
        }
    },
    mounted(){
      //本地用户
        // console.log(this.props.match.params.uname)
        let user_id = localStorage.getItem('user_id');
        axios.get('http://elm.cangdu.org/v1/user?user_id=' + user_id).then(res => {
            // console.log(res.data)
                this.uname=res.data.username,
                this.aa= res.data.avatar
        })  
    },
    methods:{
         //点击上传头像
    handFile(e) {
        e.preventDefault()//防止上面的链接打开 URL。preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
        let $target = e.target || e.srcElement;//获取input file标签 表示调用他的各种属性 两个的区别是：ie下支持e.srcElement，火狐支持e.target
        let file = $target.files[0];//表示取第一张图
        console.log(file)//获取到本地当前所选图片
        var reader = new FileReader();//FileReader 对象允许Web应用程序异步读取存储在用户
                                    //计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。 
        reader.onload = data => {//onload事件会在页面或图像加载完成后立即发生
            let res = data.target || data.srcElement;
            this.bb = res.result;
            
            console.log(res)//res是FileReader这个函数
        }
        //// 通过FormData将文件转成二进制数据
        let formData = new FormData(); //实例化
        formData.append('file', file);//原型
         const instance=axios.create({
            withCredentials: true
            // 需要设置 withCredentials：true , 表示跨域请求时是否需要使用凭证. 默认为false
           }) 
        instance.post('http://elm.cangdu.org/eus/v1/users/'+JSON.parse(localStorage.getItem('user_id'))+'/avatar',formData)
        .then(res => {
            console.log(res)
        })
        //FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL
        reader.readAsDataURL(file);
    },
        loRemove(){
        //退出登录
        localStorage.removeItem('user_id')
        localStorage.removeItem('shopCar')
        this.$router.push('/my')
    }
    }
}
</script>

<style lang='scss' scoped>
#info{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img{
        width: 80px;
    }
    a{
        text-decoration: none;
        color:black;
    }
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
    #infoCon{
        width: 100%;
        height: 93.2%;
        background-color:#F2F2F2;
        padding-top: 15px;
        #infoA{
        overflow: hidden;
        width: 100%;
        height: 200px;
        background-color: #fff;
        list-style: none;
        .avatar{
            width: 95px;
            position: relative;
            span{
                display: inline-block;
                display: flex;
                padding-top: 15px;
            }
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                vertical-align: middle;
            }
            label{
                margin-left: 12px;
                font-size: 22px;
                color: #ccc;
            }
            input{
                z-index: 555;
                width: 60px;
                border: none;
                outline: none;
                opacity:0;
                position: absolute;
                top: 34px;
                // display: none;
            }
        }
        li:nth-of-type(1){
            height:90px;
            line-height: 90px;
            img{
                vertical-align: middle;
                width: 60px;
                border-radius: 50%;
                
            }
        }
        li{
            label{
                margin-left: 15px;
                font-size: 22px;
                color: #ccc;
            }
            height: 55px;
            line-height: 55px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid gainsboro;
            span{
                display: block;
                i{
                    margin-left: 10px;
                    font-size: 20px;
                }
            }
            
        }
    } 
    #infoB{
        label{
                margin-left: 15px;
                font-size: 22px;
                color: #ccc;
            }
        width: 100%;
        height: 200px;
        list-style: none;
        .a{
            padding-left: 10px;
            padding-right: 10px;
            height: 60px;
            line-height: 60px;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            span{
                display: block;
            }
            i{
                vertical-align: middle;
                font-size: 26px;
            }
        }
        .b{
            padding-left: 10px;
            padding-right: 10px;
            height: 40px;
            line-height: 40px;
            background-color: #F2F2F2;
            
        }
    }
    p{
        button{
            width: 380px;
            border: none;
            border-radius: 6px;
            margin-left: 20px;
            margin-top: 40px;
            height: 40px;
            background-color: red;
            color: #fff;
            text-align: center;
            line-height: 40px;
        }
    }
    }
   
}

</style>
