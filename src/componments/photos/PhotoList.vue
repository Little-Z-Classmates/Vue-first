<template>
    <div>
        <!-- 图片顶部滑动区域-->
        <div class="mui-content">
            <div id="slider" class="mui-slider ">
                <div id="sliderSegmentedControl"
                     class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.id === 0 ? 'mui-active' : '']"
                           v-for="item in caetgoryNameList" :key="item.id" @click="getCategoryImg(item.id)">
                            {{ item.title }}
                        </a>
                    </div>
                </div>

            </div>
        </div>

        <!-- 图片列表区域 -->
        <ul class="photoList">
            <router-link  v-for="item in imgList"  :to="'/home/photoinfo/'+item.id" tag="li" :key="item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    import mui from "../../lib/mui/js/mui.js"
    // mui('body').on( 'tap' , 'a' , function(){
    //     document.location.href=this.href;
    // } )
    export default {
        data () {
            return {
                caetgoryNameList : [], imgList : []
            }
        },
        mounted () {
            mui ( ".mui-scroll-wrapper" ).scroll ( {
                deceleration : 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            } )
        },
        created () {
            this.getCategory ()
            this.getCategoryImg ( 0 )
        },
        methods : {
            getCategory () {
                this.$http.get ( "api/getimgcategory" )
                .then ( results => {
                    if ( results.body.status === 0 ) {
                        Toast ( "获取类别成功" )
                        results.body.message.unshift ( { title : "全部", id : 0 } )
                        this.caetgoryNameList = results.body.message
                    } else {
                        Toast ( "获取类别失败" )
                    }
                } )
            },
            getCategoryImg ( id ) {
                this.$http.get ( "api/getimages/" + id )
                .then ( results => {
                    if ( results.body.status === 0 ) {
                        this.imgList = results.body.message
                    } else {
                        Toast ( "获取img错误..." )
                    }
                } )
            }
        }
    }
</script>

<style lang="less" scoped>
    /**{*/
    /*touch-action: pan-y ;*/
    /*}*/
    .photoList {
        li {
            margin: 10px 10px 0 10px  ;
            background-color: #ccc;
            position: relative;
            img[ lazy = "loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            img{
                vertical-align: middle;
                margin: 0 auto;
                display: block;
                width: 100%;
                box-shadow: 0px 0px 10px 2px black;
            }
            .info{
                color: #fff;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                width: 100%;
                max-height: 84px;
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
        }
    }

</style>