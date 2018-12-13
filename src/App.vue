<template>
  <div id="app">
    <web-header id="header"> </web-header>
    <currency-view id="currency-view"> </currency-view>
    <sub-header id="sub-header"> </sub-header>
    <trades id="trades"> </trades>
    <exchange-graph id="exchange"> </exchange-graph>
    <transactions id="transactions"></transactions>

    
    
  </div>
</template>

<script>
import CurrencyView from './components/CurrencyView'
import CoinItem from './components/CoinItem'

export default {
  name: 'App',
  components: {
    CurrencyView,
    CoinItem
  },
  data() {
    return{
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  /*display: inline-flex;*/
}

#header{
  width:100%;
  height: 10vh;

  
}

#sub-header{
  width: 60%;
    height: 9vh;
    display: inline-flex;
    float:left;
}

#currency-view{
  width:15%;
  height:90vh;
  
  /*box-shadow: 8px 0 10px -6px black;*/
  display: inline-flex;
  float: left;
}

#exchange{
  width:60%;
  height:60vh;
  /*display: inline-block;*/
  float:left;
}

#trades{
  width:25%;
  height:69vh;
  float:right;
}

#transactions{
  height:20vh;
  width:85%;
  display: flex;
}

::-webkit-scrollbar {
    width: 5px;
}
 
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255,255,255,0.05); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); 
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(255,0,0,0.4); 
}
</style>
