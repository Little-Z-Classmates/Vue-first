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
        shopCar: shoppingCar  // [ { id : 商品ID , count : 商品数量 , price : 商品单价 , selected : false }, .... ]
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
       // 根据Id 和 count值 来修改 shopCar 中的 商品对应的 count
        updateShopCarCount(state,shopCarCountObj){
             state.shopCar.some(item =>{
                 if ( item.id == shopCarCountObj.id ){
                     item.count = parseInt(shopCarCountObj.count)
                     return true
                 }
             })
            localStorage.setItem('shopCarInfo',JSON.stringify(state.shopCar))
        },
       // 根据ID 删除 shopCar 的相应 数据
        remove( state , id ){
            state.shopCar.some( ( item,key ) =>{
                if ( item.id  == id ){
                     state.shopCar.splice( key, 1 )
                    return true
                }
            })
            localStorage.setItem('shopCarInfo',JSON.stringify(state.shopCar))
        },
       // 根据Id 修改 shopCar 中商品对应的 选中状态
        updateShopCarSelected(state,shopCarSelectedObj){
            state.shopCar.some( item =>{
                if ( item.id == shopCarSelectedObj.id ){
                     item.selected = shopCarSelectedObj.selected
                     return true
                }
            })
            localStorage.setItem('shopCarInfo',JSON.stringify(state.shopCar))
        }
    },
    getters:{
        // 得到所有商品的总数
        getAllCount(state){
            var num = 0
            state.shopCar.forEach( item =>{
                num += parseInt(item.count)
            })
            return num
        },
        //  得到shopCar 中的数据,以 id: count 的当时 组织成一个对象
        getIdAndCount(state){
            var IdAndConut = {}
            state.shopCar.forEach( item =>{
                IdAndConut[item.id] = parseInt(item.count)
            })
            return IdAndConut
        },
        // 根据Id , 获取 id : selected 键值对
        getIdAndSelected(state){
            var IdAndSelectedObj = {}
            state.shopCar.forEach( item => {
                IdAndSelectedObj[item.id] = item.selected
            })
            return IdAndSelectedObj
        },
        // 得到总件数,和总价
        getAllCountAndPrice(state){
            var AllCount = 0;
            var AllPrice = 0;
            state.shopCar.forEach( item  =>{
                if ( item.selected === true ){
                     AllCount += item.count
                     AllPrice += item.count * item.price
                }
            })
             var AllCountAndPriceObj = {
                 AllCount : AllCount,
                 AllPrice : AllPrice
             }
            return AllCountAndPriceObj
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