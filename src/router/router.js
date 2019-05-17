import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// import Take from '@/components/project/Take-out'
// import goods from '@/components/project/goods'
// import search from '@/components/project/search'
// import addSearch from '@/components/project/addSearch'
// import goodSearch from '@/components/project/addSearch'
// import City from '@/components/project/City'
Vue.use(Router)
//路由懒加载
const Take =resolve => require(['../page/home/Take-out.vue'],resolve)
const My =resolve => require(['../page/home/My.vue'],resolve)
const City =resolve => require(['../page/city/City.vue'],resolve)
const goods =resolve => require(['../page/project/goods.vue'],resolve)
const search =resolve => require(['../page/project/Search.vue'],resolve)
const addSearch =resolve => require(['../page/project/addSearch.vue'],resolve)
const goodSearch =resolve => require(['../page/project/goodSearch.vue'],resolve)
const login =resolve => require(['../page/login/login.vue'],resolve)
const info =resolve => require(['../page/login/info.vue'],resolve)
const address =resolve => require(['../page/login/address.vue'],resolve)
const add =resolve => require(['../page/login/add.vue'],resolve)
const addDetail =resolve => require(['../page/login/addDetail.vue'],resolve)
const forget =resolve => require(['../page/login/forget.vue'],resolve)
const AA =resolve => require(['../components/cheshi/aa.vue'],resolve)
const BB =resolve => require(['../components/cheshi/bb.vue'],resolve)
const Pbl =resolve => require(['../components/cheshi/pubuliu.vue'],resolve)
// const zhiHu =resolve => require(['../page/project/zhihu.vue'],resolve)
export default new Router({
  routes: [
    {
      path: '/',
      // name: 'App',
      component: App,
      redirect:App,   
      children:[
        {
          path: '/my',
          name: 'my',
          component: My,
          footerHas:true,
        },
        {
          path: '/take',
          name: 'take',
          component: Take,
          footerHas:true,
        },
        {
          path: '/take?geohash=:geohash',
          name: 'take',
          component: Take,
          meta:true
        },
        {
          path: '/goods?geohash=:geohash,:geo/:id',
          name: 'goods',
          component: goods,
          meta:false
        },
        {
          path: '/search',
          name: 'search',
          component: search
        },
        {
          path: '/addSearch/:id',
          name: 'addSearch',
          component: addSearch
        },
        {
          path: '/goodSearch',
          name: 'goodSearch',
          component: goodSearch
        },
        {
          path: '/city',
          name: 'city',
          component: City,
          meta:false
        },
        {
          path: '/login',
          name: 'login',
          component: login,
          meta:false
        },
        {
          path: '/info',
          name: 'info',
          component: info
        },
        {
          path: '/address',
          name: 'address',
          component: address
        },
        {
          path: '/add',
          name: 'add',
          component: add
        },
        {
          path: '/addDetail',
          name: 'addDetail',
          component: addDetail
        },
        {
          path: '/forget',
          name: 'forget',
          component: forget
        },
        {
          path: '/aa',
          name: 'aa',
          component: AA
        },
        {
          path: '/bb',
          name: 'bb',
          component: BB
        },
        {
          path: '/pbl',
          name: 'pbl',
          component: Pbl
        },
      ]
    }
    
  ]
})
