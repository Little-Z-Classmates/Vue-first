<template>
    <div>
        <!-- 内容中间 -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        <!-- nav 区域 -->
        <div class="mui-content" style="transform: translateY(-15px)">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4">
                    <router-link to="/home/newslist">
                       <img src="../../lib/img/六宫格小图标/menu1.png" alt="">
                       <div class="mui-media-body">新闻咨询</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4">
                    <router-link to="/home/photolist">
                    <img src="../../lib/img/六宫格小图标/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4">
                    <router-link to="/home/goodslist">
                    <img src="../../lib/img/六宫格小图标/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="#">
                    <img src="../../lib/img/六宫格小图标/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="#">
                    <img src="../../lib/img/六宫格小图标/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><router-link to="#">
                    <img src="../../lib/img/六宫格小图标/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import  { Toast } from "mint-ui"
    import  swiper from  "../subcomponments/swiper.vue"

    export default {
        data () {
            return {
                lunbotuList : [ ]
            }
        },
        created () {
            this.getLunbotu ()
        },
        methods : {
            getLunbotu () {
                this.$http.get ( "api/getlunbo" ).then ( results => {
                    if ( results.body.status == 0 ) {
                        this.lunbotuList = results.body.message
                        Toast("加载轮播图ok..")
                    }else{
                        Toast("加载轮播图失败...")
                    }
                } )
            }
        },
        components:{
            swiper
        }
    }
</script>

<style lang="less" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
    }

        .mui-grid-view.mui-grid-9{
            border: 0;
            background-color: #fff;
        }
        .mui-content{
            font-size: 13px;
            img{
                width: 60px;
                height: 60px;
            }
        }

</style>