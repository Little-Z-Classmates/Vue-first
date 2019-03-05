<template>
    <span >
       <span class="mui-numbox" data-numbox-step='1' data-numbox-min='1' >
       <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
       <input class="mui-numbox-input" type="number" @change="countChange" ref="numBox" />
       <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
       </span>
    </span>
</template>

<script>
    import mui from "../../lib/mui/js/mui.js"
    export default {
        watch :{
            maxGoods(val){
                this.max = val;
                mui('.mui-numbox').numbox().setOption('max',val)
            },
        },
        methods:{
            countChange(){
                this.$emit('getGoodsNum',this.$refs.numBox.value)
            }
        },
        mounted(){
            mui('.mui-numbox').numbox()
        },
        props:['maxGoods'],

    }
</script>

<style scoped>

</style>