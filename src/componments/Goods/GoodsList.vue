<template>
    <div class="goods-list-box">
        <div class="goods-list">
            <div class="goods-item" v-for="item in goodsListInfo " :key="item.id" @click="toGoodsInfo(item.id)">
                <img :src="item.img_url" alt="">
                <h1 class="title">{{ item.title }}</h1>
                <div class="info">
                    <div class="price">
                        <span class="new">￥{{ item.sell_price }}</span>
                        <del class="old">￥{{ item.market_price }}</del>
                    </div>
                    <div class="sell">
                        <span>热卖</span>
                        <span>剩 {{ item.stock_quantity }} 件</span>
                    </div>
                </div>
            </div>
            <mt-button type="danger" size="large" plain @click="getGoodsListInfo( pageIndex+1 )">加载更多</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                goodsListInfo: [],
                pageIndex:1
            }
        },
        created(){
            this.getGoodsListInfo( this.pageIndex )
        },
        methods : {
            getGoodsListInfo( pageIndex ){
                this.$http.get( 'api/getgoods?pageindex=' + pageIndex )
                .then( results => {
                    if ( results.body.status === 0 ){
                        this.goodsListInfo = this.goodsListInfo.concat(  results.body.message )
                    }
                })
            },
            toGoodsInfo( id ){
                // this.$router.push({ name: '/home/goodsinfo', params: { id : id }})
                this.$router.push( { path : '/home/goodsinfo/'+id } )
    }
        }
    }
</script>

<style lang="less" scoped>
    .goods-list-box{

        .goods-list{
            display: flex;
            flex-wrap: wrap;
            padding:  0 7px ;
            justify-content: space-between;
            .goods-item{
                width: 49%;
                border: 1px solid #ccc;
                box-shadow:  0  0  8px #ccc;
                margin-top: 5px ;
                img{
                    width: 100%;
                }
                .title{
                    height: 43px;
                    font-size: 14px;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
                .info{
                    background-color: #e7e7e7;
                   .price{
                       span{
                           color: red;
                           font-size: 16px;
                           font-weight: 800;
                           padding-left: 5px;
                       }
                       del{
                           color: #a1a1a1;
                           font-size: 14px;
                           padding-left: 10px;
                       }
                   }
                    .sell{
                        display: flex;
                        justify-content: space-between;
                        padding: 0 5px ;
                        color: #a1a1a1;
                        font-size: 12px;
                        :nth-child(1){
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

</style>