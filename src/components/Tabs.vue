<template>

    <div class="fit scrollbar" id="Tabs">
        <div class="tabs panel-block">
            <ul class="tabs-list" :style="styles">
                <li v-for="tab in tabs" :key="tab.name" :class="{ 'is-active': tab.isActive, 'extra-border': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name | toUpperCase }}</a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
                <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Tabs',
    props: ['styles'],
    data() {
        return { 
            tabs: [],
             };
    },

    created() {
        this.tabs = this.$children;
    },

    mounted(){
        
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },

    filters:{
        toUpperCase: function(x){
            return x.toUpperCase();
        }
    },

    computed:{
        css: function(){
             let css = "";
            if(this.styles){                     
                for(var t in this.styles){
                    console.log(t, this.styles[t]);
                    css+= t + ':"' + this.styles[t] + '",';
                }
            }


            return css;
        }
    }

}
</script>

<style scoped>

.fit{
    width:100%;
}
    .is-Active{
        border-bottom:2px solid;
         border-top: 1px solid transparent;
         color:  rgb(98 , 243, 246);
    }

    .tabs a {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  /* border-bottom: 1px solid #dbdbdb;
  color: #4a4a4a; */
  color:white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-bottom: -1px;
  padding: 6px 12px;
  vertical-align: top;
  cursor:pointer;
}


.tabs li {
  display: block;
}

.tabs li.is-active a {
  border-bottom-color: rgb(98 , 243, 246);
  color:  rgb(98 , 243, 246);
  border-bottom:3px solid;
}

.tabs ul {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 1px solid #3d3a3a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.tabs-list{
    padding:0;
    
}

.panel-block {
  color: #363636;
  display: block;
  line-height: 5px;
  font-size:13px;
  position: sticky;
  top:0;
  background-color: #15273b;
  
}

a.panel-block:hover {
  background-color: whitesmoke;
}

.panel {
  border: 1px solid #dbdbdb;
  border-radius: 5px;
}

.extra-border{
    border-bottom:3px;
}

</style>