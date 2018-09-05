import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenuIndex: 0,
    menuHeightArr: [0],
    curMenuHeight: 0,
    choosedFoods: {
        // type1: {
        //     foodName1: {
        //         foodName: '',
        //         foodPrice: 0,
        //         foodCount: 0
        //     }
        // }

    }
  },
  mutations: {
    changeMenuIndex: function (state, n) {
        state.activeMenuIndex = n;
        state.curMenuHeight = state.menuHeightArr[n];
    },
    changeMenuHeight: function (state, arr) {
        state.menuHeightArr = arr
    },
    increase: function (state, type, name, price) {
        if(!state.choosedFoods[type]) {
            state.choosedFoods[type] = {};
        }
        if(state.choosedFoods[type][name]) {
            state.choosedFoods[type][name].foodPrice += price;
            state.choosedFoods[type][name].foodCount ++;
        }else {
            state.choosedFoods[type][name] = {
                foodName: name,
                foodPrice: price,
                foodCount: 1
            };
        }
    },
    decrease: function (state, type, name, price) {
        if(state.choosedFoods[type][name].foodCount == 1) {
            delete state.choosedFoods[type][name];
        }else {
            state.choosedFoods[type][name].foodPrice -= price;
            state.choosedFoods[type][name].foodCount --;
        }
    }
  }
})