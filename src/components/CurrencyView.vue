
/*TODO: add search nav !!! */
<template>
<div id="currency-view">
<tabs>
        <tab-item name="BTC" :selected="true" class="scrollbar">

          <table>
            <tr v-for="c in coins" :key="c.id" class="coin-item-border">
              <td class="bullet-size tr-left-cell">•</td>
              <td class="td-right-cell"> <coin-item :info="c"> </coin-item></td>
            </tr>
             </table>
        </tab-item> 

        <tab-item name="ETH">
          <h1>ETH TRADE</h1>
        </tab-item>

        <tab-item name="EUR">
          <h1>EUR TRADE</h1>
        </tab-item>

        <tab-item name="USDT">
          <h1>USDT TRADE</h1>
        </tab-item>
     
    </tabs>


</div>
</template>

<script>

export default {
        name: 'CurrencyView',
        data(){
          return{
              coins:[
        {
          id:0,
          name: 'Bitcoin',
          percentage: '-222%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 1,
          name: 'Dash',
          percentage: '+10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 2,
          name: 'Litecoin',
          percentage: '-10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 3,
          name: 'Monero',
          percentage: '+10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 4,
          name: 'Ripple',
          percentage: '+10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },        {
          id:5,
          name: 'Bitcoin',
          percentage: '-222%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 6,
          name: 'Dash',
          percentage: '+10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 7,
          name: 'Litecoin',
          percentage: '-10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 8,
          name: 'Monero',
          percentage: '+10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },
        {
          id: 9,
          name: 'Ripple',
          percentage: '+10000.31%',
          vol: '16,5555 BTC',
          beforeSlash: '0.000000101',
          afterSlash: '0.13$'
        },

      ]
          }
       
        }

}
</script>

<style scoped>
 
 /*TODO: Change scrollbar!!!*/

  #currency-view{
    overflow-x: hidden;
    background-color: rgb(21, 39, 59);
  }



  .bullet-size{
   color:rgb(98 , 243, 246);
   font-size:40px;
  }

  .coin-item-border > td{
    padding-bottom: 2px;
  }

  .coin-item-border{
    border-bottom:1px solid rgba(255,255,255,0.1);
      
  }
  table{
    border-collapse: collapse;
    width:100%;
  }

  .td-left-cell{
    width:10%;
  }

  .td-right-cell{
    width:90%;
  }
</style>



