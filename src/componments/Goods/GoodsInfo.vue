<template>
    <div class="goodsInfo">
        <div class="mui-content">
            <!-- 商品轮播区域-->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <swiper :lunbotuList="lunboImgList" :isfull="false"></swiper>
                    </div>
                </div>
            </div>
            <!-- 商品购买区域-->
            <div class="mui-card">
                <div class="mui-card-header">页眉</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                    </div>
                </div>
            </div>
            <!-- 商品参数区域-->
            <div class="mui-card">
                <div class="mui-card-header">页眉</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                    </div>
                </div>
                <div class="mui-card-footer">页脚</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    import  swiper from "../subcomponments/swiper.vue"

    export default {
        data () {
            return {
                lunboImgList : [ ],
                id : this.$route.params.id
            }
        },
        created(){
          this.getlunbotu( this.id )
        },
        methods : {
            getlunbotu ( id ) {
                this.$http.get ( "api/getthumimages/" + id )
                .then ( results => {
                    if ( results.body.status == 0 ) {
                        results.body.message.forEach( item =>{
                            item.img = item.src
                        })
                        this.lunboImgList = results.body.message
                    } else {
                        Toast ( "缩略图no.." )
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
    .goodsInfo {
        background-color: #efeff4;
        overflow: hidden;
    }
</style>