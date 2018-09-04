import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods'
import sellers from '../components/sellers'
import ratings from '../components/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    },
    {
      path: '*',
      name: 'goods',
      component: goods
    },
  ]
})
