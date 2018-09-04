<template>
    <div class="count-wrapper">
        <span class="decrease" v-if="number > 0"></span>
        <span class="number" v-if="number > 0">{{number}}</span>
        <span class="increase"></span>
    </div>
</template>

<script>
export default {
    name: "count",
    data() {
        return {
            number: 1
        }
    },
    props:{
            i: Number,
            j: Number,
            food: Object
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
