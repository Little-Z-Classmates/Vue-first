<template>
    <div class="shopCar-container">
        <!-- 商品列表区域 -->
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4005075968,2125946437&fm=58" alt="">
                        <div class="info">
                            <h1>小米( Mi )16G超级大屏幕,无所不能</h1>
                            <p>
                                <span class="price">$2133</span>
                                <numbox></numbox>
                                <a href="#">删除</a>
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
                    ssssss
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from "../subcomponments/shopcar_numbox.vue"

    export default {
        components:{
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .shopCar-container {
        background-color: #eee;
        overflow: hidden;
        .goods-list{
            img{
                width: 60px;
                height: 60px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price{
                    color: red;
                    font-weight: bold;
                }
               >p{
                    margin: 8px 0 0 0;
                }
            }
        }
        .mui-card-content-inner{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>