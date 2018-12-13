
import bitcoin from '@/assets/bitcoin.png';
import dash from '@/assets/dash.png';
import litecoin from '@/assets/litecoin.png';
import monero from '@/assets/monero.png';
import ripple from '@/assets/ripple.png';

const CoinStroe = {

    data:{
        acronyms: {
            bitcoin: 'BTC',
            monero: 'XRP',
            dash: 'DASH',
            litecoin:'LTC',
            ripple:'XRP'
        },

        pics: {
            bitcoin: bitcoin,
            dash: dash,
            litecoin: litecoin,
            monero: monero,
            ripple: ripple
        },

        coinSigns:{
            bitcoin: '฿',
            dollar: '$'
        }
        
    },

    methods:{
        getAcronym: function(name){
            let lowercase_name = name.toLowerCase();
            return CoinStroe.data.acronyms[lowercase_name];
        },

        getPic: function(name){
            console.log(name);
            let lowercase_name = name.toLowerCase();
            return CoinStroe.data.pics[lowercase_name];

        },

        getMark: function(name){
            let lowercase_name = name.toLowerCase();
            return CoinStroe.data.coinSigns[lowercase_name];
        }
    }
};

export default CoinStroe;

