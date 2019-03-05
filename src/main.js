import Vue from "vue"
//导入vue-router
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 导入vue-resource
import VueResource from "vue-resource"
Vue.use( VueResource )

// 导入 Vuex
var shoppingCar = JSON.parse( localStorage.getItem('shopCarInfo')  || '[]' )
import Vuex from "vuex"
Vue.use( Vuex )
const store = new Vuex.Store({
    state:{
        shopCar: shoppingCar  // { id : 商品ID , count : 商品数量 , price : 商品单价 , selected : false }
    },
    mutations:{
        // 在shopCar中 添加对象 , 同一个id 只添加数量, 不同id 添加对象
        addShopCar( state,shopCarObj ){
            var flag = false
            state.shopCar.some( item =>{
                if ( item.id === shopCarObj.id ){
                     flag = true
                     item.count = parseInt( item.count ) +  parseInt( shopCarObj.count )
                     return true
                }
            })
            if ( !flag ){
                state.shopCar.push( shopCarObj )
            }
            localStorage.setItem('shopCarInfo',JSON.stringify(state.shopCar))
        },

    },
    getters:{
        // 得到所有商品的总数
        getAllCount(state){
            var num = 0
            state.shopCar.forEach( item =>{
                num += parseInt(item.count)
            })
            return num
        }
    }
})

// 对请求根路径 进行全局配置
Vue.http.options.root = "http://www.liulongbin.top:3005"
Vue.http.options.emulateJSON = true;

//缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// Mint-UI 导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

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
    router : router,
    store : store
} )