<template>
    <div id="coin-item">
     <table>
         <tr>
            <td class="cell-padding"> <img :src="getPic(info.name)" class="pic-dim" /> </td>
            <td>  <h3 :class="numberColor" class="align-left">{{info.percentage}}</h3></td>
         </tr>

         <tr>
             <td class="font-size cell-padding"> <p>{{info.name}}</p></td>
             <td class="font-size align-left"><p>{{info.beforeSlash}} / {{info.afterSlash}}</p> </td>

         </tr>

         <tr>
             <td class="cell-padding"><h4>{{getAcronym(info.name)}}</h4> </td>
             <td class="font-size align-left"><p>vol. {{info.vol}}</p></td>
         </tr>

     </table>
    </div>
</template>

<script>
import CoinStore from '../stores/CoinStore'

export default {
  name: 'CoinItem',
  props: ['info'],
  data () {
    return {
    }
  },
  computed:{
      numberColor: function(){
          return (this.info.percentage).includes('+')? 'positive' : 'negative';
      }
  },

  methods:{
      getPic: function(name){
          return CoinStore.methods.getPic(name);
      },
      getAcronym: function(name){
          return CoinStore.methods.getAcronym(name);
      }
  }
}
</script>


<style scoped>
    p, span, h3, h4{
        padding: 0;
        margin: 0;
        
    }

    table{
        width:100%;
    }
    #coin-item{
        width:100%;
        color:white;
    }

  .pic-dim{
      height:30px;
      width:30px;
  }

  .font-size{
      font-size: 12px;
  }

  .cell-padding{
      padding-right: 10px;
  }

  .positive{
      color:rgb(150, 213, 64);
  }

  .negative{
      color: rgb(180, 44, 108);
  }

  .align-left{
      text-align:left;
  }
  
  </style>

