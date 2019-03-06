<template>
    <div class="shopCar-container">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <!-- 商品列表区域 -->
                <div class="goods-list">
                    <div class="mui-card" v-for="( item,index ) in ShopCarList" :key="item.id">
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <div class="left">
                                    <mt-switch v-model="IdAndSelected[item.id]" @change="selectedChange(item.id,IdAndSelected[item.id])"></mt-switch>
                                    <img :src="item.thumb_path" class="imgInfo" alt="">
                                </div>
                                <div class="info">
                                    <h1>{{ item.title }}</h1>
                                    <p>
                                        <span class="price">${{ item.sell_price }}</span>
                                        <numbox v-bind:countNum="item.count" v-bind:goodsId="item.id"></numbox>
                                        <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- 结算区域 -->
                <div class="mui-card">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <div class="left">
                                <p>总计 (不含运费)</p>
                                <p>已经勾选商品 <span class="red">{{ this.$store.getters.getAllCountAndPrice.AllCount }}</span> 件,总价  <span class="red">${{ this.$store.getters.getAllCountAndPrice.AllPrice }}</span></p>
                            </div>
                            <mt-button type="danger">去结算</mt-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from "../subcomponments/shopcar_numbox.vue"
    import mui from "../../lib/mui/js/mui.js"

    export default {
        data () {
            return {
                IdAndCount : {},
                IdAndSelected : {},
                ShopCarList : []
            }
        },
        created () {
            this.getStoreIdAndCount ()
            this.getShopCarSelected()
            this.getShopCarList ()
        },
        mounted () {
            mui ( ".mui-scroll-wrapper" ).scroll ( {
                deceleration : 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            } )
        },
        methods : {
            getStoreIdAndCount () {
                this.IdAndCount = this.$store.getters.getIdAndCount
                // console.log ( this.IdAndCount )
            },
            getShopCarSelected(){
               this.IdAndSelected = this.$store.getters.getIdAndSelected
            },
            getShopCarList () {
                var ids = []
                for ( var key in this.IdAndCount ) {
                    ids.push ( key )
                }
                ids = ids.join ( "," )
                this.$http.get ( "api/goods/getshopcarlist/" + ids )
                .then ( results => {
                    this.ShopCarList = results.body.message
                    this.ShopCarList.forEach ( item => {
                        for ( var index in this.IdAndCount ) {
                            if ( index == item.id ) {
                                item.count = this.IdAndCount[ index ]
                            }
                        }
                    } )
                } )
            },
            remove ( id, index ) {
                this.ShopCarList.splice ( index, 1 )
                this.$store.commit ( "remove", id )
            },
            selectedChange( id,selected ){
                 var shopCarSelectedObj = {
                     id : id ,
                     selected : selected
                 }
                 this.$store.commit('updateShopCarSelected',shopCarSelectedObj)
            }
        },
        components : {
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .shopCar-container {
        position: relative;
        height: 100%;
        background-color: #eee;
        /*overflow: hidden;*/
        .goods-list {
            .mui-card-content-inner{
                display: flex;
                padding: 10px !important;
                >.left{
                    display: flex;
                    width: 40%;
                  img{
                      width: 60px;
                      height: 60px;
                  }
                }
                >.info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 60%;
                    h1 {
                        font-size: 13px;
                        line-height: 20px;
                    }
                    > p{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        a {
                            padding-left: 5px;
                        }
                        .price {
                            color: red;
                            font-weight: bold;
                            width: 45px;
                        }
                    }
                }
            }
        }
        .mui-card-content-inner {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 15px 5px !important;
        }
        .imgInfo {
            padding-left: 10px;
        }
        .red{
            color: red;
            font-weight: bold;
        }
    }
</style>