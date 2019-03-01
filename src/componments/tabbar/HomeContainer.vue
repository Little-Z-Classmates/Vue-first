<template>
    <div>
        <!-- 内容中间 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <!-- nav 区域 -->
        <div class="mui-content" style="transform: translateY(-15px)">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                    <img src="../../lib/img/六宫格小图标/menu1.png" alt="">
                    <div class="mui-media-body">新闻咨询</div></a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                    <img src="../../lib/img/六宫格小图标/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                    <img src="../../lib/img/六宫格小图标/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                    <img src="../../lib/img/六宫格小图标/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                    <img src="../../lib/img/六宫格小图标/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
                    <img src="../../lib/img/六宫格小图标/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import  { Toast } from "mint-ui"
    export default {
        data () {
            return {
                lunbotuList : null
            }
        },
        created () {
            this.getLunbotu ()
        },
        methods : {
            getLunbotu () {
                this.$http.get ( "http://www.liulongbin.top:3005/api/getlunbo" ).then ( results => {
                    if ( results.body.status == 0 ) {
                        this.lunbotuList = results.body.message
                        Toast("加载轮播图ok..")
                    }else{
                        Toast("加载轮播图失败...")
                    }
                } )
            }
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
        .mint-swipe {
            height: 200px;
            .mint-swipe-item {
                &:nth-child(1) {
                    background-color: lavenderblush;
                }
                &:nth-child(2) {
                    background-color: blue;
                }
                &:nth-child(3) {
                    background-color: yellow;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
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