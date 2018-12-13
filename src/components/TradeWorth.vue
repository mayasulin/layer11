<template>
    <div id="worth">
        <div :class="circleColor">
            <div class="circle">-</div>
            <div class="circle-content">
                <div class="triangle" :class="triangleDir" v-show="displayElement"></div>
                <h5 v-show="!displayElement" class="side side-sell">{{info.side | toUpperCase}}</h5>
                <p class="price-title">PRICE</p>
                <h4 class="price-contant">{{info.price}}</h4>
                <h5 v-show="displayElement" class="side">{{info.side | toUpperCase}} </h5>
                <div class="triangle" :class="triangleDir" v-show="!displayElement"></div>

            </div>
            <div class="circle">+</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'trade-worth',
    props: ['info'],
    data(){
        return{

        }
    },

    computed:{
        displayElement: function(){
            return this.isSell();
        },
        circleColor: function(){
            return this.isSell()? 'positive': 'negative';
        },
        triangleDir: function(){
            return this.isSell()? 'triangle-up': 'triangle-down';
        }
    },

    methods:{
        isSell: function(){
            return this.info.side == 'buy'? true: false;
        }
    },

    filters:{
        toUpperCase: function(name){
            return name.toUpperCase();
        }
    }

}
</script>

<style scoped>
    .positive{
      color:rgb(150, 213, 64);
    }

    .negative{
      color: rgb(180, 44, 108);
    }

    .triangle-up{
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid;
        margin-bottom: 10px;

    }

    .triangle-down {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid;
    }

    .triangle-down, .triangle-up{
        display: inline-block;
        margin-top:10px;
    }

    .circle-content{
        border:2px solid;
        border-radius: 50%;
        width:110px;
        height:110px;

        display: inline-block;
        vertical-align: middle;


        margin: 5px 10px;
    }

    .circle{
        display: inline-block;
        height: 35px;
        width: 35px;
        border: 1px solid;
        vertical-align: middle;
        border-radius: 50%;
        font-size: 30px;

        cursor: pointer;
    }

    .price-title{
        font-size: 12px;
        opacity: 0.5;
        margin: 0;
        
    }

    .margin-top{
        margin-top:25px;
    }

    .price-contant{
        margin:0;
    }

    .side-sell{
        margin:15px;
    }
</style>


