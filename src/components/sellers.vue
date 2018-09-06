<template>
    <div class="seller-wrapper">
        <div class="seller-info">
            <div class="header-info">
                <div class="title">
                    <div class="name">{{seller.name}}</div>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="number">月售{{seller.sellCount}}单</span>
                </div>
                <div class="collection">
                    <span class="icon" :class="{'collectioned': 'flag'}"></span>
                    <span class="text">已收藏</span>
                </div>
            </div>
            <div class="service-info">
                <span class="minPrice item">
                    <span class="service-title">起送价</span>
                    <span class="number">{{seller.minPrice}}<span class="unit">元</span></span>
                </span>
                <span class="deliveryPrice item">
                    <span class="service-title">商家配送</span>
                    <span class="number">{{seller.deliveryPrice}}<span class="unit">元</span></span>
                </span>
                <span class="deliveryTime item">
                    <span class="service-title">平均配送时间</span>
                    <span class="number">{{seller.deliveryTime}}<span class="unit">元</span></span>
                </span>
            </div>
        </div>
        <div class="seller-bulletin">
            <div class="bulletin-header">
                <div class="bulletin-title">公告与活动</div>
                <span class="bulletin-content">{{seller.bulletin}}</span>
            </div>
            <div class="supports" v-for="(support, index) in seller.supports" :key="index">
                <span class="bulletin-icon" :class="classMap[support.type]"></span>
                <span class="bulletin-info">{{support.description}}</span>
            </div>
        </div>
        <div class="seller-bg">
            <div class="bg-title">商家实景</div>
            <div class="bg-img-wrapper">
                <img v-for="(pic, index) in seller.pics" :key="index" :src="pic">
            </div>
        </div>
        <div class="seller-others">
            <div class="info-header">商家信息</div>
            <div class="info-detail" v-for="(info, index) in seller.infos" :key="index">{{info}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: true,
            classMap: ['decrease', 'discount', 'specil', 'invoice', 'guarantee']
        }
    },
    props: {
        seller: Object
    }
}
</script>

<style lang="less">
    .seller-wrapper {
        width: 100%;
        height: 100%;
        overflow-x: scroll;
        margin-top: 1px;
        background-color: rgba(7, 17, 27, 0.1);
        div {
            background-color: #fff;
        }
        .seller-info {
            padding-top: 18px;
            .header-info {
                display: flex;
                justify-content: space-between;
                margin: 0 18px;
                padding-bottom: 18px;
                border-bottom: 1px solid rgba(7, 17, 27, 0.1);
                .title {
                    flex: 1;
                    .name {
                        height: 14px;
                        font-size: 14px;
                        line-height: 14px;
                        color: rgb(7, 17, 27);
                        margin-bottom: 8px;
                    }
                    .icon {
                        display: inline-block;
                        height: 18px;
                        width: 18px;
                        background-image: url(../img/star36_on@2x.png);
                        background-position: center center;
                        background-size: 18px 18px;
                    }
                    .icon:nth-of-type(5) {
                        background-image: url(../img/star36_off@2x.png);
                    }
                    .number {
                        font-size: 10px;
                        display: inline-block;
                        height: 18px;
                        line-height: 18px;
                        vertical-align: top;;
                        color: rgb(77, 85, 93);
                        margin-left: 12px;
                    }
                }
                .collection {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .icon {
                        width: 24px;
                        height: 24px;
                        background-image: url(../img/nocollection.png);
                        background-position: center center;
                        background-size: 24px 24px;
                    }
                    .collectioned {
                        background-image: url(../img/collection.png);
                    }
                    .text {
                        margin-top: 4px;
                        height: 10px;
                        font-size: 10px;
                        color: rgb(77, 85, 93);
                        line-height: 10px;
                    }
                }
            }
            .service-info {
                margin: 18px;
                padding-bottom: 18px;
                display: flex;
                justify-content: space-around;
                .item {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .service-title {
                        font-size: 10px;
                        color: rgb(147, 153, 159);
                    }
                    .number {
                        font-size: 24px;
                        font-weight: 200;
                        color: rgb(7, 17, 27);
                        .unit {
                            font-size: 10px;
                        }
                    }
                }
                .deliveryPrice {
                    border-left: 1px solid rgba(7, 17, 27, 0.1);
                    border-right: 1px solid rgba(7, 17, 27, 0.1);
                }
            }
        }
        .seller-bulletin {
            padding: 18px 18px 0 18px;
            .bulletin-header {
                margin-bottom: 16px;
                .bulletin-title {
                    font-size: 14px;
                    color: rgb(7, 17, 27);
                    height: 14px;
                    line-height: 14px;
                }
                .bulletin-content {
                    font-size: 12px;
                    font-weight: 200;
                    color: rgb(240, 20, 20);
                    line-height: 24px;
                    padding: 8px 12px 16px 12px;
                }
            }
            
            .supports {
                padding: 16px 12px;
                border-top: 1px solid rgba(7, 17, 27, 0.1);
                span {
                    display: inline-block;
                }
                // classMap: ['decrease', 'discount', 'specil', 'invoice', 'guarantee']
                .bulletin-icon {
                    width: 16px;
                    height: 16px;
                    background-position: center center;
                    background-size: 16px 16px;
                    vertical-align: middle;
                }
                .decrease {
                    background-image: url(../img/decrease_3@2x.png);
                }
                .discount {
                    background-image: url(../img/discount_3@2x.png);
                }
                .specil {
                    background-image: url(../img/special_3@2x.png);
                }
                .invoice {
                    background-image: url(../img/invoice_3@2x.png);
                }
                .guarantee {
                    background-image: url(../img/guarantee_3@2x.png);
                }
                .bulletin-info {
                    font-size: 12px;
                    font-weight: 200;
                    color: rgb(7, 17, 27);
                    line-height: 16px;
                }
            }
        }
        .seller-bg {
            margin-top: 16px;
            padding: 16px;
            .bg-title {
                font-size: 14px;
                color: rgb(7, 17, 27);
                line-height: 14px;
                margin-bottom: 12px;
            }
            .bg-img-wrapper {
                display: flex;
                flex-wrap: nowrap;
                overflow-x: scroll;
                img {
                    flex: 0 0;
                    width: 120px;
                    height: 90px;
                    margin-right: 6px;
                }
            }
        }
        .seller-others {
            margin-top: 16px;
            padding: 16px;
            .info-header {
                font-size: 14px;
                color: rgb(7, 17, 27);
                line-height: 28px;
                margin-bottom: 12px;
            }
            .info-detail {
                border-top: 1px solid rgba(7, 17, 27, 0.1);
                padding: 16px 12px;
                font-size: 12px;
                font-weight: 200;
                color: rgb(7, 17, 27);
                line-height: 16px;
            }
        }
    }
</style>