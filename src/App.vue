<template>
    <div class="app-container">
        <!--  头部-->
        <mt-header fixed title="Vue项目">
            <span slot="left" v-show="flag" @click="goBack">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>
        <!-- 内容 -->
        <transition name="content">
            <router-view></router-view>
        </transition>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-hzw" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-hzw" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-hzw" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-hzw" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            flag : false
        }
    },
    created(){
        this.flag = this.$route.path ===  '/home'? false:true
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
    watch:{
        '$route.path' : function ( newVal ) {
            if ( newVal === '/home'){
                this.flag = false
            }else{
                this.flag = true
            }
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
    .app-container {
        position: relative;
        height: 100vh;
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .content-enter{
        opacity: 0;
        transform : translateX(100%);
    }
    .mint-header{
        z-index: 99;
    }
    .content-leave-to{
        opacity: 0;
        transform:translateX(-100%);
        position: absolute;
    }
    .content-enter-active,
    .content-leave-active{
        transition: all 1s ease;
    }

    .mui-bar-tab .mui-tab-item-hzw.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-hzw {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-hzw .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-hzw .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>