<template>
    <div id="sub-header">
        <div class="left-side">
            <ul class="info">
                <li><img :src="pics.optionsIcon" /></li>
                <li><img class="bit-logo" :src="pics.bitcoin"></li>
                <li><h2>BTC / USD</h2></li>
                <li :class="textColor">
                    <span class="font">{{info.marketChange}}</span>
                    <div :class="triangleDir" class="inline"></div>
                </li>
                <li><img :src="pics.info" /></li>
            </ul>
        </div>

        <div class="right-side">
            <ul class="info">
                <li v-for="obj in getLabels" :key="obj">
                    <floating-label :title="obj" :value="info.stats[obj]" :class="changeColor(obj)"></floating-label>
                </li>
            </ul>

            
        </div>
    </div>
</template>

<script>
import CoinStore from '../stores/CoinStore'

import options_icon from '@/assets/four-squares-button-of-view-options.png';
import information from '@/assets/info.png';
export default {
    name: 'sub-header',
    data(){
        return{
            pics:{
                optionsIcon: options_icon,
                bitcoin: CoinStore.methods.getPic('bitcoin'),
                info:information
            },

            info:{
                marketChange: 9584.30,
                direction: 'up',

                stats:{
                    change: '-13.42%',
                    volume: 0.003991,
                    high: 0.003991,
                    low: 0.003991
                }


            }
        }
    },

    computed:{
        triangleDir: function(){
            return this.colorClass()? 'triangle-up' : 'triangle-down';
        },

        textColor: function(){
            return this.colorClass()? 'positive' : 'negative';
        },

        getLabels: function(){
            return Object.keys(this.info.stats);
            
        },


    },

    methods:{
        colorClass: function(){
            if(this.info.direction == 'up')
                return 'true';
            return false;
        },
        changeColor: function(name){
            if(name == 'change' && this.colorClass() )
                return 'positive';
            return 'negative';
        }
    }
}
</script>

<style scoped>
    #sub-header{
        background-color: rgb(23,66,98);
    }

    .right-side{
        width:50%;
    }

    .left-side{
        width:50%;
        text-align: left;
        position: relative;
        
    }

    .left-side:after {
    content: '';
    position: absolute;
    width: 50%;
    left: -20px;
    border-left: 1px solid #3483DF;
    }

    .left-side > ul{
        margin: 0;
    }

    .bit-logo{
        height:50px;
        width:50px;
    }

    .alignment{
        display: inline-flex;
        vertical-align: middle;
        padding-left:10px;
    }

    .info{
        color: white;
        list-style:none;
        padding-left:10px;
    }

    .info > li{
        display: inline-flex;
        vertical-align: middle;
        padding-right: 20px;
    }

    .triangle-up{
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid;
    }

    .triangle-down {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid;
    }

    .inline{
        display: inline-flex;
    }

    .positive{
      color:rgb(150, 213, 64);
  }

  .negative{
      color: rgb(180, 44, 108);
  }

  .font{
      font-weight: bold;
      padding-right:5px;
  }
</style>

