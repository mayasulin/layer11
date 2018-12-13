<template>
    <div id="floating-label">
        <div class="group">
            <label class="float-label label-font">{{title | uppercase}}</label>
            <span class="lable-info data-font-size"> {{value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'floating-label',
    props:{
        title:{
            type: String,
            required: true

        },
        value:{
            type: [String,Number],
            required: true

        }

    },
    filters: {
        uppercase: function(x){
            return x.toUpperCase();
        }
    },
}
</script>

<style scoped>
.group{
    position: relative;
    color:white;
}
.label-font{
    font-size: 8px;
    transform: translate3d(0, -100%, 0);
    opacity: 1;
}

.data-font-size{
    font-size:15px;

}

.float-label{
    position: absolute;
    transition: all 200ms;
    opacity: 0.5;
}
</style>

