<template>
    <div class="goodsInfo">
        <transition
         v-on:before-enter="beforeEnter"
         v-on:enter="enter"
         v-on:after-enter="afterEnter"
         v-on:after-leave="afterLeave"
         >
            <div class="ball" v-show="ballFlag"></div>
        </transition>
        <div class="mui-content">
            <!-- 商品轮播区域-->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                       <swiper :lunbotuList="lunboImgList" :isfull="false"></swiper>
                    </div>
                </div>
            </div>
            <!-- 商品购买区域-->
            <div class="mui-card">
                <div class="mui-card-header">{{ goodsInfo.title }}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p class="price">
                            市场价: <del>${{ goodsInfo.market_price }}</del>&nbsp;&nbsp;销售价: <span class="new_price">${{ goodsInfo.sell_price }}</span>
                        </p>
                        <div>购买数量:
                            <numbox v-bind:maxGoods="goodsInfo.stock_quantity" v-on:getGoodsNum="getGoodsNum"></numbox>
                            <span>库存量 : {{ goodsInfo.stock_quantity }}</span>
                        </div>

                        <p class="xia-btn">
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addPushShopCar">加入购物车</mt-button>
                        </p>
                    </div>
                </div>
            </div>
            <!-- 商品参数区域-->
            <div class="mui-card">
                <div class="mui-card-header">商品详情</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>商品货号:{{ goodsInfo.goods_no}}</p>
                        <p>库存情况:{{ goodsInfo.stock_quantity }}</p>
                        <p>商家时间:{{ goodsInfo.add_time | dateFormat }}</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  swiper from "../subcomponments/swiper.vue"
    import  numbox from "../subcomponments/goodsinfo_numbox.vue"

    export default {
        data () {
            return {
                key : 0,
                id : this.$route.params.id,
                ballFlag : false ,
                lunboImgList : [ ],
                goodsInfo : {},
                selectedCount : 1
            }
        },
        created(){
            this.getlunbotu( this.id )
            this.getGoodsInfo( this.id )
        },
        methods : {
            getlunbotu ( id ) {
                this.$http.get ( "api/getthumimages/" + id )
                .then ( results => {
                    if ( results.body.status == 0 ) {
                        results.body.message.forEach( item =>{
                            item.img = item.src
                        })
                        this.lunboImgList = results.body.message
                    }
                } )
            },
            getGoodsInfo ( id ){
                this.$http.get('api/goods/getinfo/'+ id )
                .then( results => {
                      this.goodsInfo = results.body.message[0]
                })
            },
            addPushShopCar(  ){
                if( this.key == 0 ){
                    this.key = 1
                    this.ballFlag = !this.ballFlag
                    var id = this.id
                    var count =  this.selectedCount
                    var price = this.goodsInfo.sell_price
                    //{ id : 商品ID , count : 商品数量 , price : 商品单价 , selected : false }
                    var goodsObj = {
                        id    : parseInt(id)  ,
                        count : parseInt(count),
                        price : parseInt(price),
                        selected : true
                    }
                     this.$store.commit('addShopCar',goodsObj)
                }
            },
            beforeEnter(el){
                 el.style.transform = "translate(0,0)"
                 // this.ballFlag = false
            },
            enter(el,done){
                el.offsetLeft;
                const ballPositon = el.getBoundingClientRect()
                var leftBall = ballPositon.left
                var topBall = ballPositon.top
                const badgePosition = document.getElementById('badge').getBoundingClientRect()
                var leftBadge = badgePosition.left
                var topBadge = badgePosition.top
                var juliX = leftBadge - leftBall
                var juliY = topBadge - topBall
                el.style.transform = `translate( ${juliX}px, ${juliY}px )`
                el.style.transition = "all .7s cubic-bezier(.76,-0.46,.72,1.01)  "
                done()
            },
            afterEnter(el){
                this.ballFlag = !this.ballFlag
            },
            afterLeave(el){
                this.key = 0
            },
            getGoodsNum( count ){
                this.selectedCount = count
            }
        },
        components:{
            swiper,
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .goodsInfo {
        background-color: #efeff4;
        overflow: hidden;
    }
    .new_price{
        font-weight: 800;
        color: red;
    }
    .mui-numbox{
        height: 30px;
    }
    .xia-btn{
        margin-top: 10px;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 10px 0 ;
        }
    }
    .ball{
        width: 16px;
        height: 16px;
        background-color: red;
        position: absolute;
        z-index: 99;
        left: 140px;
        top:415px;
        border-radius:50% ;
    }
</style>