<template>
    <div class="shopcart-wrapper">
        <div class="content-wrapper">
            <div class="shopcart-content">
                <div class="shopcart-icon" :class="{'notempty': count > 0}">
                    <span>{{count}}</span>
                </div>
                <span>￥{{totlePrice}}</span>
            </div>
            <div class="more-money">另需配送费￥{{delivaryFee}}元</div>
            <div class="min-price" :class="{'to-balance': minPrice - totlePrice <= 0}">
                <span v-if="minPrice - totlePrice > 0">还差￥{{minPrice - totlePrice}}起送</span>
                <span v-else>去结算</span>
            </div>
        </div>
        <div class="shopcart-detail-wrapper" v-if="flag">
            <div class="title">
                <span class="shaopcart-title">购物车</span>
                <span class="shopcart-clear">清空</span>
            </div>
            <div class="datail">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            delivaryFee: 4,
            minPrice: 30,
            totlePrice: 0,
            count: 0,
            flag: false,
            shopcartContent: []
        }
    },
    created() {
        this.getshopcart();
    },
    methods:{
        getshopcart() {
            this.shopcartContent = this.$store.state.choosedFoods;
            for(props in this.$store.state.choosedFoods) {
                for(prop in props) {
                    this.count += prop.foodCount;
                    this.totlePrice += prop.foodPrice;
                    this.$store.state.totleCount = this.count;
                    this.$store.state.totlePrice = this.totlePrice;
                }
            }
        }
    },
    computed: {
        listenTotle() {
            return this.$store.state.totleCount;
        }
    },
    watch: {
        listenTotle(newVal, oldVal) {
            this.count = newVal;
            this.totlePrice = this.$store.state.totlePrice;
        }
    }
}
</script>

<style scoped>
    .content-wrapper {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px;
        box-sizing: border-box;
    }
    .content-wrapper .shopcart-content {
        position: relative;
        width: 120px;
        height: 100%;
        background-color: #141d27;
    }
    .content-wrapper .shopcart-content .shopcart-icon {
        position: absolute;
        left: 18px;
        bottom: 8px;
        display: inline-block;
        width: 44px;
        height: 44px;
        border: 6px solid #141d27;
        border-radius: 50%;
        background-image: url(../img/shopcart.png);
        background-size:  44px 44px;
        background-color: #2b333b;
    }
    .content-wrapper .shopcart-content .shopcart-icon span{
        display: none;
    }
    .content-wrapper .shopcart-content .shopcart-icon.notempty {
        background-color: rgb(0, 160, 220);
    }
    .content-wrapper .shopcart-content .shopcart-icon.notempty span {
        position: absolute;
        right: -16px;
        top: -0px;
        display: block;
        width: 24px;
        height: 16px;
        border-radius: 12px;
        background-color: rgb(240, 20, 20);
        font-size: 9px;
        font-weight: 700;
        color: rgb(255, 255, 255);
        line-height: 16px;
        text-align: center;
        padding: 0;
        margin: 0;
    }
    .content-wrapper .shopcart-content span {
        display: block;
        position: absolute;
        right: 0;
        margin: 12px 0;
        padding-right: 12px;
        font-size: 16px;
        color: rgba(255,255,255,0.4);
        line-height: 24px;
        border-right: 1px solid rgba(255,255,255,0.1);
    }
    .content-wrapper .more-money {
        flex: 1 1;
        height: 24px;
        padding: 12px 0 12px 12px;
        background-color: #141d27;
        font-size: 12px;
        color: rgba(255,255,255,0.4);
        line-height: 24px;
        font-weight: 700;
    }
    .content-wrapper .min-price {
        width: 105px;
        height: 100%;
        padding: 12px 8px;
        font-size: 12px;
        color: rgba(255,255,255,0.4);
        font-weight: 700;
        text-align: center;
        line-height: 24px;
        background-color: rgba(0, 0, 0,0.6);
    }
    .content-wrapper .min-price.to-balance {
        background-color: rgb(0, 160, 220);
    }
</style>
