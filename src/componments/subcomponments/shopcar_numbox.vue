<template>
    <span >
       <span class="mui-numbox" data-numbox-step='1' data-numbox-min='1' style="height: 25px" >
       <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
       <input class="mui-numbox-input" type="number" />
       <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
       </span>
    </span>
</template>

<script>
    import mui from "../../lib/mui/js/mui.js"
    export default {
        methods:{
            // 数量改变了
        },
        mounted(){
            mui('.mui-numbox').numbox()
        },
        props:['maxGoods'],

    }
</script>

<style scoped>

</style>