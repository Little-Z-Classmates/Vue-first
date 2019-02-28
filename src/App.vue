<template>
    <div class="app-container">
        <!--  头部-->
        <mt-header fixed title="Vue项目"></mt-header>
        <h1>123</h1>
        <!--底部-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }, methods : {}
    }
</script>

<style lang="less" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .app-container {
        padding-top: 40px;
    }
</style>