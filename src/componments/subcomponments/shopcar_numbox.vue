<template>
    <span >
       <span class="mui-numbox" data-numbox-step='1' data-numbox-min='0' style="height: 25px" >
       <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
       <input class="mui-numbox-input" type="number" ref="numBox" @change="changeEx" readonly :value="this.countNum" />
       <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
       </span>
    </span>
</template>

<script>
    import mui from "../../lib/mui/js/mui.js"
    export default {
        methods:{
            changeEx(){
                var shopCarCountObj = {
                    id : this.goodsId,
                    count : this.$refs.numBox.value
                }
                this.$store.commit('updateShopCarCount', shopCarCountObj )
            }
        },
        mounted(){
            mui('.mui-numbox').numbox()
        },
        props:['countNum','goodsId'],
    }
</script>

<style scoped>

</style>