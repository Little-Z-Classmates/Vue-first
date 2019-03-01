/**
 *@作者 : 小Z同学
 *@TheFileFunction ：
 *@CreatedDate : 2019/2/28
 **/

import VueRouter from "vue-router"
import HomeContainer from "./componments/tabbar/HomeContainer.vue"
import MemberContainer from "./componments/tabbar/MemberContainer.vue"
import ShopcarContainer from "./componments/tabbar/ShopcarContainer.vue"
import SearchContainer from "./componments/tabbar/SearchContainer.vue"

const vueRouterObj = new VueRouter ( {
    routes : [
        { path : "/", redirect :"/home"},
        { path : "/home", component : HomeContainer },
        { path : "/member", component : MemberContainer },
        { path : "/shopcar", component : ShopcarContainer },
        { path : "/search", component : SearchContainer }
        ],
    linkActiveClass : "mui-active"
} )

export default vueRouterObj