<template>
    <div class="shopcart-wrapper">
        <div class="content-wrapper">
            <div class="shopcart-content">
                <div class="shopcart-icon"></div>
                <span>￥{{curPrice}}</span>
            </div>
            <div class="more-money">另需配送费￥{{minPrice - curPrice}}元</div>
            <div class="min-price">￥{{minPrice}}起送</div>
        </div>
        <div class="shopcart-detail-wrapper">
            <div class="title">

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
            minPrice: 30,
            curPrice: 10
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
</style>
