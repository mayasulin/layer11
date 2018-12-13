/*TODO: put logo in the middle of the div. why margin: 0 auto doesnt work????? */

<template>
    
    <div id="header">
        <div class="header-left">
            <div class="wrap-all">
                <div class="logo">
                    <div class="wrap-lines"> 
                        <div class="line line-tb-width top-color"></div>
                        <div class="line line-mid-width mid-color"></div>
                        <div class="line line-tb-width bott-color"></div>
                    </div>

                </div>
                <div class="title">
                    <h1>DX</h1>
                </div>
            </div>
        </div>

        <div class="header-right"> 
            <div class="fix-width">
                <ul class="navbar">
                    <li class="navbar-small-spread li-border-right">
                        <span>FUNDS</span>
                        <div class="triangle-down"></div>
                    
                    </li>
                    <li class="navbar-special-spread li-border-right">
                        <ul class="ul-spread">
                        <li v-for="s in stats" :key="s.title">
                            <floating-label :title="s.title" :value="s.value"> </floating-label>
                            </li>
                            <li>
                                <div class="triangle-down li-group"></div>
                            </li>
                        </ul>
                    </li>
                    <li class="navbar-spread">
                        <div class="fix-align">                          
                            <p class="name-style">{{fullName}}</p>
                            <span class="time-style">{{dateTime | moment("hh:mm:ss")}} </span>
                            <span class="date-style">{{dateTime| moment("DD MMM, YYYY")}}</span>
                        </div>

                        <div class="fix-align"><div class="triangle-down"></div></div>
                    </li>
                </ul>

                <div class="logo-pic-dim">
                    <img class="logo-pic-dim" :src="pics.flag" /> 
                </div>
            </div>
        </div>

    </div>


</template>


<script>
import dumbble from '@/assets/dmbl.gif';
export default {
    name: 'web-header',
    mounted: function() {
        this.updateDateTime();
    },
    data(){
        return{
            dateTime: new Date(),
            pics: {
                flag: dumbble,
            },
            stats: [
                {
                    title: 'USD Value',
                     value: '$21,000' 
                }, 
                {
                    title: 'CFD Margin', 
                    value: '$18,000'
                },
                {
                    title: 'P&L', 
                    value:'$2,000'
                },
                {
                    title:'Available to trade', 
                    value: '$3,000'
                }
                ],

            userInfo: {
                firstName: 'Daniel',
                lastName: 'Daniel'
            }
        } 
    },

    filters: {
        uppercase: function(x){
            return x.toUpperCase();
        }
    },

    computed: {
        fullName: function(){
            return this.userInfo.firstName + ' ' + this.userInfo.lastName;
        },
        getDateTime: function(){
            return new Date();
        }
    },
    methods: {
        updateDateTime: function(){
           setInterval(function(){
                this.dateTime =  new Date();
            }.bind(this), 1000);
        }
    }

    
}

</script>


<style scoped>
h1, p{
    margin: 0;
    padding: 0;
    width:fit-content;
}

ul{
    list-style: none;
}

ul >li{
    display: inline-block;
}

#header{
    background-color: rgb(25,52,69);
    color:white;
    text-align: left;
}

.header-left{
    height: 100%;
    width: 20%;
    text-align: left;
    float: left;
}

.wrap-all{
    vertical-align: middle;
    width:100%;

}
.logo{
    height:100%;
    width:fit-content;

    display: inline-block;
    vertical-align: middle;
}

.title{
    display: inline-flex;
    vertical-align: middle;
    height: 100%;
    width: 50%;

}


.line{
    margin:5px;
    padding: 0;

    height: 5px;
}

.line-tb-width{
    width:50px;
}

.line-mid-width{
    width:35px;
}

.top-color{
    background-color: rgb(255,16,93);
}

.mid-color{
    background-color: rgb(173,251,9);
}

.bott-color{
    background-color:rgb(99, 238, 241);
}

.header-right{
width: 80%;
    display: inline-flex;
        height:100%;
    
}

.fix-width{
    width:100%;
    height:100%;
}

.navbar{
    width:90%;
    display: inline-block;
    vertical-align: middle;
    padding:0;
}

.navbar-spread{
    width:27%;
}

.navbar-small-spread{
    width:15%;
    vertical-align: middle;
    text-align: right;
    padding-right:10px;
}

.navbar-special-spread{
    width:50%;
}

.ul-spread > li{
    width:20%;
}

.ul-spread> li:last-child{
    width:fit-content;
}



.li-group{
    position: relative;
}

.name-style{
    font-size:18px;
    padding-bottom: 2px;
}

.date-style{
    opacity: 0.5;
    font-size:10px;
    
}

.time-style{
    font-size:12px;
    margin-right:5px;
}

.li-border-right{
    border-right:1px solid rgba(255,255,255,0.5);
    box-sizing: border-box;
}

.triangle-down{
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 5px solid rgba(255,255,255,0.5);
    display: inline-block;
    vertical-align: middle;

}

.fix-align{
    width: fit-content;
    display: inline-block;
    vertical-align: middle
}

.logo-pic-dim{

    display: inline-block;
    width:fit-content;
    vertical-align: sub;
}

.logo-pic-dim > img{
    width:40px;
    height:40px;
}

</style>



