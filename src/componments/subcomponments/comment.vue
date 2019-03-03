<template>
    <div class="cmt-contaniner">
        <h3>评论区域</h3>
        <hr>
        <textarea maxlength="180" placeholder="最多吐槽180字.." v-model="textareaMsg"></textarea>
        <mt-button type="primary" size="large" @click="uploadComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item ,index) in datalist" :key="index">
                <div class="cmt-title">
                    第{{ index+1 }}楼 &nbsp;&nbsp;用户 : {{ item.user_name}} &nbsp;&nbsp;发表时间:{{ item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{ item.content === '' ? '啥也没有': item.content }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import  { Toast } from "mint-ui"
    export default {
       data(){
           return {
               datalist :[],
               pageIndex : 1,
               textareaMsg: ''
           }
       },
        created(){
            this.getComments( this.pageIndex )
        },
        methods:{
           getComments(){
               this.$http.get("api/getcomments/"+this.artid+"?pageindex="+ this.pageIndex).then( results =>{
                   if ( results.body.status == 0 ){
                       // Toast("获取评论列表数据成功.")
                       // this.datalist = results.body.message
                       this.datalist = this.datalist.concat(results.body.message)
                   }else{
                       Toast("获取评论列表数据失败.")
                   }
               })
           },
            getMore(){
                this.pageIndex = this.pageIndex + 1
                this.getComments()
            },
            uploadComment(){
                 if ( this.textareaMsg.trim().length ===  0 ){
                     return Toast ( '填写评论为空,请重新填写!!')
                 }
                 this.$http.post('api/postcomment/'+ this.artid ,{ content : this.textareaMsg })
                 .then( results => {
                     if( results.body.status === 0 ){
                        var cmtObj = {
                            username : "匿名用户",
                            add_time : Date.now(),
                            content : this.textareaMsg
                        }
                         this.datalist.unshift( cmtObj )
                         this.textareaMsg = ''
                         Toast( results.body.message )
                     }else{
                         Toast( results.body.message )
                     }
                 })
            }
        },
        props:['artid']
    }
</script>

<style lang="less" scoped>
    .cmt-contaniner {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 5px 0 ;
            .cmt-item{
                font-size: 13px;
                .cmt-title {
                    background-color: #ccc;
                    line-height: 30px;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }

        }

    }
</style>