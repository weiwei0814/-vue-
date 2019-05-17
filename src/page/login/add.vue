<template>
    <div  class="box add">
                <h1 id='h1'>
                    <router-link to='/address'>
                        <span>
                            <i class="fa fa-fw fa-angle-left"></i></span><span>账户信息</span>
                    </router-link>
                </h1>
                <ul class="from1">
                        <li class="add1" v-if="warnName">
                            <input type="text" placeholder="请填写您的姓名"  @input="Uname" ref="uname"/>
                            <p>{{warnName}}</p>
                        </li>
                        <li v-else>
                            <input type="text" placeholder="请填写您的姓名" @input="Uname" ref="uname"/>
                        </li>
                    
                    <li>
                        <router-link to="/addDetail"><input type="text" placeholder="小区/写字楼/学校等" :value="this.val?this.val.name:''" ref="val"/></router-link>
                    </li>
                   
                        <li class="add1" v-if="warnAddress">
                           <input type="text" placeholder="请填写详细送餐地址" @input="Address" ref="address"/>
                            <p>{{warnAddress}}</p>
                        </li>
                        
                        <li v-else>
                            <input type="text" placeholder="请填写详细送餐地址" @input="Address" ref="address"/>
                        </li>
                    
                        <li class="add1" v-if="warnTel">
                           <input type="text" placeholder="请填写能够联系到您的手机号"  @input="Tel" ref="tel"/>
                            <p>{{warnTel}}</p>
                        </li>
                        
                        <li v-else>
                            <input type="text" placeholder="请填写能够联系到您的手机号" @input="Tel" ref="tel"/>
                        </li>
                  
                        <li class="add1" v-if="warnXtel">
                           <input type="text" placeholder="备用联系电话（选填）"  @input="Xtel" ref="xtel"/>
                            <p>{{warnXtel}}</p>
                        </li>
                        
                        <li v-else>
                            <input type="text" placeholder="备用联系电话（选填）" @input="Xtel" ref="xtel"/>
                        </li>
                    
                </ul>
                <div class="red">
                    <button class="green" @click="newAddress">新增地址</button>
                </div>
                
            </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            val:'',
            uname:'',
            aa:'',
            warnName:"",
            warnAddress:"",
            warnTel:'',
            warnXtel:'',
            yzm:''

        }
    },
    mounted(){
       this.val=JSON.parse(sessionStorage.getItem('data'))
        let user_id = localStorage.getItem('user_id');
        axios.get('http://elm.cangdu.org/v1/user?user_id=' + user_id).then(res => {
                this.uname= res.data.username,
                this.aa= res.data.avatar
        })
    },
    methods:{
        Uname(e){
            console.log(e.target.value)
        if(e.target.value===""){
                this.warnName="请输入您的姓名"
        }else{
                this.warnName=""
        }
    },
    Address(e){
        if(e.target.value.length<3){
                this.warnAddress="送餐地址太短了，不能辨识"
        }else{
                this.warnAddress=""
        }
    },
     Tel(e){
        let telBool=/^1[3456789]\d{9}$/.test(e.target.value);
        if(e.target.value===""){
                this.warnTel="手机号不能为空"
        }else if(!telBool){
                this.warnTel="请输入正确的手机号"
        }else{
                this.warnTel=""
        }
    },
    Xtel(e){
        let telBool=/^1[3456789]\d{9}$/.test(e.target.value);
        if(!telBool&&e.target.value.length>0){
                this.warnXtel="请输入正确的手机号"
        }else{
               this.warnXtel=""
        }
    },
     newAddress(){
        //新增地址
        // console.log(this.val.geohash)
        let data={address:this.$refs.address.value,geohash:this.val.geohash,name:this.$refs.uname.value,phone:this.$refs.tel.value,poi_type: 0,sex: 1,tag: "公司",tag_type: 4,phone_bk:this.$refs.xtel.value,address_detail:this.$refs.val.value};
       axios.post('http://elm.cangdu.org/v1/users/'+JSON.parse(localStorage.getItem('user_id'))+'/addresses',data).then(res=>{
        if(res.data.status===1){
            this.$router.push('/address')
        }else{
                this.yzm=res.data.message
        }
    })
    
    }

    }
}
</script>

<style lang='scss' scoped>
.add{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    width:100%;
    background-color: #F5F5F5;
    #h1{
        font-size: 18px;
        width: 100%;
        height: 50px;
        background-color: #188efb;
        padding: 9px 10px 15px 20px;
        i{
            vertical-align: middle;
        }
        span:nth-of-type(1){
            margin-right: 135px;
        }
        a{
            text-decoration: none;
            color: #fff;
        }
        border-bottom: 1px solid gainsboro;
    }
    .from{
        width:100%;
        margin: 0;
        margin-top: 20px;
        li{
            width:100%;
            border-bottom:2px solid #F8F8F8;
            input{
                width:100%;
                background-color: #fff;
                border:none;
                outline: none;
                padding:20px 0 20px 30px;
                font-size: 0.28rem;
            }
        }
    }
    .from1{
        list-style: none;
        width:100%;
        margin: 0;
        margin-top: 20px;
        background-color: #fff;
        padding:10px 20px;
        li{
            background-color: #fff;
            width:100%;
            height:60px;
            padding: 5px 0;
            input{
                outline: none;
                height:45px;
                padding-left: 12px;
                border-radius: 5px;
                border:none;
                width:99%;
                border:1px solid #E5E5E5;
                background-color: #F2F2F2;
            }
        }
        .add1{
            height:72px;
            p{
                margin-top: 5px;
                font-size: 11px;
                color:#EA3106;
            }
            input{
                border:1px solid  #EE7053;
            }
        }
    }
    .red{
        width:100%;
        color:#FF0000;
        p{
            margin: 0;
            font-size:10px;
            padding:0.1rem 0.05rem 0.1rem 0.2rem;
        }
        
        button{
            width:95%;
            height: 38px;
            font-size: 15px;
            color:#fff;
            background-color: #4CD964;
            border:none;
            padding: 0.15rem 0;
            margin-left: 12px;
            margin-top: 25px;
            border-radius: 5px;
            outline: none;
        }
        .green{
            color:#B7F0C1;
        }
        // .again{
        //     font-size: 0.26rem;
        //     text-align: right;
        //     margin-top: 0.2rem;
        //     padding-right: 0.2rem;
        // }
    }}
</style>
