<template>
    <div class="wrapper">
        <div class="main-info-wrapper">
            <div class="logo-image-wrapper">
                <img :src='seller.avatar'/>
            </div>
            <div class="seller-info-wrapper">
                <div class="seller-name-wrapper">
                    <img src="../img/brand@2x.png">
                    <span>{{seller.name}}</span>
                </div>
                <div class="delivery-info-wrapper">
                    <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
                </div>
                <div class="supports-info-wrapper" v-if='seller.supports'>
                    <span class="supports-logo" :class="classMap[seller.supports[0].type]"></span>
                    <span class="supperts-description">{{seller.supports[0].description}}</span>
                </div>
                <div class="num-wrapper">
                    {{seller.supports ? seller.supports.length : 0}}个
                </div>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <div class="bulletin-img"><img src="../img/bulletin@2x.png"></div>
            <div class="bulletin-content">{{seller.bulletin}}</div>
            <div class="bulletin-details"></div>
        </div>
        <img :src="seller.avatar" alt="" class="bg">
    </div>
</template>

<script>
export default {
    name: 'goosHeader',
    data() {
        return {
            msg: 'goodheader'
        }
    },
    props: {
        seller: {
            type: Object
        }
    },
    created() {
        this.classMap = ['decrease','discount','special','invoice_1','guarantee'];
    }
}
</script>

<style scoped>
.wrapper {
    position: relative;
    width: 100%;
    height: 134px;
    background-color: rgba(0, 0, 0, 0.2);
    overflow: hidden;
}
.wrapper .bg {
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    width: 100%;
    filter: blur(10px);
    z-index: -1;

}
.wrapper .main-info-wrapper {
    width: 100%;
    height: 106px;
}
.wrapper .main-info-wrapper .logo-image-wrapper {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 24px;
    left: 24px;
}
.wrapper .main-info-wrapper .logo-image-wrapper img {
    width: 100%;
    height: 100%;
}
.wrapper .main-info-wrapper .seller-info-wrapper {
    height: 100%;
    padding-left: 104px;
    padding-top: 26px;
}
.seller-info-wrapper .seller-name-wrapper img {
    height: 18px;
    margin-right: 6px;
}
.seller-info-wrapper .seller-name-wrapper span {
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 18px;
    vertical-align: top;
}
.seller-info-wrapper .delivery-info-wrapper span {
    font-size: 12px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 12px;
}
.seller-info-wrapper .supports-info-wrapper {
    margin-top: 6px;
    height: 12px;
}
.seller-info-wrapper .supports-info-wrapper .supports-logo {
    vertical-align: top;
    display: inline-block;
    width: 12px;
    height: 12px;
}
.seller-info-wrapper .supports-info-wrapper .supperts-description {
    vertical-align: top;
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 12px;
}
.seller-info-wrapper .supports-info-wrapper span.decrease {
    background-image: url(../img/decrease_2@2x.png);
    background-size: 100% 100%;
    background-position: 0 0;
}
.seller-info-wrapper .supports-info-wrapper span.discount {
    background-image: url(../img/discount_2@2x.png);
    background-size: 100% 100%;
    background-position: 0 0;
}
.seller-info-wrapper .supports-info-wrapper span.special {
    background-image: url(../img/special_2@2x.png);
    background-size: 100% 100%;
    background-position: 0 0;
}
.seller-info-wrapper .supports-info-wrapper span.invoice_1 {
    background-image: url(../img/invoice_1@2x.png);
    background-size: 100% 100%;
    background-position: 0 0;
}
.seller-info-wrapper .supports-info-wrapper span.guarantee {
    background-image: url(../img/guarantee_2@2x.png);
    background-size: 100% 100%;
    background-position: 0 0;
}
.seller-info-wrapper .num-wrapper {
    position: absolute;
    right: 12px;
    bottom: 46px;
    font-size: 10px;
    line-height: 12px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    border-radius: 16px;
    height: 12px;
    padding: 7px 8px;
    background-color: rgba(0, 0, 0, 0.2);
}
.seller-info-wrapper .num-wrapper::after {
    display: inline-block;
    width: 10px;
    height: 10px;
    content: '';
    background-image: url(../img/right.png);
    background-size: 10px 10px;
    vertical-align: middle;
}
.bulletin-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 28px;
    padding: 0 22px 0 12px;
    background-color: rgba(7, 17, 27, 0.2);
}
.bulletin-wrapper .bulletin-img {
    height: 28px;
    width: 28px;
}
.bulletin-wrapper .bulletin-img img {
    width: 22px;
    height: 12px;
    vertical-align: middle;
}
.bulletin-wrapper .bulletin-content {
    flex: 1 1;
    height: 28px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 10px;
    font-weight: 200;
    color: rgb(255, 255, 255);
    line-height: 28px;
}
.bulletin-wrapper .bulletin-details {
    height: 28px;
    width: 28px;
    padding-right: 12px;
    padding-left: 4px;
    background-image: url(../img/right.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 10px 10px;
}
</style>
