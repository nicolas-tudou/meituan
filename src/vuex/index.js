import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenuIndex: 0,
    menuHeightArr: [0],
    curMenuHeight: 0,
    totleCount: 0,
    totlePrice: 0,
    choosedFoods: {
        // type1: {
        //     foodName1: {
        //         foodName: '',
        //         foodPrice: 0,
        //         foodCount: 0
        //     }
        // },
        

    }
  },
  mutations: {
    changeMenuIndex: function (state, n) {
        // console.log(state, n)
        state.activeMenuIndex = n;
        state.curMenuHeight = state.menuHeightArr[n];
    },
    changeMenuHeight: function (state, arr) {
        state.menuHeightArr = arr
    },
    increase: function (state, arr) {
        var type = arr[0],
            name = arr[1],
            price = arr[2];
        state.totleCount ? state.totleCount ++ : state.totleCount = 1;
        state.totlePrice ? state.totlePrice += price : state.totlePrice = price;
        if(!state.choosedFoods[type]) {
            state.choosedFoods[type] = {};
            state.choosedFoods[type][name] = {
                foodName: name,
                foodPrice: price,
                foodCount: 1
            };
        }else if(state.choosedFoods[type][name]) {
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
    decrease: function (state, arr) {
        var type = arr[0],
            name = arr[1],
            price = arr[2];
        state.totleCount --;
        state.totlePrice -= price;
        state.choosedFoods[type][name].foodPrice -= price;
        state.choosedFoods[type][name].foodCount --;
        if(state.choosedFoods[type][name].foodCount == 0) {
            delete state.choosedFoods[type][name];
            if(JSON.stringify(state.choosedFoods[type]) == '{}') {
                delete state.choosedFoods[type];
            }
        }
    }
  }
})