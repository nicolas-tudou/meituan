<template>
  <div class="wrapper">
    <goods-header :seller='seller'></goods-header>
      <div class="goods-router-link-wrapper">
          <div><router-link to='/goods'>商品</router-link></div>
          <div><router-link to='/ratings'>评价</router-link></div>
          <div><router-link to='/sellers'>商家</router-link></div>
      </div>
      <div class="goods-info-wrapper">
        <router-view :seller='seller'></router-view>
      </div>
    <shop-cart></shop-cart>
  </div>
</template>

<script>
import goodsheader from './components/goodsheader'
import shopcart from './components/shopcart'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    'goods-header': goodsheader,
    'shop-cart': shopcart
  },
  created() {
    axios.get('/good/seller').then((res) => {
      this.seller = res.data.data;
      console.log(this.seller)
    })
  }
}
</script>

<style>
* {
  list-style: noen;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html, body {
  height: 100%;
  width: 100%;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.goods-info-wrapper {
  position: absolute;
  top: 174px;
  bottom: 0;
  width: 100%;
}
.goods-router-link-wrapper {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(7, 17, 127,0.1)
}
.goods-router-link-wrapper div {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.goods-router-link-wrapper div a {
  width: 100%;
  height: 100%;
  display: block;
}
.router-link-exact-active {
  color: rgb(240, 20, 20);
}

</style>
