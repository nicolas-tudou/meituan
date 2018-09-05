<template>
    <div class="count-wrapper">
        <span class="decrease" v-if="number > 0" @click="decrease"></span>
        <span class="number" v-if="number > 0">{{number}}</span>
        <span class="increase" @click="increase"></span>
    </div>
</template>

<script>
export default {
    name: "count",
    data() {
        return {
            number: 0
        }
    },
    props:{
        type: String,
        name: String,
        price: Number
    },
    created() {
        this.changeCount();
    },
    methods: {
        changeCount: function() {
            if(this.$store.state.choosedFoods[this.type] && this.$store.state.choosedFoods[this.type][this.name]) {
                this.number = this.$store.state.choosedFoods[this.type][this.name].foodCount;
            }else {
                this.number = 0;
            }
        },
        decrease: function () {
            this.$store.commit('decrease', [this.type, this.name, this.price]);
            this.changeCount();
        },
        increase: function () {
            this.$store.commit('increase', [this.type, this.name, this.price]);
            this.changeCount();
        }
    }
}
</script>

<style>
    .count-wrapper span {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-size: 24px 24px;
        text-align: center;
        vertical-align: middle;
    }
    .count-wrapper .decrease {
        background-image: url(../img/decrease.png);
        background-size: 20px 20px;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .count-wrapper .increase {
        background-image: url(../img/increase.png)
    }
    .count-wrapper .number {
        font-size: 10px;
        line-height: 24px;
        color: rgb(145, 153, 159);
    }
</style>
