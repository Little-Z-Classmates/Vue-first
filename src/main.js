import Vue from "vue"
//导入vue-router
import VueRouter from "vue-router"
Vue.use(VueRouter)
// Mint-Ui
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
//导入MUI
import "./lib/mui-master/dist/css/mui.min.css"
import  "./lib/mui-master/examples/hello-mui/css/icons-extra.css"
import app from './App.vue'
// 导入自己的路由
import router from "./router.js"

const vm = new Vue ( {
    el : "#app",
    render : c => c ( app ),
    router : router
} )