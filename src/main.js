import Vue from "vue"
// Mint-Ui
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
//导入MUI
import "./lib/mui-master/dist/css/mui.min.css"


import app from './App.vue'

const vm = new Vue ( {
    el : "#app",
    render : c => c ( app )
} )