<template>
    <div id="trade-action">
        <div id="line1" class="availability text-to-left">
            <span>Available For Tading:</span>
        </div>

        <div id="line2" class="text-to-left">
            <span class="amount-title">ENTER AMOUNT</span>
            <span class="available">$123,456,789</span>

        </div>

        <div id="line3">
            <div class="input-area">
                <input class="input-border" type="text" placeholder="0"/>
                <span class="coin-name">BTC</span>
            </div>
            <div class="percents">
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
            </div>
        </div>

        <div id="line4" class="text-to-left">
            <span>{{getCoinTradeSign}}0.00</span>
        </div>
    </div>
</template>

<script>
import CoinStore from '../stores/CoinStore'
export default {
    name: 'trade-action',
    props: ['coin'],
    computed:{
        getCoinTradeSign: function(){
            console.log(this.coin);
            return CoinStore.methods.getMark(this.coin);
        }
    }
}
</script>

<style scoped>
    #trade-action{
        color:rgb(98 , 243, 246);
        font-size: 10px;
    }

    .input-border{
        border:none;
        background-color: transparent;
        width:70%;
        color: white;
        font-size:18px;
    }

    .input-area :focus{
        outline: none;
    }

    input::-webkit-input-placeholder{
        color: white;
    }

    .input-area{
        border-bottom:2px solid rgb(98 , 243, 246);
        width:35%;
        display: inline-flex;
        position: relative;
    }

    .percents{
        width:60%;
        display: inline-flex;
        vertical-align: bottom;
    }

    .percents > span{
        width:25%;
        font-size: 12px;
    }

    #line1{
        text-align: right;
    }

    #line2{
        text-align: left;
    }

    .available{
        float:right;
    }

    .text-to-left{
        text-align: left;
    }

    .coin-name{
        width: fit-content;
    height: fit-content;
    position: absolute;
    left: 80%;
    bottom: 0;
    }
</style>


