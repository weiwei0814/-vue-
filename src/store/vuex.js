import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
import VuePersist from 'vuex-persist'
const vuexLocal=new VuePersist({
    storage:window.localStorage
})
export default new vuex.Store({
    plugins:[vuexLocal.plugin],//安装插件
    state:{
        //存储变量
        list:[]
    },
    // actions:{
    //     myAsync(state){
    //         //执行异步操作
    //         console.log("进入actions")
    //         state.commit('async');
    //     }
    // },
    mutations:{
        // history(state,item){
        //     if(state.list.indexOf(item)!==-1){
        //         state.list.splice(state.list.indexOf(item),1)
        //       }
        //       state.list.push(item)
        //     //   console.log(state.list)
            
        // },
        clear(state){
            state.list.splice(0)
        }
    }
})