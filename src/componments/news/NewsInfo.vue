<template>
    <div class="newsinfo-container">
        <!--头 -->
        <h3 class="headtitle">{{ message.title }}</h3>
        <p class="subtitle">
            <span>发表时间: {{ message.add_time | dateFormat }}</span>
            <span>点击: {{ message.click }}次</span>
        </p>
        <hr>
        <!-- 内容 -->
        <div class="content" v-html="message.content"></div>

        <!-- 评论内容子组件-->
        <comment-box v-bind:artid="this.id"></comment-box>
    </div>
</template>

<script>
    import  { Toast } from "mint-ui"
    import  comment from "../subcomponments/comment.vue"
    export default {
        data () {
            return {
                id : this.$route.params.id,
                message : {}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods : {
            getNewsInfo () {
                this.$http.get ( "http://www.liulongbin.top:3005/api/getnew/" + this.id ).then ( results => {
                  if ( results.body.status === 0 ){
                      Toast("获取图文详情成功.")
                      this.message = results.body.message[0]
                  }else{
                      Toast("获取图文详情失败..")
                  }
                } )
            }
        },
        components:{
            'comment-box' : comment
        }
    }
</script>

<style lang="less" scoped>
    .newsinfo-container {
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
        .content {
        }
    }
</style>