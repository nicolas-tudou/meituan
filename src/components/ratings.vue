<template>
    <div class="ratings-wrapper">
        <div class="seller-ratings-wrapper">
            <div class="general-ratings">
                <span class="score">{{seller.score}}</span>
                <span class="msg">综合评分</span>
                <span class="rankRate">高于周边商家{{seller.rankRate}}%</span>
            </div>
            <div class="detail-ratings">
                <div class="serviceScore altitude">
                    <span class="text">服务态度</span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="score">{{seller.serviceScore}}</span>
                </div>
                <div class="foodScore altitude">
                    <span class="text">饭香不香</span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="score">{{seller.foodScore}}</span>
                </div>
                <div class="deliveryTime altitude">
                    <span class="text">送达时间</span>
                    <span class="time">{{seller.deliveryTime}}分钟</span>
                </div>
            </div>
        </div>
        <div class="user-ratings-wrapper">
            <div class="general">
                <div class="count">
                    <span class="totle">全部{{totle}}</span>
                    <span class="setisfied">满意{{setisfied}}</span>
                    <span class="notsetisfied">不满意{{notsetisfied}}</span>
                </div>
                <div class="has-content">
                    <span class="icon"></span>
                    <span class="msg">只看由内容的评价</span>
                </div>
            </div>
            <div class="detail">
                <div class="detail-ratings" v-for="(rating, index) in ratings" :key="index">
                    <div class="user">
                        <img :src="rating.avatar">
                        <div class="user-info">
                            <div class="name">{{rating.username}}</div>
                            <div class="icon-content">
                                <span class="icon"></span>
                                <span class="icon"></span>
                                <span class="icon"></span>
                                <span class="icon"></span>
                                <span class="icon"></span>
                                <span class="delivery" v-if="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
                            </div>
                        </div>
                        <div class="time">{{formatDateTime(rating.rateTime)}}</div>
                    </div>
                    <div class="content">
                        <div class="text">{{rating.text}}</div>
                        <div class="recommend-wrapper" v-if="rating.recommend.length > 0">
                            <span class="icon"></span>
                            <span class="recommend" v-for="(item, i) in rating.recommend" :key="i">{{item}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            ratings: [],
            totle: 0,
            setisfied: 0,
            notsetisfied: 0
        }
    },
    methods: {
        formatDateTime(timeStamp) { 
            var date = new Date();
            date.setTime(timeStamp * 1000);
            var y = date.getFullYear();    
            var m = date.getMonth() + 1;    
            m = m < 10 ? ('0' + m) : m;    
            var d = date.getDate();    
            d = d < 10 ? ('0' + d) : d;    
            var h = date.getHours();  
            h = h < 10 ? ('0' + h) : h;  
            var minute = date.getMinutes();  
            var second = date.getSeconds();  
            minute = minute < 10 ? ('0' + minute) : minute;    
            second = second < 10 ? ('0' + second) : second;   
            return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    
        }
    },
    props: {
        seller: Object
    },
    created() {
        var self = this;
        axios.get("/good/ratings").then(res => {
            self.ratings = res.data.data;
            self.totle = self.ratings.length;
            self.ratings.forEach((ele, index) => {
                if(ele.rateType == 0) {
                    self.setisfied ++;
                }else {
                    self.notsetisfied ++;
                }
            }) 
        })
    }
}
</script>

<style lang="less">
    .ratings-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgba(7,17,27,0.1);
        .seller-ratings-wrapper {
            display: flex;
            width: 100%;
            height: 70px;
            background-color: #fff;
            margin-top: 1px;
            padding: 18px 0;
            .general-ratings {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 136px;
                border-right: 1px solid rgba(7,17,27, 0.3);
                .score {
                    font-size: 24px;
                    color: rgb(255, 153, 0);
                    line-height: 28px;
                }
                .msg {
                    font-size: 12px;
                    color: rgb(7,17,27);
                    line-height: 12px;
                    margin-top: 6px;
                    margin-bottom: 8px;
                }
                .rankRate {
                    font-size: 10px;
                    color: rgba(7,17,27, 0.3);
                    line-height: 10px;
                    margin-bottom: 6px;
                }
            }
            .detail-ratings {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                margin: 0 24px;
                .altitude {
                    span {
                        display: inline-block;
                    }
                    .text {
                        vertical-align: top;
                        height: 18px;
                        font-size: 12px;
                        color: rgb(7, 17, 27);
                        line-height: 18px;
                    }
                    .icon {
                        width: 18px;
                        height: 18px;
                        background-image: url(../img/star36_on@2x.png);
                        background-size: 18px 18px;
                        background-position: center center;
                    }
                    .icon:first-of-type {
                        margin-left: 12px;
                    }
                    .icon:nth-of-type(6) {
                        background-image: url(../img/star36_off@2x.png);
                    }
                    .score {
                        margin-left: 12px;
                        vertical-align: top;
                        font-size: 12px;
                        color: rgb(255, 163, 0);
                        line-height: 18px;
                    }
                    .time {
                        vertical-align: top;
                        font-size: 12px;
                        color: rgb(147, 153, 159);
                        line-height: 18px;
                    }
                }
                
                
            }
        }
        .user-ratings-wrapper {
            position: absolute;
            top: 106px;
            bottom: 0;
            width: 100%;
            margin-top: 18px;
            background-color: #fff;
            overflow-y: scroll;
            .general {
                border-bottom: 1px solid rgba(7,17,27, 0.1);
                .count {
                    padding: 18px;
                    span {
                        display: inline-block;
                        width: 72px;
                        height: 36px;
                        font-size: 16px;
                        line-height: 36px;
                        text-align: center;
                    }
                    .totle {
                        background-color: rgb(0, 160, 220);
                    }
                    .setisfied {
                        background-color: rgb(0, 160, 120);
                    }
                    .notsetisfied {
                        background-color: rgba(7, 17, 27, 0.1);
                    }
                }
                .has-content {
                    margin: 0 18px;
                    padding: 18px 0;
                    border-top: 1px solid rgba(7, 17, 27, 0.1);
                    .icon {
                        display: inline-block;
                        width: 32px;
                        height: 32px;
                        vertical-align: bottom;
                        background-image: url(../img/hasContent.png);
                        background-size: 32px 32px;
                        background-position: center center;
                        background-repeat: no-repeat;
                    }
                    .msg {
                        font-size: 20px;
                        // line-height: 32px;
                        color: rgb(7, 17, 27);
                    }
                }
            }
            .detail {
                margin-top: 1px;
                .detail-ratings {
                    margin: 18px;
                    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
                    .user {
                        display: flex;
                        img {
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            margin-right: 12px;
                        }
                        .user-info {
                            flex: 1;
                            height: 12px;
                            .name {
                                font-size: 10px;
                                line-height: 12px;
                                color: rgb(7, 17, 27);
                            }
                            .icon-content {
                                .icon {
                                    display: inline-block;
                                    height: 12px;
                                    width: 12px;
                                    background-image: url(../img/star36_on@2x.png);
                                    background-size: 12px 12px;
                                    background-position: center center;
                                }
                                .icon:nth-of-type(5){
                                    background-image: url(../img/star36_off@2x.png);
                                }
                                .delivery {
                                    font-size: 10px;
                                    line-height: 12px;
                                    color: rgb(147, 153, 159);
                                }
                            }
                        }
                    }
                    .content {
                        margin: 6px 18px 18px 40px;
                        .text {
                            font-size: 12px;
                            color: rgb(7, 17, 27);
                            line-height: 18px;
                        }
                        .recommend-wrapper {
                            margin-top: 8px;
                            .icon {
                                display: inline-block;
                                height: 16px;
                                width: 16px;
                                background-image: url(../img/recommend.png);
                                background-size: 16px 16px;
                                background-position: center center;
                            }
                            .recommend {
                                display: inline-block;
                                width: 48px;
                                height: 16px;
                                margin-left: 8px;
                                padding: 0 6px;
                                font-size: 9px;
                                color: rgb(147, 153, 159);
                                line-height: 16px;
                                border: 1px solid rgba(7, 17, 27, 0.1);
                                border-radius: 2px;
                                background-color: rgb(255, 255, 255);
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }
        }
    }
</style>