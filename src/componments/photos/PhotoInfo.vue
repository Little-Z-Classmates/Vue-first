<template>
    <div class="PhotoInfo-container">
        <!-- 头部 -->
        <h3 class="headtitle">{{ photoInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间: {{ photoInfo.add_time | dateFormat }}</span>
            <span>点击: {{ photoInfo.click }}次</span>
        </p>
        <hr>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
</template>

<script>
    import { Toast } from "mint-ui"

    export default {
        data () {
            return {
                id : this.$route.params.id, photoInfo : {}, slide1 : []
            }
        },
        created () {
            this.getPhotoInfo ()
            this.getPhotoImgs ()
        },
        methods : {
            getPhotoImgs () {
                this.$http.get ( "api/getthumimages/" + this.id )
                .then ( results => {
                    if ( results.body.status === 0 ) {
                        Toast ( "获取略缩图成功.." )
                        results.body.message.forEach ( item => {
                            var imgObj = {
                                src : item.src,
                                msrc : item.src,
                                alt : "picture1",
                                title : "Image Caption 1",
                                w : 300,
                                h : 200
                            }
                            this.slide1.push ( imgObj )
                        } )
                    } else {
                        Toast ( "失败" )
                    }
                } )
            },
            getPhotoInfo () {
                this.$http.get ( "api/getimageInfo/" + this.id ).then ( results => {
                    if ( results.body.status === 0 ) {
                        Toast ( "获取图文详情成功." )
                        this.photoInfo = results.body.message[ 0 ]
                    } else {
                        Toast ( "获取图文详情失败.." )
                    }
                } )
            },
            handleClose () {
                console.log ( "close event" )
            }
        }
    }
</script>

<style lang="less" scoped>
    .PhotoInfo-container {
        padding: 0 4px;
        .headtitle {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }

    }

</style>