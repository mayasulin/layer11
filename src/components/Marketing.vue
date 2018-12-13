<template>
    <div id="marketing">
        <tabs class="navbar" :styles="cssAdj">
            <tab-item name="market" :selected="true" >
                <p class="fee text-color">FEE: {{info.fee}}%</p> 
                <trade-action :coin="'dollar'" class="trade-action"></trade-action>
                <trade-worth class="border" :info="buy"></trade-worth>
                <trade-worth :info="sell"></trade-worth>
                <trade-action :coin="'bitcoin'"></trade-action>
            </tab-item>
            <tab-item name="limit" ><h1>LIMIT DATA</h1></tab-item>
            <tab-item name="stop limit" ><h1>STOP LIMIT DATA</h1></tab-item>
        </tabs>
    </div>
</template>

<script>
export default {
    name: 'trades',
    data(){
        return{
            cssAdj:{
                margin: 0,
                'line-height': '7vh'
            },

            buy: {
                side: "buy",
                price: '16,5550.00'
            },

            sell: {
                side: "sell",
                price: '16,5550.00'
            },

            info:{
                fee: 0.0001
            }
        }
    },
    
}
</script>

<style scoped>

    .border{
        border-bottom:1px solid rgba(255,255,255,0.2);
    }

    trade-worth{
        width:90%;
        display: inline-block;
    }

    .fee{
        font-size:10px;
        text-align: left;

        padding-left:15px;

    }

    .text-color{
        color: rgba(98 , 243, 246, 0.5);
    }
    
</style>


