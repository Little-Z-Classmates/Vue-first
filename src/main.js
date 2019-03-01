import Vue from "vue"
//导入vue-router
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 导入vue-resource
import VueResource from "vue-resource"
Vue.use( VueResource )
// Mint-Ui 导入  头部
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
// Mint-UI 导入 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component( Swipe.name, Swipe );
Vue.component( SwipeItem.name, SwipeItem );
// 导入MUI
import "./lib/mui-master/dist/css/mui.min.css"
import  "./lib/mui-master/examples/hello-mui/css/icons-extra.css"

// 导入自己的路由
import router from "./router.js"
// 导入app界面
import app from './App.vue'

const vm = new Vue ( {
    el : "#app",
    render : c => c ( app ),
    router : router
} )