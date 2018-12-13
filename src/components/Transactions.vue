<template>
    <div id="transactions">
        <tabs>
            <tab-item v-for="(value, index) in tabs" :key="value" :name="value" :selected="!index">
                <table>
                    <thead>
                        <th v-for="val in tbl_headers" :key="val">{{val | toUpperCase}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(order,index) in ordersInfo" :key="index">
                            <td>
                                <img class="pic-dim" :src="getPic(order.pair)" />
                                {{getAcronym(order.pair)}} / BTC
                            </td>
                            <td>{{order.date}}</td>
                            <td>{{order.type}}</td>
                            <td>{{order.side}}</td>
                            <td>{{order.price}}</td>
                            <td>{{order.current}}</td>
                            <td>{{order.stopLoss}}</td>
                            <td>{{order.takeProfit}}</td>
                            <td>{{order.amount}}</td>
                            <td>{{order.filled}}</td>
                            <td>{{order.triggerCondition}}</td>
                            <td>{{order.action}}</td>
                        </tr>
                    </tbody>
                </table>
            </tab-item>
        </tabs>
    </div>
</template>

<script>
import CoinStore from '../stores/CoinStore'
export default {
    name: 'transactions',
    data(){
        return{
            tabs:['open orders','order history','trade history'],
            tbl_headers:['pair', 'date', 'type', 'side', 'price', 'current price', 'stop loss', 'take profit', 'amont', 'filled %', 'trigger condition', 'action'],
            ordersInfo:[
                {
                        pair: 'monero',
                        date:'12-29 15:56:00',
                        type:'limit',
                        side:'Sell',
                        price:'0.00145657',
                        current: '4545',
                        stopLoss:'0.00145657',
                        takeProfit:'0.00145657',
                        amount:'93.0000000',
                        filled:15.15,
                        triggerCondition:'GTC',
                        action: 'cancle'
                    },
               {
                        pair: 'dash',
                        date:'12-29 15:56:00',
                        type:'limit',
                        side:'Sell',
                        price:'0.00145657',
                        current: '4545',
                        stopLoss:'0.00145657',
                        takeProfit:'0.00145657',
                        amount:'93.0000000',
                        filled:15.15,
                        triggerCondition:'GTC',
                        action: 'cancle'
                    },
               {
                        pair: 'dash',
                        date:'12-29 15:56:00',
                        type:'limit',
                        side:'Sell',
                        price:'0.00145657',
                        current: '4545',
                        stopLoss:'0.00145657',
                        takeProfit:'0.00145657',
                        amount:'93.0000000',
                        filled:15.15,
                        triggerCondition:'GTC',
                        action: 'cancle'
                    },
            ]
        }
    },
    methods:{
        isSelected: function(index){

        },

        getAcronym: function(name){
            return CoinStore.methods.getAcronym(name);
        },

        getPic: function(name){
            return CoinStore.methods.getPic(name);
        }
    },

    filters: {
        toUpperCase: function(name){
            return name.toUpperCase();
        }
    }
}
</script>


<style scoped>
    table{
        width:100%;
        border-collapse: collapse;
        height: 100%;
    }

    table > tbody{
        background-color: rgb(25,52,69);
        width:100%;
        color:white;
    }

    table > tbody > tr{
    border-bottom: 1px solid rgba(255,255,255,0.5);
    box-sizing: border-box;
    line-height: 23px;
    font-size: 14px;
    }

    tr:last-child{
        border-bottom:none;
    }

    table >thead{
        font-size:12px;
       
    }

    .pic-dim{
        width:10px;
        height:10px;
    }
</style>

