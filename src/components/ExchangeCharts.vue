<template>
    <div id="graph">
        <img class="pic-dim" :src="pics.exchange_graph_img" />
    </div>
</template>

<script>
import exchange_graph_img from '@/assets/exchange_graph_img.jpg';
export default {
    name: 'graph',
    data() {
        return{
            pics: {
                exchange_graph_img: exchange_graph_img
            }
        }
    }
    
    
}
</script>

<style scoped>
    .pic-dim{
        height:100%;
        width:100%;
    }
</style>
