// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CoinItem from './components/CoinItem'
import Tabs from './components/Tabs'
import Tab from './components/Tab'
import Header from './components/Header'
import Graph from './components/ExchangeCharts'
import SubHeader from './components/SubHeader'
import Marketing from './components/Marketing'
import Transactions from './components/Transactions'
import FloatingLabel from './components/FloatingLabel'
import TradeWorth from './components/TradeWorth'
import TradeAction from './components/TradeAction'


Vue.config.productionTip = false
Vue.component('coin-item', CoinItem);
Vue.component('tabs', Tabs);
Vue.component('tab-item', Tab);
Vue.component('web-header', Header);
Vue.component('exchange-graph', Graph);
Vue.component('sub-header', SubHeader);
Vue.component('trades', Marketing);
Vue.component('transactions', Transactions);
Vue.component('floating-label', FloatingLabel);
Vue.component('trade-worth', TradeWorth);
Vue.component('trade-action', TradeAction);

Vue.use(require('vue-moment'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
