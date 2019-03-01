import Vue from "vue"
//导入vue-router
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 导入vue-resource
import VueResource from "vue-resource"
Vue.use( VueResource )
// 对请求根路径 进行全局配置
Vue.http.options.root = "http://www.liulongbin.top:3005"

// Mint-UI 导入 轮播图 ,导入  头部 , 导入按钮
import { Swipe, SwipeItem,Header,Button } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component( Swipe.name, Swipe );
Vue.component( SwipeItem.name, SwipeItem );
Vue.component( Button.name, Button );

// 导入MUI
import "./lib/mui-master/dist/css/mui.min.css"
import  "./lib/mui-master/examples/hello-mui/css/icons-extra.css"

// 定义全局过滤器,过滤时间,用moment 插件
import  moment from "moment"
Vue.filter('dateFormat',function ( dataStr, pattern = "YYYY-MM-DD HH:mm:ss" ) {
    return moment(dataStr).format(pattern)
})

// 导入自己的路由
import router from "./router.js"
// 导入app界面
import app from './App.vue'

const vm = new Vue ( {
    el : "#app",
    render : c => c ( app ),
    router : router
} )