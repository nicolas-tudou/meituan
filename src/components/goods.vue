<template>
    <div class="goods-wrapper">
        <div class="goods-list-wrapper">
            <div class="goods-list" v-for="(good, index) in goods" :key="index">
                <div class="text-wrapper">
                    <span class="icon" v-show="good.type > 0" :class="classMap[good.type]"></span>
                    <span>{{good.name}}</span>
                </div>
            </div>
        </div>
        <div class="goods-detail-wrapper">
            <div class="goods-detail-list"  v-for="(foodList, i) in goods" :key="i">
                <div class="food-title">{{foodList.name}}</div>
                <div class="food-wrapper" v-for="(food, j) in foodList.foods" :key="j">
                    <div class="food-img">
                        <img :src="food.image">
                    </div>
                    <div class="food-detail">
                        <div class="food-name">{{food.name}}</div>
                        <div class="food-desc" v-if="food.description">{{food.description}}</div>
                        <div class="food-count">月售{{food.sellCount}}份，好评率{{food.rating}}%</div>
                        <div class="food-price">
                            <span class="now-price">￥{{food.price}}</span>
                            <span class="old-price" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                            <count class="shop-car" :i='i' :j='j' :food='food'></count>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import count from './count'
export default {
    name: 'goods',
    data() {
        return {
            goods: [],
            classMap: ["decrease","discount","special","invoice_1","guarantee"]
        }
    },
    components: {count},
    created() {
        axios.get('/good/goods').then((res) => {
            this.goods = res.data.data
            console.log(this.goods)
        })
    }
}
</script>

<style scoped>
    .goods-wrapper {
        display: flex;
        position: absolute;
        top: 0;
        bottom: 48px;
        justify-content: space-between;
        width: 100%;
        overflow: hidden;
    }
    .goods-wrapper .goods-list-wrapper {
        width: 80px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .goods-wrapper .goods-list-wrapper .goods-list {
        display: table;
        text-align: center;
        width: 100%;
        height: 54px;
        border-bottom: 1px solid rgba(7, 17, 27,0.1);
        background-color: #f3f5f7;
    }
    .goods-wrapper .goods-list-wrapper .goods-list .text-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .goods-list-wrapper .goods-list .icon {
        display: inline-block;
        vertical-align: middle;
        height: 14px;
        width: 14px;
        background-size: 14px 14px;
    }
    .goods-list-wrapper .goods-list .decrease {
        background-image: url(../img/decrease_2@2x.png);
    }
    .goods-list-wrapper .goods-list .discount {
        background-image: url(../img/discount_2@2x.png);
    }
    .goods-list-wrapper .goods-list .special {
        background-image: url(../img/special_2@2x.png);
    }
    .goods-list-wrapper .goods-list .invoice_1 {
        background-image: url(../img/invoice_1@2x.png);
    }
    .goods-list-wrapper .goods-list .guarantee {
        background-image: url(../img/guarantee_2@2x.png);
    }

    .goods-wrapper .goods-detail-wrapper {
        flex: 1 1;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .goods-detail-wrapper .food-title {
        height: 26px;
        line-height: 26px;
        background-color: #f3f5f7;
        font-size: 12px;
        color: rgb(147,153,159);
        padding-left: 12px;
        border-left: 2px solid d9dde1;
    }
    .goods-detail-wrapper .food-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 18px 18px 0 18px;
    }
    .goods-detail-wrapper .food-wrapper .food-img {
        width: 82px;
    }
    .food-wrapper .food-img img {
        width: 100%;
    }
    .goods-detail-wrapper .food-wrapper .food-detail {
        flex: 1 1;
        margin-left: 10px;
        padding-top: 2px;
    }
    .food-wrapper .food-detail .food-name {
        font-size: 14px;
        line-height: 14px;
        color: rgb(7, 17, 27);
    }
    .food-wrapper .food-detail .food-desc {
        font-size: 10px;
        line-height: 20px;
        color: rgb(145, 153, 159);
    }
    .food-wrapper .food-detail .food-count {
        font-size: 10px;
        line-height: 20px;
        color: rgb(145, 153, 159);
    }
    .food-wrapper .food-detail .food-price {
        position: relative;
        font-size: 14px;
        line-height: 24px;
        color: rgb(240, 20, 20);
    }
    .food-wrapper .food-detail .food-price .old-price {
        font-size: 10px;
        color: rgb(145, 153, 159);
        text-decoration: line-through;
    }
    .food-wrapper .food-detail .food-price .shop-car {
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>
