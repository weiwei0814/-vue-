// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import Mint from 'mint-ui';
import FastClick from 'fastclick'//移动端300秒延迟
import store from './store/vuex'
import 'mint-ui/lib/style.css';
import betterScroll from "better-scroll";
// import 'font-awesome/css/font-awesome.min.css';
// import '../src/style/font-awesome.min.css'; //https://www.jianshu.com/p/901c7eaed40f
Vue.use(Mint);
Vue.config.productionTip = false
import axios from 'axios'
axios.defaults.withCredentials=true;//默认携带cookie
Vue.prototype.axios=axios;
//移动端300秒延迟
if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded',function(){
    FastClick.attach(document.body);
  },false);
}
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  betterScroll
  // components: { App },
  // template: '<App/>'
}).$mount('#app')
