<template>
    <div class="goods-wrapper">
        <div class="goods-list-wrapper">
            <div class="goods-list" v-for="(good, index) in goods" :key="index" @click="clickMenu(index)" :data-id="index" :class="{'active': index == $store.state.activeMenuIndex}">
                <div class="text-wrapper">
                    <span class="icon" v-show="good.type > 0" :class="classMap[good.type]"></span>
                    <span>{{good.name}}</span>
                </div>
            </div>
        </div>
        <div class="goods-detail-wrapper" @mousewheel="scrollMove">
            <div class="goods-content-wrapper" :style="{'marginTop': -$store.state.curMenuHeight + 'px'}">
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
                                <count class="shop-car" :type='foodList.name' :name='food.name' :price="food.price"></count>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import count from "./count";

const FOOD_ITEM_HEIGHT = 87;
const FOOD_TITLE_HEIGHT = 26;

export default {
  name: "goods",
  data() {
    return {
      goods: [],
      scrollTop: 0,
      classMap: ["decrease", "discount", "special", "invoice_1", "guarantee"]
    };
  },
  components: { count },
  created() {
    axios
      .get("/good/goods")
      .then(res => {
        this.goods = res.data.data;
      })
      .then(() => {
        this.getMenuHeight();
      });
  },
  methods: {
    clickMenu: function(index) {
      this.$store.commit("changeMenuIndex", index);
      this.scrollTop = this.$store.state.menuHeightArr[index];
    },
    getMenuHeight: function() {
      var temp = 0;
      var result = [0];
      for (let i = 0; i < this.goods.length - 1; i++) {
        temp +=
          this.goods[i].foods.length * FOOD_ITEM_HEIGHT + FOOD_TITLE_HEIGHT;
        result.push(temp);
      }
      this.$store.commit("changeMenuHeight", result);
    },
    getWheelDelta: function(event) {
      if (event.wheelDelta) {
        return -event.wheelDelta;
      } else {
        return -event.detail * 40;
      }
    },
    scrollMove: function(e) {
      var event = e || window.event;
      if (
        this.scrollTop >= 0 &&
        this.scrollTop <=
          this.$store.state.menuHeightArr[
            this.$store.state.menuHeightArr.length - 1
          ]
      ) {
        this.scrollTop += this.getWheelDelta(event);
        if (this.scrollTop < 0) {
          this.scrollTop = 0;
        } else if (
          this.scrollTop >
          this.$store.state.menuHeightArr[
            this.$store.state.menuHeightArr.length - 1
          ]
        ) {
          this.scrollTop = this.$store.state.menuHeightArr[
            this.$store.state.menuHeightArr.length - 1
          ];
        }
        this.changeMenuIndex(this.scrollTop);
      }
    },
    changeMenuIndex: function(scrollTop) {
      for (let i = 0; i < this.$store.state.menuHeightArr.length; i++) {
        if (
          this.scrollTop >= this.$store.state.menuHeightArr[i] &&
          this.scrollTop < this.$store.state.menuHeightArr[i + 1]
        ) {
          this.$store.commit("changeMenuIndex", i);
          break;
        }
        if (
          this.scrollTop >=
          this.$store.state.menuHeightArr[
            this.$store.state.menuHeightArr.length - 1
          ]
        ) {
          this.$store.commit("changeMenuIndex", i);
        }
      }
    }
  }
};
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
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  background-color: #f3f5f7;
}
.goods-wrapper .goods-list-wrapper .goods-list.active {
  background-color: #fff;
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
  transition: all 0.5s linear;
}
.goods-detail-wrapper .goods-content-wrapper {
  width: 100%;
  height: 100%;
}
.goods-detail-wrapper .food-title {
  height: 26px;
  line-height: 26px;
  background-color: #f3f5f7;
  font-size: 12px;
  color: rgb(147, 153, 159);
  padding-left: 12px;
  border-left: 2px solid d9dde1;
  /* margin: 18px 0; */
}
.goods-detail-wrapper .food-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 18px 18px 0 18px;
  /* height: 86px; */
  border-bottom: 1px solid rgb(7, 17, 27, 0.1);
}
.goods-detail-wrapper .food-wrapper .food-img {
  width: 82px;
}
.food-wrapper .food-img img {
  width: 82px;
}
.goods-detail-wrapper .food-wrapper .food-detail {
  flex-grow: 1;
  margin-left: 10px;
  padding-top: 2px;
  overflow: hidden;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
