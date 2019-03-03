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
import NewsList from "./componments/news/NewsList.vue"
import NewsInfo from "./componments/news/NewsInfo.vue"
import PhotoList from "./componments/photos/PhotoList.vue"
import PhotoInfo from "./componments/photos/PhotoInfo.vue"
import GoodsList from "./componments/Goods/GoodsList.vue"
import GoodsInfo from "./componments/Goods/GoodsInfo.vue"

const vueRouterObj = new VueRouter ( {
    routes : [
        { path : "/", redirect :"/home"},
        { path : "/home", component : HomeContainer },
        { path : "/member", component : MemberContainer },
        { path : "/shopcar", component : ShopcarContainer },
        { path : "/search", component : SearchContainer },
        { path : "/home/newslist", component : NewsList },
        { path : "/home/newsinfo/:id", component : NewsInfo },
        { path : "/home/photolist", component : PhotoList },
        { path : "/home/photoinfo/:id", component : PhotoInfo },
        { path : "/home/goodslist", component : GoodsList },
        { path : "/home/goodsinfo/:id", component : GoodsInfo },
        ],
    linkActiveClass : "mui-active"
} )

export default vueRouterObj